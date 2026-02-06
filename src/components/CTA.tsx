import { Github, Download } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="retro-card retro-not-selected text-center space-y-8">
          <h2 className="text-4xl md:text-5xl brand-font mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--color-retro-fg-secondary)] max-w-2xl mx-auto">
            Download KEERO and start creating AI experiences on your Mac today.
            It's free, open source, and runs entirely on your machine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://github.com/jaksatomovic/keero-local"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn text-lg px-8 py-4 flex items-center gap-2"
            >
              <Download size={20} />
              Download Now
            </a>
            <a
              href="https://github.com/jaksatomovic/keero-local"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn retro-btn-outline text-lg px-8 py-4 flex items-center gap-2"
            >
              <Github size={20} />
              View Source Code
            </a>
          </div>
          
          <div className="pt-8 border-t border-[var(--color-retro-border)]">
            <p className="text-sm text-[var(--color-retro-fg-muted)]">
              Requires macOS with Apple Silicon (M1/M2/M3/M4). 
              <br />
              Built with Tauri, React, and Python.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
