import Link from "next/link";
import { ArrowRight, Lightbulb, Code2 } from "lucide-react";

import { HeroIllustration } from "./Illustrations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-cream"
    >
      {/* ========================= */}
      {/* Background atmosphere */}
      {/* ========================= */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-dark/5 blur-3xl" />

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-yellow/20 blur-3xl" />

      <div className="absolute left-1/2 top-8 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />

      {/* ========================= */}
      {/* Minimal floating doodles */}
      {/* ========================= */}

      <div className="floating pointer-events-none absolute left-[5%] top-24 hidden text-pink lg:block">
        <Lightbulb size={28} />
      </div>

      <div className="floating-delay pointer-events-none absolute right-[8%] top-24 hidden text-yellow lg:block">
        <Code2 size={28} />
      </div>

      {/* ========================= */}
      {/* Main hero */}
      {/* ========================= */}

      <div className="container-wide grid min-h-[calc(100vh-110px)] items-center gap-14 py-12 lg:grid-cols-[1.25fr_1fr]">

        {/* LEFT */}
        <div className="relative z-10">

          {/* Eyebrow */}

          <div className="mb-8 flex items-center gap-3">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-dark">
              WHERE IDEAS COME TO LIFE
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

            From

            <br />

            <span className="relative inline-block text-pink">
              "What if...?"

              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-yellow" />
            </span>

            <br />

            to

            <br />

            <span className="text-teal">
              "I built it!"
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-ink">
            Every big invention starts with a small idea.

            At <strong>CodeWithTee</strong>, children turn their imagination
            into games, apps, websites, animations and robots while building
            confidence, creativity and problem-solving skills.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#explore"
              className="group inline-flex items-center gap-3 rounded-full bg-pink px-7 py-4 font-semibold text-white shadow-lg shadow-pink/20 transition hover:-translate-y-1"
            >
              Explore Programs

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-dark px-7 py-4 font-semibold text-dark transition hover:bg-dark/10"
            >
              Book a Trial Session
            </Link>

          </div>

          {/* Highlights */}
{/* 
          <div className="mt-12 flex flex-wrap gap-5 border-t border-ink/10 pt-6">

            {[
              "Creative Thinkers",
              "Curious Learners",
              "Future Builders",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow/30 text-yellow">
                  ~~
                </span>

                <span className="text-sm font-medium text-ink/70">
                  {item}
                </span>
              </div>
            ))}

          </div> */}
        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center">
          <HeroIllustration />
        </div>

      </div>

      {/* ========================= */}
      {/* Bottom message ribbon */}
      {/* ========================= */}

      <div className="border-y border-ink/10 py-5">
        <div className="marquee">

          <div className="marquee-track gap-14 text-sm font-bold uppercase tracking-[0.18em] text-ink/45">

            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-14"
              >
                <span>Imagine</span>
                <span className="text-pink">✦</span>

                <span>Create</span>
                <span className="text-teal">✦</span>

                <span>Build</span>
                <span className="text-yellow">✦</span>

                <span>Share</span>
                <span className="text-pink">✦</span>

                <span>Explore</span>
                <span className="text-teal">✦</span>

                <span>Dream Big</span>
                <span className="text-yellow">✦</span>
              </span>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}