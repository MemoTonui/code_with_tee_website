import linda1 from "@/app/images/linda1.jpg";
import { Code2, Rocket, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-28">

      {/* Decorative Background */}
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-mint/20 blur-3xl" />

      <div className="container-wide grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

        {/* ================= LEFT ================= */}

        <div className="relative z-10">

          <p className="mb-5 text-sm font-extrabold tracking-[0.18em] text-pink">
            BEHIND CODEWITHTEE
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.02] sm:text-7xl">
            The future should
            <br />
            not have to
            <span className="block text-pink">
              wait.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-ink">
            CodeWithTee was created from a simple belief:
            children should not have to wait until they are
            adults to start building the future.
          </p>

          <p className="mt-2 max-w-xl text-lg leading-8 text-ink">
            Give a child curiosity, the right tools,
            encouragement and room to experiment —
            and you'll be amazed by what they create.
          </p>

         

        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative mx-auto w-full max-w-[520px]">

          {/* Organic Background Blob */}

          <div className="absolute inset-5 rounded-[45%_55%_58%_42%/42%_56%_44%_58%] bg-mint" />

          {/* Decorative Circles */}

          <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-yellow" />

          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-full bg-pink/20" />

          {/* Main Image */}

          <div className="relative overflow-hidden rounded-[22px] border-[6px] border-white shadow-[0_18px_50px_rgba(0,0,0,.15)]">

            <img
              src={linda1.src}
              alt="Linda teaching children"
              className="aspect-[3.5/5] w-full object-cover"
            />

          </div>

          {/* Floating Card 1 */}

          <div className="absolute -left-12 top-10 rounded-3xl bg-white p-4 shadow-card">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-white">
                <Code2 size={24} />
              </div>

              <div>

                <p className="text-sm font-extrabold">
                  Learn by
                </p>

                <p className="text-xs text-ink/60">
                  Building
                </p>

              </div>

            </div>

          </div>

          {/* Floating Card 2 */}

          <div className="absolute -right-10 top-1/2 rounded-3xl bg-white p-4 shadow-card">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow">
                <Lightbulb size={24} />
              </div>

              <div>

                <p className="text-sm font-extrabold">
                  Think
                </p>

                <p className="text-xs text-ink/60">
                  Creatively
                </p>

              </div>

            </div>

          </div>

          {/* Floating Card 3 */}

          <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-4 shadow-card">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal text-white">
                <Rocket size={24} />
              </div>

              <div>

                <p className="text-sm font-extrabold">
                  Build
                </p>

                <p className="text-xs text-ink/60">
                  The Future
                </p>

              </div>

            </div>

          </div>

          
        </div>

      </div>
    </section>
  );
}