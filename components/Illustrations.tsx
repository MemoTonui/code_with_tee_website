import heroImage from "@/app/images/linda2.jpg";
import mentorImage from "@/app/images/linda-teaching.jpg";

export function HeroIllustration() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[52%] lg:w-[53%]">
      <div
        className="absolute right-[-1.5rem] top-[5%] h-[90%] w-full bg-yellow"
        style={{
          borderRadius: "45% 0 0 45% / 28% 0 0 72%",
        }}
      />

      <div
        className="absolute right-[1.5rem] top-[2%] h-[92%] w-full bg-pink/15"
        style={{
          borderRadius: "45% 0 0 45% / 28% 0 0 72%",
        }}
      />

      <div
        className="
          absolute
          inset-y-0
          right-0
          w-full
          overflow-hidden
          bg-teal
          shadow-[-20px_30px_70px_rgba(43,36,85,.16)]
        "
        style={{
          borderRadius: "45% 0 0 45% / 28% 0 0 72%",
        }}
      >
        <img
          src={heroImage.src}
          alt="Tee teaching children programming"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="
          absolute
          left-[13%]
          top-[8%]
          z-20
          h-12
          w-32
          rotate-[-18deg]
          bg-yellow/90
          shadow-sm
        "
      />

      <div
        className="
          absolute
          bottom-[8%]
          left-[8%]
          z-40
          max-w-[270px]
          rotate-[-2deg]
          rounded-2xl
          bg-white
          px-6
          py-4
          shadow-[0_15px_35px_rgba(43,36,85,.18)]
        "
      >
        <p
          className="text-lg font-semibold leading-tight text-ink"
          style={{
            fontFamily: "Caveat, cursive",
          }}
        >
          Build it. Break it. Figure it out.
        </p>
      </div>
    </div>
  );
}

export function LearnIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] px-6 py-10">
      <div className="absolute left-1/2 top-1/2 h-[85%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_55%_45%/45%_40%_60%_55%] bg-teal/10" />

      <div className="absolute -bottom-4 -left-2 h-28 w-28 rounded-[58%_42%_40%_60%] bg-yellow/70" />

      <div className="absolute -right-4 top-8 h-24 w-24 rounded-[45%_55%_60%_40%] bg-pink/20" />

      <div
        className="
          relative
          overflow-hidden
          rounded-[48%_52%_45%_55%/42%_45%_55%_58%]
          border-[7px]
          border-white
          shadow-[0_30px_70px_rgba(43,36,85,.16)]
        "
      >
        <img
          src={mentorImage.src}
          alt="Tee teaching"
          className="aspect-[4/5] w-full object-cover object-[52%_35%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
      </div>

      <div className="absolute right-0 top-[22%] rotate-6 rounded-2xl bg-yellow px-5 py-4 shadow-[5px_6px_0_rgba(43,36,85,.15)]">
        <p className="text-xs font-black uppercase tracking-[0.15em] text-ink">
          Mentor-led
        </p>

        <p className="mt-1 text-sm font-bold text-ink">
          Live sessions
        </p>
      </div>

      <div className="absolute bottom-4 left-0 -rotate-3 rounded-xl bg-white px-5 py-3 shadow-lg">
        <p
          className="text-xl font-semibold text-ink"
          style={{
            fontFamily: "Caveat, cursive",
          }}
        >
          "Let's figure it out."
        </p>
      </div>
    </div>
  );
}

export function AreaIllustration({
  kind,
}: {
  kind: string;
}) {
  const symbol: Record<string, string> = {
    code: "{ }",
    create: "</>",
    solve: "?",
    mentor: "01",
    debug: "!",
    robotics: "⚙",
  };

  return (
    <div className="relative h-[280px] overflow-hidden">
      <div className="absolute left-1/2 top-[12%] h-52 w-52 -translate-x-1/2 rounded-full bg-teal/10" />

      <div className="absolute left-1/2 top-[24%] flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-[44%_56%_58%_42%/58%_43%_57%_42%] bg-white text-5xl font-extrabold text-navy shadow-card">
        {symbol[kind]}
      </div>

      <div className="absolute left-[18%] top-[25%] h-3 w-3 rounded-full bg-pink" />

      <div className="absolute right-[18%] top-[38%] h-4 w-4 rounded-full bg-yellow" />

      <div className="absolute bottom-[12%] left-[19%] h-20 w-20 rounded-full bg-yellow/70" />

      <div className="absolute bottom-[13%] right-[18%] h-14 w-14 rounded-full bg-teal/70" />
    </div>
  );
}