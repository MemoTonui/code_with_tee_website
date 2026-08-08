import heroImage from "@/app/images/linda2.jpg";
import mentorImage from "@/app/images/linda-teaching.jpg";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[640px] lg:translate-y-6">

      {/* Soft background glow */}

      <div className="absolute inset-6 -z-30 rounded-[45%_55%_50%_50%/40%_58%_42%_60%] bg-mint/25 blur-2xl" />

      {/* Scrapbook layer 1 */}

      <div className="absolute inset-0 -rotate-6 rounded-[42px] bg-yellow/60 shadow-md" />

      {/* Scrapbook layer 2 */}

      <div className="absolute inset-0 rotate-3 rounded-[42px] bg-pink/15 shadow-md" />

      {/* Main photograph */}

      <div className="relative overflow-hidden rounded-[44px] border-[8px] border-white bg-white shadow-[0_30px_70px_rgba(43,36,85,.18)]">

        <img
          src={heroImage.src}
          alt="Linda teaching children programming"
          className="aspect-[4/5] w-full object-cover"
        />

      </div>

      {/* Washi tape */}

      <div className="absolute left-10 top-3 h-10 w-28 rotate-[-18deg] rounded-md bg-yellow/80 opacity-90" />

      <div className="absolute bottom-4 right-10 h-10 w-28 rotate-[18deg] rounded-md bg-teal/40 opacity-90" />

      {/* Small accents */}

      <span className="absolute -right-2 top-8 text-3xl text-yellow">
        ✦
      </span>

      <span className="absolute bottom-20 left-4 text-2xl text-pink">
        ✨
      </span>

      {/* Handwritten caption */}

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-6 py-3 shadow-lg">

        <p
          className="text-sm font-semibold text-ink"
          style={{
            fontFamily: "Caveat, cursive",
            fontSize: "1.3rem",
          }}
        >
          Learning together 💛
        </p>

      </div>

    </div>
  );
}
// export function HeroIllustration() {
//   return (
//     <div className="relative mx-auto h-[440px] w-full max-w-[590px] sm:h-[530px]">
//       <div className="absolute left-[5%] top-[8%] h-[80%] w-[88%] bg-mint blob" />
//       <div className="absolute left-[6%] top-[8%] text-5xl text-pink">✦</div>
//       <div className="absolute right-[6%] top-[12%] rotate-12 text-4xl text-yellow">⌁</div>
//       <div className="absolute bottom-[12%] left-[5%] h-20 w-20 rounded-full bg-yellow" />
//       <div className="absolute bottom-[7%] right-[5%] h-28 w-28 rounded-full bg-blue" />

//       <div className="absolute bottom-[7%] left-[27%] h-64 w-32 rounded-t-[55px] bg-pink" />
//       <div className="absolute bottom-[48%] left-[29%] h-32 w-32 rounded-full bg-[#9A5B40]" />
//       <div className="absolute bottom-[56%] left-[27%] h-10 w-36 rounded-t-full bg-ink" />

//       <div className="absolute bottom-[15%] left-[12%] h-44 w-28 rounded-t-[55px] bg-teal" />
//       <div className="absolute bottom-[51%] left-[12%] h-28 w-28 rounded-full bg-[#70442F]" />
//       <div className="absolute bottom-[59%] left-[10%] h-9 w-32 rounded-t-full bg-ink" />

//       <div className="absolute bottom-[10%] right-[13%] h-56 w-32 rounded-t-[55px] bg-yellow" />
//       <div className="absolute bottom-[50%] right-[13%] h-30 w-30 rounded-full bg-[#B87553]" />
//       <div className="absolute bottom-[58%] right-[11%] h-9 w-36 rounded-t-full bg-ink" />

//       <div className="absolute bottom-[22%] left-[35%] h-24 w-52 rounded-2xl border-4 border-ink bg-white shadow-[6px_6px_0_#2B2455]">
//         <div className="p-3 font-mono text-[11px] font-bold leading-5">
//           <span className="text-pink">if</span> idea <span className="text-teal">{"{"}</span>
//           <br />
//           <span className="ml-4 text-purple">build();</span>
//           <br />
//           <span className="text-teal">{"}"}</span>
//         </div>
//       </div>

//       <div className="absolute bottom-[42%] left-[42%] flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-2xl ring-4 ring-white">💡</div>
//       <div className="absolute right-[3%] bottom-[38%] rounded-2xl bg-white px-5 py-3 text-xs font-bold shadow-card">I made this! 🎉</div>
//     </div>
//   );
// }

// import heroImage from "@/app/images/problem-solving.png";
// export function HeroIllustration() {
//   return (
//     <div className="relative mx-auto h-[440px] w-full max-w-[590px] sm:h-[530px]">

//       {/* Background blob */}
//       <div className="absolute left-[5%] top-[8%] h-[80%] w-[88%] bg-mint blob" />

//       {/* Decorative elements */}
//       <div className="absolute left-[6%] top-[8%] text-5xl text-pink">
//         ✦
//       </div>

//       <div className="absolute right-[6%] top-[12%] rotate-12 text-4xl text-yellow">
//         ⌁
//       </div>

//       {/* Hero illustration */}
//       <img
//         src={heroImage.src}
//         alt="Children learning to code with CodeWithTee"
//         className="absolute inset-0 z-20 h-full w-full object-contain"
//       />

//       {/* Code card */}
//       <div className="absolute top-[20%] left-[0%] z-20 h-24 w-52 rounded-2xl border-4 border-ink bg-white shadow-[6px_6px_0_#2B2455]">
//         <div className="p-3 font-mono text-[11px] font-bold leading-5">
//           <span className="text-pink">if</span> idea{" "}
//           <span className="text-teal">{"{"}</span>
//           <br />

//           <span className="ml-4 text-purple">
//             build();
//           </span>

//           <br />

//           <span className="text-teal">{"}"}</span>
//         </div>
//       </div>

//       {/* Lightbulb */}
//       <div className="absolute bottom-[72%] left-[82%] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-yellow text-2xl ring-4 ring-white">
//         💡
//       </div>

//       {/* Speech bubble */}
//       <div className="absolute right-[3%] bottom-[38%] z-30 rounded-2xl bg-white px-5 py-3 text-xs font-bold shadow-card">
//         I made this! 🎉
//       </div>

//       {/* Floating accents */}
//       <div className="absolute bottom-[12%] left-[5%] h-20 w-20 rounded-full bg-yellow/80" />

//       <div className="absolute bottom-[7%] right-[5%] h-28 w-28 rounded-full bg-blue/80" />

//     </div>
//   );
// }

export function LearnIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[580px]">

      {/* Background accent */}
      <div className="absolute -left-10 top-12 h-64 w-64 rounded-full bg-pink/10 blur-3xl" />
      <div className="absolute -right-10 bottom-12 h-64 w-64 rounded-full bg-teal/15 blur-3xl" />

      {/* Main card */}
      <div className="relative rounded-[36px] bg-white p-5 shadow-[0_35px_80px_rgba(43,36,85,.14)]">

        <div className="overflow-hidden rounded-[28px]">

          <img
            src={mentorImage.src}
            alt="Tutor helping children learn programming"
            className="aspect-[4/5] w-full object-cover object-center"
          />

        </div>

      </div>

      {/* Floating badge */}

      <div className="absolute -right-4 top-8 rounded-full bg-yellow px-5 py-3 shadow-xl">

        <p className="text-xs font-bold uppercase tracking-wider">
          Mentor Led
        </p>

      </div>

      {/* Bottom caption */}

      <div className="absolute -bottom-6 left-10 rounded-2xl bg-white px-6 py-4 shadow-xl">

        <p
          className="text-lg font-semibold text-ink"
          style={{
            fontFamily: "Caveat, cursive",
          }}
        >
          Helping every child discover what they're capable of 💛
        </p>

      </div>

    </div>
  );
}

export function AreaIllustration({ kind }: { kind: string }) {
  const symbol: Record<string, string> = {
    code: "{ }",
    create: "✦",
    solve: "?",
    mentor: "♥",
    debug: "🐛",
    robotics: "⚙"
  };

  return (
    <div className="relative h-[280px] overflow-hidden">
      <div className="absolute left-1/2 top-[12%] h-52 w-52 -translate-x-1/2 rounded-full bg-white/70" />
      <div className="absolute left-1/2 top-[24%] flex h-36 w-36 -translate-x-1/2 items-center justify-center rounded-[44%_56%_58%_42%/58%_43%_57%_42%] bg-white text-5xl font-extrabold text-ink shadow-card">
        {symbol[kind]}
      </div>
      <div className="absolute left-[18%] top-[25%] text-3xl text-pink">✦</div>
      <div className="absolute right-[18%] top-[38%] text-3xl text-yellow">⌁</div>
      <div className="absolute bottom-[12%] left-[19%] h-20 w-20 rounded-full bg-yellow/80" />
      <div className="absolute bottom-[13%] right-[18%] h-14 w-14 rounded-full bg-teal/80" />
    </div>
  );
}
