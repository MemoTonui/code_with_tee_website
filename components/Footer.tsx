export default function Footer() {
  return (
    <footer className="bg-dark py-14 text-white">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#home"
              className="text-4xl font-black tracking-[-0.08em]"
            >
              LSR
            </a>

            <p className="mt-2 text-sm font-semibold text-white/40">
              Learn. Solve. Repeat.
            </p>

            <p className="mt-6 max-w-sm leading-7 text-white/55">
              Software engineering and robotics education for children and
              teenagers aged 6–18.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex bg-yellow px-6 py-3 font-bold text-ink transition hover:-translate-y-0.5"
            >
              Start Learning
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white/40">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#software-engineering"
                className="text-white/65 transition hover:text-white"
              >
                Software Engineering
              </a>

              <a
                href="#robotics"
                className="text-white/65 transition hover:text-white"
              >
                Robotics
              </a>

              <a
                href="#learning"
                className="text-white/65 transition hover:text-white"
              >
                Learning
              </a>

              <a
                href="#projects"
                className="text-white/65 transition hover:text-white"
              >
                Projects
              </a>

              <a
                href="#about"
                className="text-white/65 transition hover:text-white"
              >
                About
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white/40">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-white/65">
              {/* Add the real LSR contact details here */}
              <p>Contact details coming soon</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LSR. All rights reserved.</p>

          <p>Learn. Solve. Repeat.</p>
        </div>
      </div>
    </footer>
  );
}