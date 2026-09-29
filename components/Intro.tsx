import { ArrowUpRight, Code2, Cpu } from "lucide-react";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="container-wide">
        {/* Main statement */}
        <div className="grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-pink">
              LSR
            </p>

            <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              We teach young people how{" "}
              <span className="text-pink">technology works</span> by letting
              them work with it.
            </h2>
          </div>

          <div className="mt-10 lg:col-span-4 lg:col-start-9 lg:mt-20">
            <p className="text-xl font-semibold leading-8 text-ink/80">
              LSR is a software engineering and robotics programme for ages
              6–18.
            </p>

            <p className="mt-5 leading-7 text-ink/60">
              Students don't spend their sessions copying code from a screen.
              They make things, ask questions, get stuck, test ideas and work
              out what to do next.
            </p>
          </div>
        </div>

        {/* Disciplines */}
        <div className="mt-24 grid gap-6 md:grid-cols-2 lg:mt-28 lg:gap-10">
          {/* Software Engineering */}
          <div className="group relative overflow-hidden rounded-[24px] bg-ink p-7 sm:p-9 lg:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[60px] bg-white/35" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <Code2 size={24} strokeWidth={2.5} />
              </div>

              <ArrowUpRight
                size={22}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <h3 className="relative text-white mt-12 max-w-md text-3xl font-extrabold tracking-tight sm:text-4xl">
              Software Engineering
            </h3>

            <p className="mt-4 max-w-md leading-7 text-white">
              Students learn how software is designed, written, tested and
              improved — starting with programming and growing into real
              applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Programming",
                "Web development",
                "Applications",
                "APIs",
                "Databases",
                "Debugging",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/40 px-3.5 py-2 text-xs font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Robotics */}
          <div className="group relative overflow-hidden rounded-[24px] bg-pink p-7 text-white sm:p-9 lg:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[60px] bg-white/20" />

            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center text-pink justify-center rounded-full bg-white">
                <Cpu size={24} strokeWidth={2.5} />
              </div>

              <ArrowUpRight
                size={22}
                className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            <h3 className="relative mt-12 max-w-md text-3xl font-extrabold tracking-tight sm:text-4xl">
              Robotics
            </h3>

            <p className="mt-4 max-w-md leading-7 text-white/80">
              Students connect software with the physical world, learning how
              sensors, electronics, motors and code work together.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Electronics",
                "Sensors",
                "Microcontrollers",
                "Motors",
                "Control systems",
                "Automation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/20 px-3.5 py-2 text-xs font-semibold text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex justify-start lg:justify-end">
          <p className="max-w-lg text-sm leading-6 text-ink/45 lg:text-right">
            The two disciplines meet in the same place: understanding a
            problem well enough to build a solution.
          </p>
        </div>
      </div>
    </section>
  );
}