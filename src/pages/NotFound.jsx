import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center" style={{ background: "var(--bg-page)", color: "var(--text-heading)" }}>
      <h1 className="text-4xl sm:text-6xl font-bold font-mono mb-3">404</h1>
      <p className="text-sm sm:text-base mb-6" style={{ color: "var(--text-muted)" }}>
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity"
        style={{ background: "var(--color-purple)" }}
      >
        <ArrowLeft size={14} />
        <span>Return to Home</span>
      </Link>
    </div>
  );
};
