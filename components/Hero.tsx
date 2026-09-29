"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, Cpu } from "lucide-react";

import heroImage from "@/app/images/linda2.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-dark"
    >
      {/* Hero image */}
      <Image
        src={heroImage}
        alt="Tutor teaching children programming"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark/cream editorial overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/20" />

      {/* Subtle cream wash on the left */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-cream/95 via-cream/75 to-transparent lg:w-[72%]" />


      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-82px)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-pink" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              Software Engineering & Robotics
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-3xl text-[clamp(4rem,8vw,7.5rem)] font-black leading-[0.86] tracking-[-0.035em] text-ink">
            Learn.
            <br />
           Solve.
            <br />
            <span className="text-pink">Repeat.</span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink/75 sm:text-xl">
            Technology is better learned by working with it. LSR teaches
            children and teenagers aged 6–18 how to build software, work with
            electronics and make ideas actually work.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-pink px-8 text-base font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start learning
              <ArrowRight size={19} strokeWidth={2.5} />
            </Link>

            <Link
              href="#learning"
              className="inline-flex h-14 items-center justify-center rounded-full bg-ink px-8 text-base font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              See how it works
            </Link>
          </div>

          {/* Small technical metadata */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink/65">
            <div className="flex items-center gap-2">
              <Code2 size={17} strokeWidth={2} />
              <span>Ages 6–18</span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu size={17} strokeWidth={2} />
              <span>Project-based learning</span>
            </div>

            <span className="hidden h-1 w-1 rounded-full bg-ink/30 sm:block" />

            <span>Software · Robotics</span>
          </div>
        </div>
      </div>

      {/* Technical annotation */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 text-white/80 lg:flex">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
          learn → build → test → improve
        </span>
        <span className="h-px w-16 bg-white/40" />
      </div>

     
    </section>
  );
}