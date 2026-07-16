const particles = [
  { className: "particle particle-1", left: "8%", top: "18%" },
  { className: "particle particle-4", left: "18%", top: "72%" },
  { className: "particle particle-7", left: "32%", top: "28%" },
  { className: "particle particle-10", left: "45%", top: "82%" },
  { className: "particle particle-2", left: "62%", top: "16%" },
  { className: "particle particle-5", left: "74%", top: "68%" },
  { className: "particle particle-8", left: "86%", top: "34%" },
  { className: "particle particle-11", left: "94%", top: "78%" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#070A0F] text-white">
      {/* ========================================
          PERSISTENT AMBIENT BACKGROUND
      ======================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Animated Ambient Glow */}
        <div className="site-ambient-glow absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px] sm:h-[700px] sm:w-[700px] sm:blur-[170px]" />

        {/* Sparse Floating Particles */}
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

        {/* Decorative Circles */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] sm:h-[500px] sm:w-[500px]" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] sm:h-[350px] sm:w-[350px]" />

        {/* Large Background 404 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="whitespace-nowrap text-[45vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.018] md:text-[30vw]">
            404
          </span>
        </div>
      </div>

      {/* ========================================
          NAVIGATION
      ======================================== */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#070A0F]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 min-[360px]:px-5 min-[360px]:py-5 sm:px-6 md:px-10">
          <a
            href="/"
            className="shrink-0 whitespace-nowrap text-[11px] font-semibold tracking-[0.14em] text-white min-[360px]:text-xs min-[360px]:tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]"
          >
            KYLE ABAD
          </a>

          <p className="shrink-0 whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-white/25 min-[360px]:text-xs min-[360px]:tracking-[0.2em]">
            Error 404
          </p>
        </div>
      </nav>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-start px-4 pb-28 pt-28 min-[360px]:px-5 min-[360px]:pt-32 sm:px-6 sm:pb-32 md:px-10 lg:items-center lg:py-32">
        <div className="max-w-3xl">
          {/* Error Label */}
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/30 min-[360px]:mb-6 min-[360px]:text-xs min-[360px]:tracking-[0.25em]">
            404 / Page Not Found
          </p>

          {/* Main Heading */}
          <h1 className="text-[clamp(2.75rem,13vw,7rem)] font-medium leading-[0.95] tracking-[-0.05em]">
            Lost somewhere
            <br />

            <span className="text-white/35">
              between design
              <br />
              and technology.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-xs leading-6 text-white/40 min-[360px]:mt-8 min-[360px]:text-sm min-[360px]:leading-7 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, may have moved,
            or perhaps never existed in the first place.
          </p>

          {/* Back Button */}
          <a
            href="/"
            className="group mt-8 flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-xs transition duration-300 hover:border-white/50 hover:bg-white hover:text-black min-[360px]:mt-10 min-[360px]:px-6 min-[360px]:py-3 min-[360px]:text-sm"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to Home
          </a>
        </div>
      </div>

      {/* ========================================
          FOOTER
      ======================================== */}
      <footer className="relative z-10 -mt-20 px-4 pb-8 min-[360px]:px-5 sm:px-6 md:px-10 lg:absolute lg:bottom-8 lg:left-0 lg:mt-0 lg:w-full lg:pb-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 pt-6 text-[10px] text-white/20 min-[360px]:text-xs lg:border-0 lg:pt-0">
          <p>© 2026 Kyle Abad</p>

          <p className="hidden sm:block">Design × Technology</p>
        </div>
      </footer>
    </main>
  );
}