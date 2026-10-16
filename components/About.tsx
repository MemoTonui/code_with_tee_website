import linda from "@/app/images/linda.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50/20 py-20 sm:py-28"
    >
      {/* Soft background details */}
      <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-pink/5 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="container-wide grid items-center gap-16 lg:grid-cols-[1fr_0.95fr] lg:gap-20">

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <div className="relative z-10">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pink">
            About Tee
          </p>

          <h2
            className="
              max-w-xl
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-ink
              sm:text-6xl
              lg:text-7xl
            "
          >
            I'm a software engineer.
            <span className="block text-pink">
              I also love teaching.
            </span>
          </h2>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            <p>
              I've spent years building software, solving problems, and
              figuring out how technology works behind the scenes.
            </p>

            <p>
              But one of my favourite things is seeing that moment when
              something finally clicks, especially when I get to help someone
              else get there.
            </p>

            <p>
              That's why I created LSR: a space where children and teenagers
              can explore technology, ask questions, make mistakes, and build
              things without feeling like they need to know everything first.
            </p>
          </div>
        </div>

        {/* =========================================================
            IMAGE
        ========================================================= */}
        <div className="relative mx-auto w-full max-w-[520px]">

          {/* Organic shape */}
          <div
            className="
              absolute
              inset-5
              rounded-[45%_55%_58%_42%/42%_56%_44%_58%]
              bg-mint
            "
          />


          {/* Photo */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border-[6px]
              border-white
              shadow-[0_18px_50px_rgba(0,0,0,.15)]
            "
          >
            <img
              src={linda.src}
              alt="Tee teaching children"
              className="aspect-[3.5/5] w-full object-cover"
            />
          </div>

         
        </div>
      </div>
    </section>
  );
}