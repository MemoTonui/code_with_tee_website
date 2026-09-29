import { LearnIllustration } from "./Illustrations";

export default function WhatIsCodeWithTee() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-pink/5 blur-3xl" />

      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="container-wide relative grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <LearnIllustration />
        </div>

        <div className="max-w-2xl">
          <p className="mb-6 text-sm font-extrabold tracking-[0.2em] text-pink">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            We learn by making things.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-ink/75">
            A child doesn't need to memorise a programming language before
            they can make something interesting.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
            We start with a project. Then we figure out what we need to learn
            to make it work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-mint p-5">
              <h3 className="text-lg font-extrabold">Start with a project</h3>
              <p className="mt-2 leading-6 text-ink/65">
                A game, website, animation, app or something else they want to
                make.
              </p>
            </div>

            <div className="rounded-2xl bg-yellow p-5">
              <h3 className="text-lg font-extrabold">Learn what you need</h3>
              <p className="mt-2 leading-6 text-ink/65">
                New concepts make sense because there is a reason to use them.
              </p>
            </div>

            <div className="rounded-2xl bg-peach p-5">
              <h3 className="text-lg font-extrabold">Get stuck</h3>
              <p className="mt-2 leading-6 text-ink/65">
                Bugs and mistakes are part of the process, not something to
                hide.
              </p>
            </div>

            <div className="rounded-2xl bg-blue p-5">
              <h3 className="text-lg font-extrabold">Figure it out</h3>
              <p className="mt-2 leading-6 text-ink/65">
                Students learn to test, ask questions, debug and try again.
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-4 border-yellow pl-5">
            <p
              className="text-2xl font-semibold leading-snug text-ink"
              style={{ fontFamily: "Caveat, cursive" }}
            >
              The best moment is when a student looks at the screen and says,
              <span className="text-pink"> "Wait... I made that?"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}