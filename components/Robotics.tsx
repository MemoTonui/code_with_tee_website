import { ArrowRight, Cpu } from "lucide-react";
import Link from "next/link";

const components = [
  ["INPUT", "Sensors"],
  ["CONTROL", "Code"],
  ["OUTPUT", "Motors"],
];

export default function Robotics() {
  return (
    <section
      id="robotics"
      className="relative overflow-hidden bg-slate-50/50 py-24 sm:py-32"
    >
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Illustration */}
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-2xl">
              {/* Decorative offset block */}
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl bg-yellow sm:-left-8 sm:-top-8" />

              <div
                className="
                  relative overflow-hidden rounded-[28px]
                  shadow-md border-[.5px] border-light
                  bg-slate-50/70
                  p-5
                  sm:p-8
                "
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-ink/15 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-white">
                      <Cpu size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-ink/40">
                        Robotics Lab
                      </p>

                      <p className="font-bold">Control System</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-mint px-3 py-1 font-mono text-xs font-bold">
                    ONLINE
                  </span>
                </div>

                {/* System flow */}
                <div className="relative py-12">
                  <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-ink/20" />

                  <div className="relative mx-auto flex max-w-md items-center justify-between gap-4">
                    {components.map(([label, value], index) => (
                      <div
                        key={label}
                        className="relative z-10 w-[30%] text-center"
                      >
                        <div
                          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-dark ${
                            index === 1 ? "bg-pink" : "bg-yellow"
                          }`}
                        >
                          <span className="font-mono text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>

                        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">
                          {label}
                        </p>

                        <p className="mt-1 font-bold">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Code */}
                  <div className="relative mx-auto mt-12 max-w-md rounded-2xl bg-dark p-5 font-mono text-sm text-white">
                    <div className="text-white/35">
                      // robot behaviour
                    </div>

                    <div className="mt-2">
                      <span className="text-pink">if</span>{" "}
                      distance &lt; 20:
                    </div>

                    <div className="pl-5 text-yellow">
                      motor.stop()
                    </div>

                    <div className="mt-2">
                      <span className="text-pink">else:</span>
                    </div>

                    <div className="pl-5 text-teal">
                      motor.forward()
                    </div>
                  </div>
                </div>

                {/* Input / Process / Output */}
                <div className="grid grid-cols-3 border-t border-ink/15 pt-5 text-center">
                  <div>
                    <p className="font-mono text-xs text-ink/40">
                      INPUT
                    </p>

                    <p className="mt-1 font-bold">Sense</p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-ink/40">
                      PROCESS
                    </p>

                    <p className="mt-1 font-bold">Decide</p>
                  </div>

                  <div>
                    <p className="font-mono text-xs text-ink/40">
                      OUTPUT
                    </p>

                    <p className="mt-1 font-bold">Act</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark text-white">
                <Cpu size={20} />
              </div>

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
                02 / Robotics
              </span>
            </div>

            <h2 className="max-w-xl text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
              Make software{" "}
              <span className="text-pink">move.</span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-ink/75">
              Robotics gives students a different way to experience
              programming. Code isn't only displayed on a screen — it can
              read a sensor, make a decision and control something in the
              real world.
            </p>

            {/* Topics */}
            <div className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-7">
              <div>
                <p className="text-sm font-bold">Electronics</p>

                <p className="mt-1 text-sm text-ink/55">
                  Circuits, inputs and outputs
                </p>
              </div>

              <div>
                <p className="text-sm font-bold">Programming</p>

                <p className="mt-1 text-sm text-ink/55">
                  Logic and control
                </p>
              </div>

              <div>
                <p className="text-sm font-bold">Sensors</p>

                <p className="mt-1 text-sm text-ink/55">
                  Detect and respond
                </p>
              </div>

              <div>
                <p className="text-sm font-bold">Automation</p>

                <p className="mt-1 text-sm text-ink/55">
                  Systems that act
                </p>
              </div>
            </div>

            {/* Link */}
            <Link
              href="#learning"
              className="mt-9 inline-flex items-center gap-3 font-bold transition-transform hover:translate-x-1"
            >
              See how it changes with age
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}