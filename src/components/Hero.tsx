import { Logo } from "./Logo";
import { Download, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-8">
          <Logo />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Cute Personal AI Companion
          <br />
          <span className="text-[var(--color-retro-accent)]">for Creators</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--color-retro-fg-secondary)] max-w-2xl mx-auto mb-8">
          Local AI toys, voice cloning, and interactive experiences. 
          Everything runs on your machine—no cloud, no tracking, just pure creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/jaksatomovic/keero-local"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn text-lg px-8 py-4 flex items-center gap-2"
          >
            <Download size={20} />
            Download for macOS
          </a>
          <a
            href="https://github.com/jaksatomovic/keero-local"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-btn retro-btn-outline text-lg px-8 py-4 flex items-center gap-2"
          >
            <Sparkles size={20} />
            View on GitHub
          </a>
        </div>
        
        <div className="mt-12 text-sm text-[var(--color-retro-fg-muted)]">
          <p>✨ 100% Local • 🔒 Private • 🎨 Open Source</p>
        </div>
      </div>
    </section>
  );
};
