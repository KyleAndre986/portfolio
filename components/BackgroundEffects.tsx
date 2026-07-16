type BackgroundEffectsProps = {
  variant?: "default" | "aquasight" | "mcclaw";
};

const particles = [
  { left: "8%", top: "14%", size: 2, delay: "0s", duration: "16s" },
  { left: "18%", top: "72%", size: 1, delay: "2s", duration: "19s" },
  { left: "27%", top: "38%", size: 2, delay: "5s", duration: "21s" },
  { left: "38%", top: "84%", size: 1, delay: "1s", duration: "17s" },
  { left: "48%", top: "20%", size: 1, delay: "7s", duration: "23s" },
  { left: "57%", top: "62%", size: 2, delay: "3s", duration: "20s" },
  { left: "66%", top: "32%", size: 1, delay: "6s", duration: "18s" },
  { left: "74%", top: "78%", size: 2, delay: "4s", duration: "22s" },
  { left: "82%", top: "18%", size: 1, delay: "8s", duration: "24s" },
  { left: "89%", top: "55%", size: 2, delay: "2s", duration: "19s" },
  { left: "94%", top: "88%", size: 1, delay: "5s", duration: "21s" },
  { left: "12%", top: "48%", size: 1, delay: "9s", duration: "25s" },
];

export default function BackgroundEffects({
  variant = "default",
}: BackgroundEffectsProps) {
  const glowColor =
    variant === "aquasight"
      ? "bg-cyan-500/10"
      : variant === "mcclaw"
        ? "bg-blue-500/[0.07]"
        : "bg-blue-500/10";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Moving ambient glow */}
      <div
        className={`site-ambient-glow absolute h-[600px] w-[600px] rounded-full ${glowColor} blur-[150px] sm:h-[800px] sm:w-[800px] sm:blur-[180px]`}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="background-particle absolute rounded-full bg-white"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}