import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "McClaw",
  description:
    "McClaw is a motion-controlled mobile robotic arm exploring embedded systems, wireless control, and robotics.",
};

const particles = [
  { className: "particle particle-1", left: "5%", top: "12%" },
  { className: "particle particle-2", left: "12%", top: "38%" },
  { className: "particle particle-3", left: "18%", top: "72%" },
  { className: "particle particle-4", left: "24%", top: "22%" },
  { className: "particle particle-5", left: "29%", top: "58%" },
  { className: "particle particle-6", left: "34%", top: "86%" },
  { className: "particle particle-7", left: "40%", top: "42%" },
  { className: "particle particle-8", left: "45%", top: "16%" },
  { className: "particle particle-9", left: "49%", top: "68%" },
  { className: "particle particle-10", left: "54%", top: "91%" },
  { className: "particle particle-11", left: "59%", top: "31%" },
  { className: "particle particle-12", left: "64%", top: "54%" },
  { className: "particle particle-1", left: "69%", top: "10%" },
  { className: "particle particle-2", left: "73%", top: "78%" },
  { className: "particle particle-3", left: "77%", top: "45%" },
  { className: "particle particle-4", left: "82%", top: "20%" },
  { className: "particle particle-5", left: "87%", top: "62%" },
  { className: "particle particle-6", left: "92%", top: "88%" },
  { className: "particle particle-7", left: "96%", top: "35%" },
  { className: "particle particle-8", left: "8%", top: "91%" },
  { className: "particle particle-9", left: "21%", top: "49%" },
  { className: "particle particle-10", left: "38%", top: "7%" },
  { className: "particle particle-11", left: "57%", top: "75%" },
  { className: "particle particle-12", left: "88%", top: "8%" },
];

export default function McClawPage() {
  const technologies = [
    ["01", "Arduino", "Microcontroller-based system control"],
    ["02", "Motor Control", "Movement and navigation of the mobile platform"],
    ["03", "Servo Control", "Movement and positioning of the robotic arm"],
    [
      "04",
      "Wireless Control",
      "Remote interaction through a wearable controller",
    ],
  ];

  const system = [
    {
      number: "01",
      title: "Motion Input",
      description: "Movement is captured through the wearable controller.",
    },
    {
      number: "02",
      title: "Wireless Control",
      description: "Control information is transmitted to the robotic system.",
    },
    {
      number: "03",
      title: "Mobile Platform",
      description:
        "The robot responds through controlled movement and navigation.",
    },
    {
      number: "04",
      title: "Robotic Arm",
      description: "Servo-driven joints enable manipulation and arm movement.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070A0F] text-white">
      {/* Persistent Ambient Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="site-ambient-glow absolute h-[600px] w-[600px] rounded-full bg-blue-500/[0.07] blur-[150px] sm:h-[800px] sm:w-[800px] sm:blur-[180px]" />

        {particles.map((particle, index) => (
          <span
            key={index}
            className={particle.className}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070A0F]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 md:px-10">
          <a
            href="/"
            className="shrink-0 text-xs font-semibold tracking-[0.18em] text-white transition hover:text-white/70 sm:text-sm sm:tracking-[0.2em]"
          >
            KYLE ABAD
          </a>

          <a
            href="/#work"
            className="nav-link group flex items-center gap-2 text-xs text-white/50 transition hover:text-white sm:text-sm"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Work
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-5 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-40 md:px-10 md:pb-20 md:pt-52">
        <div className="mx-auto max-w-7xl">
          {/* Project Metadata */}
          <Reveal>
            <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5 sm:items-center sm:pb-6">
              <p className="max-w-[160px] text-[10px] uppercase leading-5 tracking-[0.22em] text-white/30 sm:max-w-none sm:text-xs sm:tracking-[0.25em]">
                Academic Project · 2026
              </p>

              <p className="text-right text-[10px] uppercase leading-5 tracking-[0.22em] text-white/20 sm:text-xs sm:tracking-[0.25em]">
                02 / McClaw
              </p>
            </div>
          </Reveal>

          {/* Hero Information */}
          <Reveal delay={100}>
            <div className="grid gap-8 pb-12 pt-10 sm:gap-10 sm:pb-16 sm:pt-14 md:grid-cols-[1.3fr_0.7fr] md:items-end md:pb-20">
              <div>
                <h1 className="text-5xl tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl">
                  McClaw
                </h1>

                <p className="mt-4 text-base text-white/40 sm:mt-6 sm:text-lg md:text-xl">
                  Motion-Controlled Mobile Robotic Arm
                </p>

                <div className="mt-7 flex flex-wrap gap-2 sm:mt-10">
                  {[
                    "Robotics",
                    "Arduino",
                    "Embedded Systems",
                    "Hardware",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/40 sm:px-4 sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base sm:leading-8 md:justify-self-end">
                A team-built mobile robotic platform exploring wireless motion
                control, embedded systems, motor control, and gesture-based
                interaction through a wearable controller.
              </p>
            </div>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={200}>
            <div className="group overflow-hidden rounded-2xl bg-[#111418] sm:rounded-3xl">
              <img
                src="/projects/mcclaw/mcclaw-robot.jpg"
                alt="McClaw motion-controlled mobile robotic arm prototype"
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 border-b border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                01 / Overview
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-6xl">
                Exploring motion control through robotics.
              </h2>

              <div className="mt-10 grid gap-6 text-sm leading-7 text-white/45 sm:mt-14 sm:gap-8 sm:text-base sm:leading-8 md:grid-cols-2">
                <p>
                  McClaw was developed as a team academic project combining a
                  mobile robotic platform with an articulated robotic arm. The
                  project explored the integration of mechanical movement,
                  electronics, and embedded control into a single working
                  prototype.
                </p>

                <p>
                  A wearable controller enabled motion-based interaction with the
                  system, allowing the team to explore wireless communication and
                  gesture-based control alongside the robot&apos;s movement and
                  arm operation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* System */}
      <section className="relative z-10 border-b border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                02 / System
              </p>
            </div>

            <div>
              <h2 className="text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-6xl">
                From motion to movement.
              </h2>

              <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
                {system.map((item) => (
                  <div
                    key={item.number}
                    className="border-b border-white/10 p-7 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.025] sm:border-r sm:p-8 sm:[&:nth-child(2)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2)]:border-r lg:last:border-r-0"
                  >
                    <p className="text-xs tracking-[0.2em] text-white/20">
                      {item.number}
                    </p>

                    <h3 className="mt-10 text-xl sm:mt-12">{item.title}</h3>

                    <p className="mt-5 text-sm leading-7 text-white/40 sm:mt-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Technology */}
      <section className="relative z-10 border-b border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                03 / Technology
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-6xl">
                Hardware, control, and interaction.
              </h2>

              <div className="mt-12 border-t border-white/10 sm:mt-16">
                {technologies.map(([number, name, description]) => (
                  <div
                    key={number}
                    className="grid gap-3 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.015] sm:grid-cols-[50px_1fr_1fr] sm:gap-4 sm:py-7"
                  >
                    <span className="text-xs text-white/20">{number}</span>

                    <span className="text-base text-white/80">{name}</span>

                    <span className="text-sm leading-6 text-white/35">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Project Documentation */}
      <section className="relative z-10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                04 / Project Documentation
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-6xl">
                Developed as a collaborative robotics project.
              </h2>

              <p className="mt-8 max-w-3xl text-sm leading-7 text-white/45 sm:mt-10 sm:text-base sm:leading-8">
                McClaw was developed collaboratively as an academic team project,
                bringing together hardware assembly, embedded systems, motion
                control, and robotic interaction to produce a functional mobile
                prototype.
              </p>

              <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
                <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/35 sm:px-4 sm:text-xs">
                  Team Project
                </span>

                <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/35 sm:px-4 sm:text-xs">
                  3 Members
                </span>

                <span className="rounded-full border border-white/10 px-3 py-2 text-[11px] text-white/35 sm:px-4 sm:text-xs">
                  Academic Project
                </span>
              </div>

              <a
                href="/projects/mcclaw/mcclaw-project-documentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-4 border-b border-white/30 pb-2 text-base text-white/60 transition hover:border-white hover:text-white sm:mt-12 sm:text-lg"
              >
                View Project Documentation
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-5 py-12 sm:px-6 sm:py-16 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/#work"
            className="group flex w-fit items-center gap-2 transition hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to selected work
          </a>

          <p>© 2026 Kyle Abad</p>
        </div>
      </footer>
    </main>
  );
}