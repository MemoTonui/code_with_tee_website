import { LearnIllustration } from "./Illustrations";

export default function WhatIsCodeWithTee() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-wide grid items-center gap-24 lg:grid-cols-[1fr_1fr]">
        <LearnIllustration />
        <div>
          <p className="mb-4 text-sm font-extrabold tracking-[0.2em] text-pink">
  WHAT IS CODEWITHTEE?
</p>

<h4 className="text-xl font-extrabold leading-tight sm:text-6xl">
  We don't just teach children
</h4>

<h3 className="mt-2 text-4xl font-extrabold text-teal sm:text-6xl">
  how to code.
</h3>

<h3 className="mt-2 text-4xl font-extrabold text-pink sm:text-6xl">
  We teach them how to think.
</h3>

<p className="mt-8 max-w-xl text-lg leading-8 text-ink/80">
  Through coding, robotics, design and creative technology, children learn to
  solve problems, ask better questions and build ideas they are proud of.
  Technology becomes more than a tool—it becomes a way to create.
</p>
        </div>
      </div>
    </section>
  );
}
