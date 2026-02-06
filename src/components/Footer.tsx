import { Logo } from "./Logo";
import { Github, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-[var(--color-retro-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-sm text-[var(--color-retro-fg-secondary)]">
              Local AI Companion for Creators
            </span>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="https://github.com/jaksatomovic/keero-local"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-retro-fg-secondary)] hover:text-[var(--color-retro-accent)] transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://keero.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-retro-fg-secondary)] hover:text-[var(--color-retro-accent)] transition-colors"
            >
              <ExternalLink size={18} />
              Website
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-[var(--color-retro-border)] text-center">
          <p className="text-xs text-[var(--color-retro-fg-muted)]">
            © {new Date().getFullYear()} KEERO. Made with ❤️ by Jakša Tomović.
            <br />
            Open source and free to use.
          </p>
        </div>
      </div>
    </footer>
  );
};
