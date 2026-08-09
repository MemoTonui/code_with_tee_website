import { LearnIllustration } from "./Illustrations";

export default function WhatIsCodeWithTee() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

      {/* Very subtle background decoration */}

      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-pink/5 blur-3xl" />

      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="container-wide relative grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

        {/* IMAGE */}

        <div>
          <LearnIllustration />
        </div>

        {/* TEXT */}

        <div className="max-w-2xl">

          <p className="mb-6 flex items-center gap-3 text-sm font-extrabold tracking-[0.2em] text-pink">
            <span className="h-2.5 w-2.5 rounded-full bg-pink" />
            WHAT IS CODEWITHTEE?
          </p>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">

            We don't just teach children

            <span className="mt-2 block text-teal">
              how to code.
            </span>

          </h2>

          <h3 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-pink sm:text-6xl">
            We teach them how to think.
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-8 text-ink/75">
            Through coding, robotics, design and creative technology,
            children learn to solve problems, ask better questions and
            build ideas they are proud of.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
            Technology becomes more than a tool —
            <span className="font-bold text-ink">
              {" "}it becomes a way to create.
            </span>
          </p>

          {/* Small philosophy statement */}

          <div className="mt-10 flex items-start gap-4 border-l-4 border-yellow pl-5">

            <p
              className="text-2xl font-semibold leading-snug text-ink"
              style={{
                fontFamily: "Caveat, cursive",
              }}
            >
              We want children to leave saying,
              <span className="text-pink">
                {" "}“Look what I made!”
              </span>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}