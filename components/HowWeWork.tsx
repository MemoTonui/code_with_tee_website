import { ArrowRight } from "lucide-react";

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="overflow-hidden bg-slate-50/50 py-6 sm:py-16"
    >
      <div className="container-wide">
        {/* Intro + Loop */}
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-8">
          {/* Copy */}
          <div className="max-w-lg">
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-ink/45">
              How we work
            </p>

            <h2 className="text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-pink">Learn.</span>
              <br />
              Solve.
              <br />
              <span className="text-teal">Repeat.</span>
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-ink/65">
              Getting stuck is part of learning to build. Students learn to
              understand a problem, try a solution, find what went wrong and
              try again.
            </p>
          </div>

          {/* Loop */}
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-[580px]">
              {/* Outer loop */}
              <div className="absolute inset-[8%] rounded-full border-[3px] border-medium" />

              {/* Inner field */}
              <div className="absolute inset-[21%] rounded-full bg-pink/5" />

              {/* Learn */}
              <div className="absolute left-[1%] top-[38%]">
                <div className="bg-yellow px-5 py-3 text-xl font-extrabold sm:px-6 sm:py-3.5 sm:text-2xl">
                  Learn
                </div>
              </div>

              {/* Solve */}
              <div className="absolute right-[0%] top-[38%]">
                <div className="bg-pink px-5 py-3 text-xl font-extrabold sm:px-6 sm:py-3.5 sm:text-2xl">
                  Solve
                </div>
              </div>

              {/* Repeat */}
              <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2">
                <div className="bg-teal px-5 py-3 text-xl font-extrabold sm:px-6 sm:py-3.5 sm:text-2xl">
                  Repeat
                </div>
              </div>

              {/* Centre */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/35">
                  LSR
                </p>

                <p className="mt-2 whitespace-nowrap text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Try again.
                </p>
              </div>

              {/* Direction markers */}
              <div className="absolute left-[20%] top-[21%] rotate-[35deg]">
                <ArrowRight size={22} strokeWidth={2.5} />
              </div>

              <div className="absolute right-[20%] top-[21%] rotate-[145deg]">
                <ArrowRight size={22} strokeWidth={2.5} />
              </div>

              <div className="absolute bottom-[21%] left-1/2 rotate-90">
                <ArrowRight size={22} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16 grid gap-10 sm:grid-cols-3 lg:mt-20 lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-ink font-mono text-xs font-bold text-white">
                01
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                Start here
              </span>
            </div>

            <h3 className="text-xl font-extrabold">
              Understand the problem.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-ink/60">
              Before reaching for the keyboard, students figure out what
              they're actually trying to solve.
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-ink font-mono text-xs font-bold text-white">
                02
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                Make it
              </span>
            </div>

            <h3 className="text-xl font-extrabold">
              Build a solution.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-ink/60">
              They turn the idea into code, a program, a website or a physical
              system.
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-ink font-mono text-xs font-bold text-white">
                03
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink/40">
                Keep going
              </span>
            </div>

            <h3 className="text-xl font-extrabold">
              Find what went wrong.
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-ink/60">
              Bugs aren't treated as failure. They're something to investigate,
              understand and fix.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}