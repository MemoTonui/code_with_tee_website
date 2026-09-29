import { ArrowRight } from "lucide-react";
import Link from "next/link";
import heroImage from "@/app/images/linda2.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-cream"
    >
      {/* =========================================================
          HERO IMAGE
      ========================================================= */}
      <img
        src={heroImage.src}
        alt="Young people learning technology"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* =========================================================
          IMAGE OVERLAY
      ========================================================= */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cream
          via-cream/95
          to-transparent
          lg:via-cream/90
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="container-wide relative z-10">
        <div className="flex min-h-[calc(100vh-82px)] items-center py-20 lg:py-24">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p
              className="
                mb-7
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-ink/50
              "
            >
              Curious minds · Ages 6–18
            </p>

            {/* Headline */}
            <h1
              className="
                text-[68px]
                font-black
                leading-[0.85]
                text-ink
                tracking-[-0.03em]
                sm:text-[84px]
                md:text-[96px]
                lg:text-[108px]
                xl:text-[116px]
              "
            >
              The 
              <span className="text-yellow"> Future</span> 
              <br />
              doesn’t wait.
              <br />
              <span className="text-pink">Build it.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-lg
                text-base
                leading-7
                text-ink/65
                sm:text-lg
                sm:leading-8
              "
            >
              LSR helps young people learn software engineering and robotics
              by making things, solving problems, and bringing their ideas to
              life.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#software-engineering"
                className="
                  group
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-ink
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(17,17,17,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-pink
                "
              >
                Start Learning

                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#robotics"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  px-7
                  text-sm
                  font-bold
                  text-ink
                  shadow-[0_10px_25px_rgba(17,17,17,0.08)]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-yellow
                "
              >
                Explore robotics
              </Link>
            </div>

            {/* Small supporting detail */}
            <div className="mt-9 flex items-center gap-3 text-xs font-semibold text-ink/40">
              <span>Software Engineering</span>
              <span className="h-1 w-1 rounded-full bg-pink" />
              <span>Robotics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}