import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Code2,
} from "lucide-react";

import { HeroIllustration } from "./Illustrations";
import heroImage from "@/app/images/linda2.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ========================= */}
      {/* Background blobs */}
      {/* ========================= */}

      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute left-1/3 top-10 h-[500px] w-[500px] rounded-full blur-3xl" />

      {/* ========================= */}
      {/* Floating doodles */}
      {/* ========================= */}

      <div className="floating pointer-events-none absolute left-[5%] top-24 z-20 hidden text-pink lg:block">
        <Lightbulb size={28} />
      </div>

      <div className="floating-delay pointer-events-none absolute right-[48%] top-28 z-20 hidden text-yellow lg:block">
        <Code2 size={28} />
      </div>

      {/* ========================= */}
      {/* HERO CONTENT */}
      {/* ========================= */}

      <div className="container-wide relative z-10">

        <div
          className="
            grid
            gap-10
            min-h-[calc(100vh-110px)]
            items-center
            py-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:py-0
          "
        >

          {/* ========================= */}
          {/* LEFT CONTENT */}
          {/* ========================= */}

          <div className="relative z-30 max-w-[650px]">

            {/* Badge */}

            <div className="mb-7 flex items-center gap-3">

              <span className="h-3 w-3 rounded-full bg-pink" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink">
                WHERE IDEAS COME TO LIFE
              </span>

            </div>

            {/* Heading */}

            <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">

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

            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/80">

              Every big invention starts with a small idea.

              At{" "}
              <strong>CodeWithTee</strong>, children turn their imagination
              into games, apps, websites, animations and robots while building
              confidence, creativity and problem-solving skills.

            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="#explore"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-pink
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-pink/20
                  transition
                  hover:-translate-y-1
                "
              >
                Explore Programs

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-dark
                  bg-white/70
                  px-7
                  py-4
                  font-semibold
                  text-dark
                  transition
                  hover:bg-dark
                  hover:text-white
                "
              >
                Book a Trial Session
              </Link>

            </div>

            {/* Highlights */}

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-ink/10 pt-6">

              {[
                "Creative Thinkers",
                "Curious Learners",
                "Future Builders",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2"
                >

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow/30 text-sm text-pink">
                    ✦
                  </span>

                  <span className="text-sm font-medium text-ink/70">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* RIGHT EDGE IMAGE */}
      {/* ========================= */}

      <HeroIllustration />

      {/* ========================= */}
      {/* MOBILE IMAGE */}
      {/* ========================= */}

      <div className="container-wide relative z-20 pb-16 lg:hidden">

        <div className="relative overflow-hidden rounded-[36px] border-[6px] border-white bg-white shadow-xl">

          <img
            src={heroImage.src}
            alt="Tutor teaching children programming"
            className="aspect-[4/3] w-full object-cover"
          />

        </div>

      </div>

      {/* ========================= */}
      {/* Bottom ribbon */}
      {/* ========================= */}

      <div className="relative z-30 border-y border-ink/10 bg-cream py-5">

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