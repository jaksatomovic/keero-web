import { Bot, Camera, CircuitBoard, Hand, Radar, Volume2 } from "lucide-react";

const modules = [
  {
    icon: CircuitBoard,
    name: "Core Strip Interface",
    details:
      "Compatible connector concept for SparkBot-style strip modules so expansion stays fast, clean, and maker-friendly.",
    tag: "Compatibility",
  },
  {
    icon: Radar,
    name: "Distance + Presence",
    details:
      "Proximity sensing modules for awareness, greeting logic, and adaptive interaction distance.",
    tag: "Sensing",
  },
  {
    icon: Hand,
    name: "Touch + Motion",
    details:
      "Tap and motion-aware modules mapped to playful reactions, mode switching, and contextual haptics.",
    tag: "Interaction",
  },
  {
    icon: Volume2,
    name: "Audio Personality Pack",
    details:
      "Speaker/mic route modules and expressive audio cues synchronized with mood transitions.",
    tag: "Voice",
  },
  {
    icon: Camera,
    name: "Vision-ready Slot",
    details:
      "Roadmap slot for camera-assisted context, lightweight scene cues, and visual-triggered behavior.",
    tag: "Roadmap",
  },
  {
    icon: Bot,
    name: "WireClaw Merge Layer",
    details:
      "All-in-one runtime that unifies brain logic, hardware drivers, and emotional expression in one stack.",
    tag: "All-in-one",
  },
];

export const Modules = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl brand-font mb-4">Hardware Modules</h2>
          <p className="text-xl text-[var(--color-retro-fg-secondary)] max-w-3xl mx-auto">
            KEERO is built as a modular robot platform. Add capabilities by snapping in compatible strip modules and behavior packs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <article key={index} className="retro-card retro-not-selected flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-retro-accent-light)]">
                    <Icon size={24} className="text-[var(--color-retro-accent)]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] px-2 py-1 rounded-full border border-[var(--color-retro-border-light)] text-[var(--color-retro-fg-secondary)]">
                    {module.tag}
                  </span>
                </div>
                <h3 className="text-lg font-black leading-tight">{module.name}</h3>
                <p className="text-sm text-[var(--color-retro-fg-secondary)]">{module.details}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
