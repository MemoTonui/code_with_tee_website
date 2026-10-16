const CONTACT_EMAIL = "info@lsr.co.ke";

const WHATSAPP_NUMBER = "254748098387";
const WHATSAPP_DISPLAY = "+254 748 098 387";
const WHATSAPP_MESSAGE = "Hi LSR, I'd like to know more about your classes.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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

            <address className="mt-5 flex flex-col gap-4 not-italic">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/35">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 inline-block break-all text-white/65 transition hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/35">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-white/65 transition hover:text-white"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/35">
                  Location
                </p>
                <p className="mt-1 text-white/65">
                  Nairobi, Kenya
                </p>
              </div>

            
            </address>
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