// src/components/AIChat.jsx
import { useState, useRef, useEffect } from "react";
import { Send, User, RefreshCw, AlertCircle, X, ExternalLink, ArrowDown, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SUGGESTED_QUESTIONS = [
  "What projects has Qayoom built?",
  "What is his experience with React and Next.js?",
  "Tell me about his work at Infotech Service",
  "How is InboxIQ AI architected?",
  "How can I contact Qayoom?",
];

const INITIAL_MESSAGE = {
  id: "welcome",
  role: "assistant",
  content: "Hello. I can answer questions about Qayoom's technical background, projects, system design choices, and contact information.",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const isSafeUrl = (url) => {
  if (!url) return false;
  const lowercase = url.toLowerCase().trim();
  return (
    lowercase.startsWith("https://") ||
    lowercase.startsWith("http://") ||
    lowercase.startsWith("mailto:") ||
    lowercase.startsWith("tel:")
  );
};

const markdownComponents = {
  a: ({ href, children, ...props }) => {
    if (!isSafeUrl(href)) {
      return <span>{children}</span>;
    }
    const isMailOrTel = href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        target={isMailOrTel ? "_self" : "_blank"}
        rel={isMailOrTel ? undefined : "noopener noreferrer"}
        className="inline-flex items-center gap-1 font-medium underline underline-offset-2 transition-colors duration-200"
        style={{ color: "var(--color-purple)" }}
        {...props}
      >
        <span>{children}</span>
        {!isMailOrTel && <ExternalLink size={11} className="opacity-80 shrink-0 inline-block" />}
      </a>
    );
  },
  p: ({ children }) => (
    <p className="mb-2 last:mb-0 leading-relaxed text-xs sm:text-sm" style={{ color: "var(--text-body)" }}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-4 mb-2 space-y-1 text-left text-xs sm:text-sm" style={{ color: "var(--text-body)" }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-4 mb-2 space-y-1 text-left text-xs sm:text-sm" style={{ color: "var(--text-body)" }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  strong: ({ children }) => <strong className="font-semibold" style={{ color: "var(--text-heading)" }}>{children}</strong>,
  code: ({ inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code
          className="px-1.5 py-0.5 rounded text-[11px] font-mono"
          style={{
            background: "var(--bg-tag)",
            border: "1px solid var(--border-tag)",
            color: "var(--color-purple)",
          }}
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <pre
        className="p-3 my-2 rounded-lg font-mono text-xs overflow-x-auto"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-card)",
          color: "var(--text-body)",
        }}
      >
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    );
  },
};

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [error, setError] = useState(null);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = (behavior = "smooth") => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior,
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom("auto");
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleScroll = () => {
    if (!messagesContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
    setShowScrollBottom(!isNearBottom);
  };

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    setError(null);
    setInputValue("");

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setStatusText("Retrieving response...");

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .slice(-8)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          conversationHistory: history,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || "Unable to reach the assistant right now. Please try again."
        );
      }

      const aiMsgId = (Date.now() + 1).toString();
      const initialAiMsg = {
        id: aiMsgId,
        role: "assistant",
        content: "",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      let aiResponseContent = "";
      let hasReceivedFirstChunk = false;

      if (res.body) {
        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let buffer = "";
        let streamDone = false;

        while (!streamDone) {
          const result = await reader.read();
          streamDone = result.done;
          if (streamDone) break;

          buffer += decoder.decode(result.value, { stream: true });
          const lines = buffer.split("\n\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed.startsWith("data: ")) {
              const dataStr = trimmed.slice(6);
              if (dataStr === "[DONE]") break;

              try {
                const parsed = JSON.parse(dataStr);
                if (parsed.error) throw new Error(parsed.error);
                if (parsed.content) {
                  if (!hasReceivedFirstChunk) {
                    hasReceivedFirstChunk = true;
                    setStatusText("");
                    setMessages((prev) => [...prev, initialAiMsg]);
                  }
                  aiResponseContent += parsed.content;

                  setMessages((prev) =>
                    prev.map((m) => (m.id === aiMsgId ? { ...m, content: aiResponseContent } : m))
                  );

                  if (!showScrollBottom) {
                    scrollToBottom("smooth");
                  }
                }
              } catch (e) {
                if (e.message !== "Unexpected end of JSON input") {
                  console.error("SSE parse error:", e);
                }
              }
            }
          }
        }
      }

      if (!hasReceivedFirstChunk) {
        throw new Error("Received empty response from assistant.");
      }
    } catch (err) {
      console.error("[AIChat Error]", err);
      setError(err.message || "Failed to complete request. Please try again.");
    } finally {
      setStatusText("");
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setStatusText("");
    setMessages([INITIAL_MESSAGE]);
    setError(null);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg cursor-pointer select-none text-xs font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-purple)",
                boxShadow: "0 2px 8px rgba(124, 58, 237, 0.3)",
              }}
              aria-label="Open portfolio assistant"
            >
              <Bot className="w-4 h-4" />
              <span>Ask Assistant</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-20 w-auto sm:w-[400px] h-[520px] max-h-[80vh] z-50 flex flex-col rounded-xl overflow-hidden shadow-2xl"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center justify-between border-b select-none shrink-0"
              style={{
                background: "var(--bg-page)",
                borderColor: "var(--border-card)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="p-1.5 rounded-md"
                  style={{
                    background: "var(--bg-pill)",
                    color: "var(--color-purple)",
                  }}
                >
                  <Bot className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-xs sm:text-sm tracking-tight" style={{ color: "var(--text-heading)" }}>
                    Portfolio Assistant
                  </h3>
                  <div className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                    Direct answers on projects &amp; background
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  className="p-1.5 rounded-md transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"
                  style={{ color: "var(--text-muted)" }}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-md transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"
                  style={{ color: "var(--text-muted)" }}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Conversation Stream */}
            <div
              ref={messagesContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-4 space-y-4 relative"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="w-full">
                  {msg.role === "user" ? (
                    <div className="flex justify-end items-start gap-2">
                      <div
                        className="max-w-[82%] p-3 rounded-lg text-left text-xs sm:text-sm text-white"
                        style={{
                          background: "var(--color-purple)",
                        }}
                      >
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                        <span className="block text-[10px] mt-1 text-right opacity-70 font-mono">
                          {msg.timestamp}
                        </span>
                      </div>
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 text-xs mt-1"
                        style={{
                          background: "var(--bg-pill)",
                          color: "var(--text-heading)",
                        }}
                      >
                        <User className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2.5 w-full text-left">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-1"
                        style={{
                          background: "var(--bg-pill)",
                          color: "var(--color-purple)",
                        }}
                      >
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0 pr-1">
                        <div className="text-[11px] font-semibold mb-1" style={{ color: "var(--text-heading)" }}>
                          Assistant
                        </div>
                        <div className="assistant-content text-xs sm:text-sm leading-relaxed">
                          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                        <span className="block text-[10px] mt-1.5 opacity-50 font-mono" style={{ color: "var(--text-muted)" }}>
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isLoading && statusText && (
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                  <span>{statusText}</span>
                </div>
              )}

              {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-500 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span className="flex-1 text-left">{error}</span>
                </div>
              )}
            </div>

            {/* Scroll bottom helper */}
            {showScrollBottom && (
              <button
                type="button"
                onClick={() => scrollToBottom("smooth")}
                className="absolute bottom-16 right-4 p-1.5 rounded-full shadow-md transition-colors z-10 cursor-pointer"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  color: "var(--text-heading)",
                }}
                title="Scroll down"
              >
                <ArrowDown size={12} />
              </button>
            )}

            {/* Suggested Questions */}
            {messages.length <= 1 && !isLoading && (
              <div
                className="px-3 py-2 flex flex-wrap gap-1.5 border-t shrink-0"
                style={{
                  background: "var(--bg-page)",
                  borderColor: "var(--border-card)",
                }}
              >
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="text-[11px] px-2.5 py-1 rounded-md text-left transition-colors cursor-pointer"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      color: "var(--text-body)",
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div
              className="p-3 border-t relative shrink-0"
              style={{
                background: "var(--bg-page)",
                borderColor: "var(--border-card)",
              }}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  className="flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none transition-colors"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-card)",
                    color: "var(--text-heading)",
                  }}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2 rounded-lg text-white transition-opacity cursor-pointer disabled:opacity-40"
                  style={{ background: "var(--color-purple)" }}
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
