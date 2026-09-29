const groups = [
  [
    "6–8",
    "First steps",
    "For children who are just getting started.",
    "Stories, games, Scratch and visual programming help them learn the basics without making the experience feel like a lecture.",
    "bg-mint",
  ],
  [
    "9–12",
    "Building things",
    "For children ready to make their ideas interactive.",
    "We work with programming concepts through games, animations, websites and other small projects.",
    "bg-peach",
  ],
  [
    "13–15",
    "Going deeper",
    "For students ready for more programming.",
    "We introduce stronger programming skills, computational thinking and larger projects.",
    "bg-blue",
  ],
  [
    "16–18",
    "Going further",
    "For teenagers who want to take technology more seriously.",
    "Depending on their goals, we can explore web development, Python, robotics, AI and portfolio projects.",
    "bg-yellow",
  ],
];

export default function AgeGroups() {
  return (
    <section id="ages" className="py-20 sm:py-28">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">
            AGE GROUPS
          </p>

          <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            The right starting point matters.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">
            A six-year-old and a sixteen-year-old shouldn't be taught in the
            same way. Sessions are adapted to the student's age, experience
            and pace.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map(([age, title, intro, text, bg]) => (
            <article
              key={age}
              className={`rounded-[32px] ${bg} p-8 sm:p-10`}
            >
              <span className="text-5xl font-extrabold tracking-[-0.07em]">
                {age}
              </span>

              <h3 className="mt-4 text-2xl font-extrabold">
                {title}
              </h3>

              <p className="mt-6 text-lg font-bold">
                {intro}
              </p>

              <p className="mt-4 max-w-lg leading-7 text-ink/65">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}