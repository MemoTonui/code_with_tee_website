const benefits = [
  [
    "They learn to break things down",
    "A big problem becomes much less intimidating when you know how to split it into smaller ones.",
  ],
  [
    "They become comfortable being stuck",
    "Not knowing the answer immediately stops feeling like a reason to give up.",
  ],
  [
    "They learn to ask better questions",
    "Good programmers don't know everything. They know how to investigate what they don't know.",
  ],
  [
    "They see mistakes differently",
    "A broken program gives you information. Debugging teaches students to use it.",
  ],
  [
    "They explain what they made",
    "Building something is one thing. Being able to explain how it works is another useful skill.",
  ],
  [
    "They start trusting themselves",
    "There is a difference between being given an answer and discovering that you can work one out yourself.",
  ],
];

export default function WhyItMatters() {
  return (
    <section className="bg-teal py-20 sm:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">
            WHY I TEACH THIS
          </p>

          <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            The code is only part of it.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-ink/65">
            Learning to code gives children a place to practise something much
            bigger: figuring things out when there isn't an obvious answer.
          </p>

          <div className="mt-7 inline-block rotate-[-2deg] rounded-3xl bg-white p-6 shadow-card">
            <p className="text-2xl font-extrabold">
              The goal?
            </p>

            <p className="mt-1 text-3xl font-extrabold text-pink">
              "I can figure this out."
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-6 shadow-card"
            >
              <h3 className="text-xl font-extrabold">
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