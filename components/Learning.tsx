const groups = [
  {
    age: "6–8",
    title: "Explore",
    description:
      "We start with simple instructions, patterns and cause-and-effect. Students use Scratch to make stories, games and animations.",
    work: ["Scratch", "Games", "Animation"],
    className: "bg-mint",
  },
  {
    age: "9–12",
    title: "Build",
    description:
      "Students begin writing more code and turning their own ideas into working projects, from small websites to interactive programs.",
    work: ["Programming", "Web", "Projects"],
    className: "bg-peach",
  },
  {
    age: "13–15",
    title: "Develop",
    description:
      "The problems get bigger. Students work with Python, JavaScript, web development and robotics while learning how to structure their code.",
    work: ["Python", "JavaScript", "Robotics"],
    className: "bg-blue",
  },
  {
    age: "16–18",
    title: "Engineer",
    description:
      "Students can move into more serious software projects — applications, APIs, databases, version control and robotics.",
    work: ["Applications", "APIs", "Databases"],
    className: "bg-yellow",
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="overflow-hidden  bg-white py-6 sm:py-24"
    >
      <div className="container-wide">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-pink">
            Ages 6–18
          </p>

          <h2 className="text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            What changes as
            <span className="text-pink"> they grow?</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70">
            The tools change. The problems change. The way students think
            about technology changes too.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          {groups.map((group, index) => (
            <article
              key={group.age}
              className="grid border-t border-ink/20 py-10 lg:grid-cols-[320px_1fr] lg:gap-16 lg:py-12"
            >
              {/* Age + Stage */}
              <div className="mb-8 lg:mb-0">
                <div className="flex items-start gap-5">
                  <span className="pt-2 font-mono text-sm text-ink/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                      {group.age}
                    </div>

                    <div
                      className={`mt-4 inline-block ${group.className} px-4 py-2 text-sm font-bold uppercase tracking-[0.12em]`}
                    >
                      {group.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
                <p className="max-w-xl text-lg leading-8 text-ink/70">
                  {group.description}
                </p>

                <div className="md:min-w-[180px]">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ink/35">
                    They might work with
                  </p>

                  <div className="flex flex-wrap gap-2 md:max-w-[220px]">
                    {group.work.map((item) => (
                      <span
                        key={item}
                        className="border border-ink/20 px-3 py-2 font-mono text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-2 border-t border-ink/20 pt-8">
          <p className="max-w-3xl text-sm leading-7 text-ink/50">
            There isn't a single project every student has to complete.
            Projects become more complex as their skills develop, and the
            instructor can adjust the work to match where the student is.
          </p>
        </div>
      </div>
    </section>
  );
}