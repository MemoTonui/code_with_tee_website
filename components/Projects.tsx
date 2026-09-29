const projects = [
  [
    "01",
    "A game",
    "Create characters, rules, challenges and worlds. Then change them and see what happens.",
  ],
  [
    "02",
    "A website",
    "Turn an idea into a real page that someone else can open and use.",
  ],
  [
    "03",
    "An app",
    "Build something useful, entertaining or completely specific to an idea they have.",
  ],
  [
    "04",
    "A robot",
    "Write code that interacts with sensors, motors and the physical world.",
  ],
  [
    "05",
    "An animation",
    "Use programming as another way to tell a story and bring an idea to life.",
  ],
  [
    "06",
    "Something else",
    "Not every project needs to fit into a category. Sometimes the interesting idea is the one we haven't thought of yet.",
  ],
];

export default function Projects() {
  return (
    <section className="bg-dark py-20 text-white sm:py-28">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-yellow">
              PROJECTS
            </p>

            <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
              What might they make?
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
              Projects give students a reason to learn. The exact project
              depends on their age, experience and interests.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map(([number, title, text], index) => (
              <div
                key={title}
                className={`rounded-3xl p-6 ${
                  index === 5
                    ? "bg-yellow text-ink"
                    : "bg-white/10"
                }`}
              >
                <div
                  className={`text-sm font-extrabold ${
                    index === 5 ? "text-ink/50" : "text-yellow"
                  }`}
                >
                  {number}
                </div>

                <h3 className="mt-5 text-2xl font-extrabold">
                  {title}
                </h3>

                <p
                  className={`mt-3 leading-7 ${
                    index === 5
                      ? "text-ink/65"
                      : "text-white/65"
                  }`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}