import { MessageCircle, BookOpen, Dices, Mic, Cpu, Shield, Zap, Package } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI Characters",
    description: "Chat with any character you create. Customize personalities, voices, and behaviors.",
    color: "#7C8DFF",
  },
  {
    icon: BookOpen,
    title: "Interactive Stories",
    description: "Tell stories together with AI. Create adventures, mysteries, and narratives.",
    color: "#9EE6CF",
  },
  {
    icon: Dices,
    title: "AI Games",
    description: "Play games powered by local AI. Every session is unique and creative.",
    color: "#F4C095",
  },
  {
    icon: Mic,
    title: "Voice Cloning",
    description: "Clone voices in seconds. Record or upload audio to create custom voices.",
    color: "#7C8DFF",
  },
  {
    icon: Cpu,
    title: "Local Processing",
    description: "Everything runs on your machine. No cloud, no API keys, complete privacy.",
    color: "#9EE6CF",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your device. No tracking, no analytics, no external servers.",
    color: "#F4C095",
  },
  {
    icon: Zap,
    title: "ESP32 Integration",
    description: "Connect hardware devices. Flash firmware and control physical toys wirelessly.",
    color: "#7C8DFF",
  },
  {
    icon: Package,
    title: "Addon Packs",
    description: "Extend functionality with community addons. Share personalities, games, and voices.",
    color: "#9EE6CF",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl brand-font mb-4">Everything You Need</h2>
          <p className="text-xl text-[var(--color-retro-fg-secondary)] max-w-2xl mx-auto">
            A complete toolkit for creating AI-powered experiences, all running locally on your Mac.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="retro-card retro-not-selected flex flex-col gap-4 transition-all hover:shadow-[var(--shadow-retro-hover)]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <Icon size={24} style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-black leading-tight">{feature.title}</h3>
                <p className="text-sm text-[var(--color-retro-fg-secondary)]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
