export default function Philosophy() {
  const steps = [
    [
      "01",
      "Start with an idea",
      "Maybe it's a game. Maybe it's a website. Maybe they don't know what they want to make yet.",
    ],
    [
      "02",
      "Try something",
      "We write some code, change something and see what happens.",
    ],
    [
      "03",
      "Get stuck",
      "This is normal. In fact, getting stuck is one of the most useful parts of learning to code.",
    ],
    [
      "04",
      "Ask why",
      "Instead of just giving them the answer, we work through the problem together.",
    ],
    [
      "05",
      "Fix it",
      "Test it. Change it. Break it again. Eventually, it works.",
    ],
    [
      "06",
      "Make the next thing",
      "Once you've figured one problem out, there's usually another interesting one waiting.",
    ],
  ];

  return (
    <section id="journey" className="py-20 sm:py-28">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">
            HOW LEARNING ACTUALLY LOOKS
          </p>

          <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Coding rarely goes in a straight line.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">
            A good session isn't one where everything works on the first try.
            It's one where the student learns what to do when it doesn't.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl bg-cream/50 p-7 shadow-sm"
            >
              <span className="font-extrabold text-pink">
                {number}
              </span>

              <h3 className="mt-8 text-2xl font-extrabold">
                {title}
              </h3>

              <p className="mt-3 leading-7 text-ink/65">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}