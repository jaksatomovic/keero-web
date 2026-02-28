import { Brain, Cable, Cpu, Mic, Palette, Wrench } from "lucide-react";

const steps = [
  {
    icon: Brain,
    title: "Companion State Engine",
    description:
      "Mood core tracks social, energy, and focus signals over time to produce CALM, CURIOUS, PLAYFUL, TIRED, and OVERSTIMULATED states.",
    color: "#7C8DFF",
  },
  {
    icon: Mic,
    title: "Voice + Intent Layer",
    description:
      "Speech input and expressive response output drive natural interaction loops, with local-first control over behavior.",
    color: "#9EE6CF",
  },
  {
    icon: Cable,
    title: "Modular Hardware Bus",
    description:
      "Planned compatibility with SparkBot-style strip modules means expandable sensors and interaction blocks without redesigning the base.",
    color: "#F4C095",
  },
  {
    icon: Palette,
    title: "Expression Stack",
    description:
      "Emotes, GIF animations, themes, tints, haptics, and sound FX map to mood/state so the robot feels alive and readable.",
    color: "#7C8DFF",
  },
  {
    icon: Cpu,
    title: "Desktop + Firmware Tooling",
    description:
      "Desktop app assists creation and control, while firmware handles real-time execution on ESP-class hardware.",
    color: "#9EE6CF",
  },
  {
    icon: Wrench,
    title: "WireClaw Convergence",
    description:
      "WireClaw functionality is being merged in to create one coherent all-in-one robotics software and hardware experience.",
    color: "#7C8DFF",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-[var(--color-retro-card)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl brand-font mb-4">System Blueprint</h2>
          <p className="text-xl text-[var(--color-retro-fg-secondary)] max-w-2xl mx-auto">
            Core layers behind KEERO, from behavioral intelligence to hardware integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
