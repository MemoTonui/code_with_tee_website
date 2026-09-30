import alfred from "@/app/images/learn-to-code.png";


export default function AboutAlf() {
  return (
    <section
      id="robotics"
      className="bg-ink py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="container-wide grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <div>
          <p
            className="
              mb-5
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-yellow
            "
          >
            Meet Alfred
          </p>

          <h2
            className="
              max-w-2xl
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Robotics should be
            <span className="text-yellow"> fun.</span>
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            <p>
              Alfred Mboya is a robotics trainer and mentor with over eight
              years of experience helping young people discover what they can
              do with technology.
            </p>

            <p>
              His journey in robotics has taken him from Playpoint, where he
              served on the board during the introduction of robotics
              competitions to the Kenya Science Fair, to leading robotics
              training at Ischool Climate Consultancy and the Kenya STEM
              Ecosystem.
            </p>

            <p>
              He currently works as a Lead Robotics Consultant at Edu Cater
              Global and brings that experience into LSR, creating learning
              experiences that are practical, interactive, and genuinely fun.
            </p>
          </div>

          {/* Philosophy */}
          <div className="mt-9 max-w-xl border-l-4 border-pink pl-5">
            <p className="text-xl font-bold leading-snug text-white sm:text-2xl">
              Every child deserves the opportunity to discover what they're
              capable of — and sometimes, all they need is the right exposure
              and someone to guide them.
            </p>
          </div>

          <p className="mt-8 text-sm font-semibold text-white/40">
            — Alfred
          </p>
        </div>

        {/* =========================================================
            IMAGE
        ========================================================= */}
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-pink sm:-right-8 sm:h-28 sm:w-28" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={alfred.src}
              alt="Alfred Mboya teaching robotics"
              className="
                aspect-[4/5]
                w-full
                object-cover
                object-center
              "
            />
          </div>

          <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-yellow sm:-left-8 sm:h-24 sm:w-24" />
        </div>
      </div>
    </section>
  );
}