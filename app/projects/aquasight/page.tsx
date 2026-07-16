import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AquaSight",
  description:
    "AquaSight is a water clarity classification system using CNN, TensorFlow Lite, and mobile machine learning.",
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

export default function AquaSightPage() {
  const technologies = [
    ["01", "CNN", "Image classification model"],
    ["02", "TensorFlow / Keras", "Model development and training"],
    ["03", "TensorFlow Lite", "On-device machine learning inference"],
    ["04", "Mobile Application", "Image capture and classification"],
  ];

  const classes = [
    {
      number: "01",
      title: "Clear",
      description:
        "Water samples with high visual transparency and minimal visible suspended particles.",
    },
    {
      number: "02",
      title: "Cloudy",
      description:
        "Water samples showing moderate turbidity or reduced visual transparency.",
    },
    {
      number: "03",
      title: "Murky",
      description:
        "Water samples with significant visual turbidity and low transparency.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070A0F] text-white">
      {/* Persistent Ambient Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="site-ambient-glow absolute h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px] sm:h-[800px] sm:w-[800px] sm:blur-[180px]" />

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
                01 / AquaSight
              </p>
            </div>
          </Reveal>

          {/* Hero Information */}
          <Reveal delay={100}>
            <div className="grid gap-8 pb-12 pt-10 sm:gap-10 sm:pb-16 sm:pt-14 md:grid-cols-[1.3fr_0.7fr] md:items-end md:pb-20">
              <div>
                <img
                  src="/projects/aquasight/aquasight-logo.png"
                  alt="AquaSight logo"
                  className="mb-7 h-16 w-16 object-contain sm:mb-10 sm:h-20 sm:w-20 md:h-24 md:w-24"
                />

                <h1 className="text-5xl tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl">
                  AquaSight
                </h1>

                <p className="mt-4 text-base text-white/40 sm:mt-6 sm:text-lg md:text-xl">
                  Water Clarity Classification System
                </p>

                <div className="mt-7 flex flex-wrap gap-2 sm:mt-10">
                  {[
                    "Machine Learning",
                    "CNN",
                    "TensorFlow",
                    "TensorFlow Lite",
                    "Mobile Development",
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
                A mobile application that uses a convolutional neural network to
                classify water clarity from captured images, bringing machine
                learning inference directly to a mobile device.
              </p>
            </div>
          </Reveal>

          {/* Application Visual */}
          <Reveal delay={200}>
            <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-3xl bg-[#0B202B] sm:min-h-[600px] md:min-h-[700px]">
              {/* Background Glow */}
              <div className="ambient-pulse pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

              {/* Decorative Circles */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] sm:h-[500px] sm:w-[500px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] sm:h-[400px] sm:w-[400px]" />

              {/* Background Text */}
              <div className="pointer-events-none absolute bottom-[-5px] left-1/2 -translate-x-1/2 whitespace-nowrap sm:bottom-[-20px]">
                <span className="text-[18vw] font-semibold leading-none tracking-[-0.07em] text-white/[0.035] sm:text-[11vw]">
                  AQUASIGHT
                </span>
              </div>

              {/* Phone Screenshot */}
              <div className="relative z-10 w-[220px] transition duration-700 ease-out hover:-translate-y-2 hover:scale-[1.02] sm:w-[280px] md:w-[300px]">
                <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#15191d] bg-black shadow-2xl shadow-black/50">
                  <img
                    src="/projects/aquasight/aquasight-result.jpg"
                    alt="AquaSight mobile application classifying a water sample"
                    className="block h-auto w-full"
                  />
                </div>
              </div>
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
                Exploring water clarity classification through computer vision.
              </h2>

              <div className="mt-10 grid gap-6 text-sm leading-7 text-white/45 sm:mt-14 sm:gap-8 sm:text-base sm:leading-8 md:grid-cols-2">
                <p>
                  AquaSight was developed as an academic machine learning project
                  focused on classifying the visual clarity of water samples
                  using image-based analysis.
                </p>

                <p>
                  The project combines a convolutional neural network with a
                  mobile application, allowing users to capture or select an
                  image and receive a predicted water clarity classification
                  directly on the device.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Classification */}
      <section className="relative z-10 border-b border-white/10 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="mx-auto grid max-w-7xl gap-10 sm:gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                02 / Classification
              </p>
            </div>

            <div>
              <h2 className="text-4xl tracking-[-0.04em] md:text-6xl">
                Three clarity classes.
              </h2>

              <div className="mt-12 grid overflow-hidden rounded-2xl border border-white/10 sm:mt-16 md:grid-cols-3">
                {classes.map((item) => (
                  <div
                    key={item.number}
                    className="border-b border-white/10 p-7 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.025] sm:p-8 md:border-b-0 md:border-r md:last:border-r-0"
                  >
                    <p className="text-xs tracking-[0.2em] text-white/20">
                      {item.number}
                    </p>

                    <h3 className="mt-10 text-2xl sm:mt-12">{item.title}</h3>

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
                From model training to mobile inference.
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
                From experimentation to a working mobile application.
              </h2>

              <p className="mt-8 max-w-3xl text-sm leading-7 text-white/45 sm:mt-10 sm:text-base sm:leading-8">
                The AquaSight project explored the development of an image
                classification model and its integration into a mobile
                application, covering model training, evaluation, TensorFlow Lite
                conversion, and on-device classification.
              </p>

              <div className="mt-10 flex flex-col items-start gap-6 sm:mt-12 sm:flex-row sm:items-center sm:gap-10">
                <a
                  href="/projects/aquasight/aquasight-project-documentation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 border-b border-white/30 pb-2 text-base text-white/60 transition hover:border-white hover:text-white sm:text-lg"
                >
                  View Project Documentation
                  <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/KyleAndre986/aquasight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 border-b border-white/30 pb-2 text-base text-white/60 transition hover:border-white hover:text-white sm:text-lg"
                >
                  View Source Code
                  <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>
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