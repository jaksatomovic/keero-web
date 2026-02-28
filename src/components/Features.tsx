import {
  AudioLines,
  BrainCircuit,
  Cpu,
  Gamepad2,
  Hand,
  MessageCircleHeart,
  Mic,
  Package,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Keero Brain Core",
    description:
      "State-based companion brain with mood, energy, focus, and social signals for believable long-running behavior.",
    color: "#7C8DFF",
  },
  {
    icon: MessageCircleHeart,
    title: "Emotion Engine",
    description:
      "Clawino-inspired emotional layer with GIF/emote cycling, affect transitions, and mood-driven reactions.",
    color: "#9EE6CF",
  },
  {
    icon: Mic,
    title: "Voice In + Voice Out",
    description:
      "Realtime voice pipeline: wake/listen interactions, expressive responses, and local processing-first architecture.",
    color: "#F4C095",
  },
  {
    icon: AudioLines,
    title: "Audio Personality",
    description:
      "Sound FX, response tones, and speaking styles that match mood and context, not just plain TTS playback.",
    color: "#7C8DFF",
  },
  {
    icon: Cpu,
    title: "Local + Embedded Stack",
    description:
      "Desktop tooling plus embedded firmware flow, built for fast iteration between simulator-like tests and hardware.",
    color: "#9EE6CF",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Conversation and behavior logic designed for local ownership of data, with minimal external dependency surface.",
    color: "#F4C095",
  },
  {
    icon: Zap,
    title: "Module Strip Compatibility",
    description:
      "Hardware plan supports SparkBot-style strip modules and connector ecosystem for quick plug-and-play expansion.",
    color: "#7C8DFF",
  },
  {
    icon: Package,
    title: "WireClaw All-in-One",
    description:
      "Unified roadmap that merges emotion, movement, interaction, and tools into one coherent robotics platform.",
    color: "#9EE6CF",
  },
  {
    icon: Hand,
    title: "Interactive Motion",
    description:
      "Tap, tilt, and motion-triggered reactions through sensor modules, haptics, and visual animation states.",
    color: "#F4C095",
  },
  {
    icon: Gamepad2,
    title: "Play Modes",
    description:
      "Story, game, and character interactions designed as reusable modes instead of one-off demos.",
    color: "#7C8DFF",
  },
  {
    icon: Sparkles,
    title: "Creator Friendly",
    description:
      "Composable tools for makers to define personalities, themes, expressions, and behavior packs without rewiring core logic.",
    color: "#9EE6CF",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl brand-font mb-4">What KEERO Is Becoming</h2>
          <p className="text-xl text-[var(--color-retro-fg-secondary)] max-w-2xl mx-auto">
            A detailed view of the platform: robot brain, expressive behavior, audio intelligence, and modular hardware.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
