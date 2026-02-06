import { Code, Download, Zap, Users } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download & Install",
    description: "Download KEERO for macOS. It's a single app bundle—no complex setup required.",
    color: "#7C8DFF",
  },
  {
    icon: Code,
    title: "Choose Your Model",
    description: "Select from pre-configured AI models or use your own. Everything runs locally on your Mac.",
    color: "#9EE6CF",
  },
  {
    icon: Zap,
    title: "Create & Customize",
    description: "Build characters, stories, games, and clone voices. Customize everything to your liking.",
    color: "#F4C095",
  },
  {
    icon: Users,
    title: "Share & Extend",
    description: "Install community addon packs or create your own. Share your creations with others.",
    color: "#7C8DFF",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-[var(--color-retro-card)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl brand-font mb-4">How It Works</h2>
          <p className="text-xl text-[var(--color-retro-fg-secondary)] max-w-2xl mx-auto">
            Getting started with KEERO is simple. Here's everything you need to know.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <Icon size={32} style={{ color: step.color }} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2 -z-10" style={{ backgroundColor: step.color, opacity: 0.2 }} />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-bold text-[var(--color-retro-accent)]">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-black leading-tight">{step.title}</h3>
                  <p className="text-sm text-[var(--color-retro-fg-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
