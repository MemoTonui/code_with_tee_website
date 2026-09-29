import {
  ArrowRight,
  Braces,
  Bug,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";
import Link from "next/link";

const stages = [
  {
    number: "01",
    title: "Think",
    text: "Break a problem down before writing the first line of code.",
  },
  {
    number: "02",
    title: "Build",
    text: "Turn the idea into a working program, website or application.",
  },
  {
    number: "03",
    title: "Debug",
    text: "Find out why something failed and work through the problem.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Refactor, test and make the next version better.",
  },
];

export default function SoftwareEngineering() {
  return (
    <section
      id="software"
      className="relative overflow-hidden bg-dark py-24 text-white sm:py-32"
    >
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink text-white">
                <Braces size={20} />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-white/50">
                01 / Software
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
              Learn to{" "}
              <span className="text-pink">write software.</span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">
              Software engineering at LSR goes beyond learning a programming
              language. Students learn how to think through a problem, design
              a solution, write code and understand what happens when the code
              doesn't work.
            </p>

            <Link
              href="#learning"
              className="mt-9 inline-flex items-center gap-3 font-bold text-white transition-colors hover:text-pink"
            >
              See the learning progression
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#151515] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-pink" />
                <span className="h-3 w-3 rounded-full bg-yellow" />
                <span className="h-3 w-3 rounded-full bg-teal" />

                <span className="ml-4 font-mono text-xs text-white/35">
                  student-project.py
                </span>
              </div>

              <div className="grid min-h-[350px] md:grid-cols-[1fr_180px]">
                <div className="p-6 font-mono text-sm leading-7 sm:p-8">
                  <div className="text-white/30">01</div>

                  <div>
                    <span className="text-pink">def</span>{" "}
                    <span className="text-yellow">solve_problem</span>
                    <span className="text-white">(problem):</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-teal">steps</span> ={" "}
                    <span className="text-white">break_down(problem)</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-teal">solution</span> ={" "}
                    <span className="text-white">build(steps)</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-pink">while</span>{" "}
                    <span className="text-white">not working(solution):</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-white">debug(solution)</span>
                  </div>

                  <div className="pl-12">
                    <span className="text-white">test(solution)</span>
                  </div>

                  <div className="pl-6">
                    <span className="text-pink">return</span>{" "}
                    <span className="text-white">solution</span>
                  </div>

                  <div className="mt-10 border-t border-white/10 pt-5 text-white/30">
                    LSR / PROJECT WORKSPACE
                  </div>
                </div>

                <div className="border-t border-white/10 bg-white/[0.025] p-5 md:border-l md:border-t-0">
                  <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/35">
                    <Terminal size={14} />
                    Workspace
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <GitBranch size={15} />
                        Versioning
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Bug size={15} />
                        Debugging
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 p-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Database size={15} />
                        Data
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className="border-b border-white/10 py-6 pr-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <span className="font-mono text-xs text-pink">
                    {stage.number}
                  </span>

                  <h3 className="mt-3 text-xl font-extrabold">
                    {stage.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}