import Reveal from "@/components/Reveal";
import ActiveNav from "@/components/ActiveNav";

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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070A0F] text-white">
      {/* ========================================
          PERSISTENT AMBIENT BACKGROUND
      ======================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="site-ambient-glow absolute h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px] sm:h-[800px] sm:w-[800px] sm:blur-[180px]" />

        {/* Floating Particles */}
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

      {/* ========================================
          NAVIGATION
      ======================================== */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070A0F]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 min-[360px]:px-5 min-[360px]:py-5 sm:px-6 md:px-10">
          <a
            href="#"
            className="shrink-0 whitespace-nowrap text-[11px] font-semibold tracking-[0.14em] text-white min-[360px]:text-xs min-[360px]:tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]"
          >
            KYLE ABAD
          </a>

          <ActiveNav />
        </div>
      </nav>

      {/* ========================================
          HERO
      ======================================== */}
      <section className="relative z-10 flex min-h-screen items-center px-4 pb-12 pt-24 min-[360px]:px-5 min-[360px]:pb-16 min-[360px]:pt-28 sm:px-6 md:px-10">
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <p className="mb-4 max-w-[260px] text-[10px] uppercase leading-5 tracking-[0.16em] text-white/40 min-[360px]:mb-6 min-[360px]:max-w-xs min-[360px]:text-xs min-[360px]:tracking-[0.2em] sm:max-w-none sm:text-sm sm:tracking-[0.25em]">
              Computer Engineering Student / Graphic Designer
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="max-w-5xl text-[clamp(2.6rem,13vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl lg:text-9xl">
              Design.
              <br />
              Technology.
              <br />
              <span className="text-white/35">Somewhere between.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-5 min-[360px]:mt-10 min-[360px]:gap-6 sm:flex-row sm:items-center">
              <a
                href="#work"
                className="group flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-xs transition hover:border-white/50 hover:bg-white hover:text-black min-[360px]:px-6 min-[360px]:py-3 min-[360px]:text-sm"
              >
                Explore my work

                <span className="transition-transform group-hover:translate-y-1">
                  ↓
                </span>
              </a>

              <p className="max-w-sm text-xs leading-5 text-white/40 min-[360px]:text-sm min-[360px]:leading-6">
                Creating visual experiences and exploring software, machine
                learning, and hardware.
              </p>
            </div>
          </Reveal>
        </div>

        <p className="absolute bottom-8 right-6 hidden text-xs uppercase tracking-[0.2em] text-white/25 md:block md:right-10">
          Tagbilaran City, Bohol
        </p>
      </section>

      {/* ========================================
          SELECTED WORK
      ======================================== */}
      <section
        id="work"
        className="relative z-10 scroll-mt-20 border-t border-white/10 px-5 py-24 sm:px-6 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                  01 / Selected Work
                </p>

                <h2 className="text-4xl tracking-tight md:text-6xl">
                  Selected projects.
                </h2>
              </div>

              <p className="hidden text-sm text-white/30 md:block">
                Technology × Exploration
              </p>
            </div>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {/* AquaSight */}
            <Reveal>
              <article className="group relative">
                {/* Full Card Link */}
                <a
                  href="/projects/aquasight"
                  aria-label="View AquaSight project"
                  className="absolute inset-0 z-40 rounded-3xl"
                />

                <div className="project-card project-card-aquasight grid cursor-pointer overflow-hidden rounded-3xl border border-transparent bg-[#091923] hover:border-cyan-400/10 md:grid-cols-[0.75fr_1.25fr]">
                  {/* AquaSight Information */}
                  <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden p-6 sm:p-8 md:min-h-[550px] md:p-10 lg:p-12">
                    <div className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

                    <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full border border-white/5" />

                    <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border border-white/5" />

                    <div className="relative z-10">
                      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/30">
                        Academic Project · 2026
                      </p>

                      <h3 className="text-4xl tracking-[-0.04em] md:text-5xl lg:text-6xl">
                        AquaSight
                      </h3>

                      <p className="mt-4 text-sm text-white/40">
                        Water Clarity Classification System
                      </p>

                      <p className="mt-8 max-w-sm text-sm leading-7 text-white/50">
                        A mobile application using a CNN-based machine learning
                        model to classify water clarity from captured images.
                      </p>
                    </div>

                    <div className="relative z-10 mt-16">
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Machine Learning",
                          "TensorFlow Lite",
                          "Mobile Development",
                        ].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                          01
                        </span>

                        <div className="flex items-center gap-2 text-sm text-white/40 transition group-hover:text-white">
                          <span>View Project</span>

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AquaSight Visual */}
                  <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden bg-[#0B202B] sm:min-h-[500px] md:min-h-[550px]">
                    <div className="ambient-pulse pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

                    <div className="pointer-events-none absolute bottom-[-10px] left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-[11vw] font-semibold leading-none tracking-[-0.07em] text-white/[0.035]">
                        AQUASIGHT
                      </span>
                    </div>

                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

                    <div className="relative z-10 w-[210px] transition duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] sm:w-[240px] md:w-[260px] lg:w-[280px]">
                      <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#15191d] bg-black shadow-2xl shadow-black/50">
                        <img
                          src="/projects/aquasight/aquasight-result.jpg"
                          alt="AquaSight mobile application classifying a water sample"
                          className="block h-auto w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* McClaw */}
            <Reveal>
              <article className="group relative">
                {/* Full Card Link */}
                <a
                  href="/projects/mcclaw"
                  aria-label="View McClaw project"
                  className="absolute inset-0 z-40 rounded-3xl"
                />

                <div className="project-card project-card-mcclaw grid cursor-pointer overflow-hidden rounded-3xl border border-transparent bg-[#111418] hover:border-white/10 md:grid-cols-[1.25fr_0.75fr]">
                  {/* McClaw Image */}
                  <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] md:min-h-[550px]">
                    <img
                      src="/projects/mcclaw/mcclaw-robot.jpg"
                      alt="McClaw motion-controlled mobile robotic arm prototype"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 flex flex-wrap gap-2 md:left-8 md:top-8">
                      <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                        Robotics
                      </span>

                      <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white/70 backdrop-blur-md">
                        Team Project
                      </span>
                    </div>
                  </div>

                  {/* McClaw Information */}
                  <div className="relative flex min-h-[420px] flex-col justify-between p-6 sm:p-8 md:min-h-[550px] md:p-10 lg:p-12">
                    <div>
                      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/25">
                        Academic Project · 2026
                      </p>

                      <h3 className="text-4xl tracking-[-0.04em] md:text-5xl lg:text-6xl">
                        McClaw
                      </h3>

                      <p className="mt-4 text-sm text-white/35">
                        Motion-Controlled Mobile Robotic Arm
                      </p>

                      <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
                        A team-built mobile robotic platform exploring wireless
                        motion control, embedded systems, motor control, and
                        gesture-based interaction through a wearable controller.
                      </p>
                    </div>

                    <div className="mt-16">
                      <div className="flex flex-wrap gap-2">
                        {["Arduino", "Embedded Systems", "Hardware"].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/35"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                          02
                        </span>

                        <div className="flex items-center gap-2 text-sm text-white/35 transition group-hover:text-white">
                          <span>View Project</span>

                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================
          EXPERIENCE
      ======================================== */}
      <section
        id="experience"
        className="relative z-10 scroll-mt-20 border-t border-white/10 px-5 py-24 sm:px-6 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-16 text-xs uppercase tracking-[0.25em] text-white/30">
              02 / Experience
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sm text-white/35">May — July 2026</p>
              </div>

              <div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl tracking-tight md:text-5xl">
                      Graphic Design Intern
                    </h2>

                    <p className="mt-3 text-lg text-white/45">Pedi App</p>
                  </div>

                  <p className="text-sm text-white/30">Bohol, Philippines</p>
                </div>

                <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg md:leading-8">
                  Created social media graphics, promotional materials, and
                  campaign assets for Pedi App services and events while working
                  within brand guidelines and incorporating design feedback.
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Social Media Design",
                    "Promotional Materials",
                    "Adobe Illustrator",
                    "Adobe Photoshop",
                    "Brand Guidelines",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========================================
          DESIGN × TECHNOLOGY
      ======================================== */}
      <section className="relative z-10 border-t border-white/10 px-5 py-24 sm:px-6 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-16 text-xs uppercase tracking-[0.25em] text-white/30">
              03 / Design × Technology
            </p>
          </Reveal>

          <div className="grid min-w-0 gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="min-w-0">
                <h2 className="max-w-xl text-3xl leading-[1.1] tracking-[-0.03em] sm:text-4xl md:text-6xl">
                  Exploring both sides of the screen.
                </h2>

                <p className="mt-8 max-w-xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
                  My work sits between design and technology. I&apos;m currently
                  exploring graphic design alongside software, machine learning,
                  and hardware — learning through projects and seeing where those
                  interests take me.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="min-w-0 space-y-10 lg:pt-2">
                <div className="border-t border-white/10 pt-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/25">
                    Design
                  </p>

                  <p className="break-words text-base leading-8 text-white/60 sm:text-lg">
                    Adobe Illustrator · Adobe Photoshop{" "}
                    <span className="text-white/30">(Basic)</span> · Canva ·
                    Figma <span className="text-white/30">(Basic)</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/25">
                    Programming & Mobile
                  </p>

                  <p className="break-words text-base leading-8 text-white/60 sm:text-lg">
                    C/C++ · Python{" "}
                    <span className="text-white/30">(Basic)</span> · Flutter{" "}
                    <span className="text-white/30">(Project Experience)</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/25">
                    AI & Machine Learning
                  </p>

                  <p className="break-words text-base leading-8 text-white/60 sm:text-lg">
                    CNN Image Classification · TensorFlow/Keras · TensorFlow Lite{" "}
                    <span className="text-white/30">(Project Experience)</span>
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/25">
                    Hardware & Embedded Systems
                  </p>

                  <p className="break-words text-base leading-8 text-white/60 sm:text-lg">
                    Arduino · Basic Sensor & Component Integration · Circuit
                    Design · PCB Design & Manual Etching · Soldering · Hardware
                    Prototyping
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT
      ======================================== */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-20 border-t border-white/10 px-5 py-24 sm:px-6 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-16 text-xs uppercase tracking-[0.25em] text-white/30">
              04 / Contact
            </p>
          </Reveal>

          <div className="grid min-w-0 gap-16 lg:grid-cols-2">
            <Reveal>
              <div className="min-w-0">
                <h2 className="max-w-3xl text-[clamp(2.75rem,13vw,4.5rem)] leading-[1] tracking-[-0.04em] md:text-7xl">
                  Let&apos;s make something interesting.
                </h2>

                <a
                  href="mailto:kyleandre689@gmail.com"
                  className="mt-10 inline-block max-w-full break-all border-b border-white/30 pb-1 text-base text-white/60 transition hover:border-white hover:text-white sm:text-lg"
                >
                  kyleandre689@gmail.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex min-w-0 flex-col justify-end gap-4 lg:items-end">
                <a
                  href="https://github.com/KyleAndre986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between border-t border-white/10 py-5 text-white/50 transition hover:text-white lg:max-w-sm"
                >
                  GitHub

                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kyle-abad-a58295422/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between border-t border-white/10 py-5 text-white/50 transition hover:text-white lg:max-w-sm"
                >
                  LinkedIn

                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="/Kyle-Abad-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between border-y border-white/10 py-5 text-white/50 transition hover:text-white lg:max-w-sm"
                >
                  Resume

                  <span className="transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Footer */}
          <div className="mt-32 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Kyle Abad</p>

            <p>Designed & built somewhere between design and technology.</p>
          </div>
        </div>
      </section>
    </main>
  );
}