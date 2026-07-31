const projects = [
  ["🎮", "A Game", "Create characters, rules, challenges, and worlds of your own."],
  ["🌐", "A Website", "Turn your ideas into something the world can see."],
  ["📱", "An App", "Build something useful, fun, or completely unexpected."],
  ["🤖", "A Robot", "Make code interact with the real world."],
  ["🎨", "An Animation", "Use code as a creative tool for storytelling."],
  ["💡", "Something New", "Sometimes the best project is the one nobody expected."]
];

export default function Projects() {
  return (
    <section className="bg-pink py-20 text-white sm:py-28">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-yellow">THE BIG QUESTION</p>
            <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">What could you build?</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/65">
              The next big idea could start with a curious question, a blank screen, and a little bit of code.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map(([icon, title, text], index) => (
              <div key={title} className={`rounded-3xl p-6 ${index === 5 ? "bg-yellow text-ink" : "bg-white/20"}`}>
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
                <p className={`mt-3 leading-7 ${index === 5 ? "text-ink/65" : "text-white/65"}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
