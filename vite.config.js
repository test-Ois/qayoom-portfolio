import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// Load environment variables synchronously into process.env at Vite startup
const env = loadEnv("development", process.cwd(), "");
if (env.NVIDIA_API_KEY) {
  process.env.NVIDIA_API_KEY = env.NVIDIA_API_KEY;
}

// Custom Vite plugin to handle /api/chat during local `npm run dev`
const localApiPlugin = () => ({
  name: "local-api-handler",
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === "/api/chat" || req.url?.startsWith("/api/chat?")) {
        try {
          // Re-sync env variables from .env on each request if modified
          const currentEnv = loadEnv(server.config.mode || "development", process.cwd(), "");
          if (currentEnv.NVIDIA_API_KEY) {
            process.env.NVIDIA_API_KEY = currentEnv.NVIDIA_API_KEY;
          }

          // Collect request body chunks
          let body = "";
          for await (const chunk of req) {
            body += chunk;
          }
          req.body = body ? JSON.parse(body) : {};

          // Mock Vercel response helpers
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.json = (data) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
            return res;
          };

          const chatModule = await import("./api/chat.js");
          return chatModule.default(req, res);
        } catch (err) {
          console.error("[Vite Local API Proxy Error]:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: err.message || "Local dev API handler error" }));
          return;
        }
      }
      next();
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-markdown": ["react-markdown", "remark-gfm"],
          "vendor-icons": ["lucide-react", "react-icons"],
        },
      },
    },
  },
});
