const benefits = [
  ["Creative thinking", "Imagine possibilities and find different ways to approach a challenge."],
  ["Problem solving", "Break big problems into smaller, manageable steps."],
  ["Patience", "Learn to keep going when the first attempt does not work."],
  ["Confidence", "Experience the powerful feeling of building something yourself."],
  ["Communication", "Explain ideas, share projects, and learn from others."],
  ["Independence", "Become more comfortable exploring, asking, and figuring things out."]
];

export default function WhyItMatters() {
  return (
    <section className="bg-mint py-20 sm:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">WHY IT MATTERS</p>
          <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">Coding teaches more than coding.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-ink/65">
            The real outcome is not only “I learned a programming language.”
          </p>
          <div className="mt-7 inline-block rotate-[-2deg] rounded-3xl bg-white p-6 shadow-card">
            <p className="text-2xl font-extrabold">It is:</p>
            <p className="mt-1 text-3xl font-extrabold text-pink">“I can figure things out.”</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map(([title, text], index) => (
            <div key={title} className="rounded-3xl bg-white p-6 shadow-card">
              <div className="text-2xl text-pink">{["✦", "🧩", "⌁", "♥", "💬", "🚀"][index]}</div>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
