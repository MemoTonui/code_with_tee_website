const steps = [
  ["01", "Imagine", "What if...? Every project starts with a question, an idea, or a spark of curiosity.", "💭"],
  ["02", "Explore", "How does this work? Children experiment, discover, and learn new tools.", "🔎"],
  ["03", "Build", "Let’s make it real. Ideas become projects they can see, test, and share.", "🛠️"],
  ["04", "Get stuck", "Something did not work? Good. That is where the real thinking begins.", "🐛"],
  ["05", "Improve", "Debug, change, test, and try again until the idea becomes stronger.", "✨"],
  ["06", "Create again", "The next idea is always waiting.", "🚀"]
];

export default function Philosophy() {
  return (
    <section id="journey" className=" py-20 sm:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">THE CODEWITHTEE JOURNEY</p>
          <h2 className="text-5xl font-extrabold  sm:text-7xl">Learning does not always look like getting it right.</h2>
          <p className="mt-5 text-lg leading-8 text-ink/65">Sometimes it looks like trying, getting stuck, asking why, and trying again.</p>
        </div>

        <div className="mt-12 grid gap-4  sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text, icon]) => (
            <div key={number} className="rounded-3xl shadow-md bg-cream/10 p-7">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-pink">{number}</span>
                <span className="text-3xl">{icon}</span>
              </div>
              <h3 className="mt-8 text-2xl font-extrabold">{title}</h3>
              <p className="mt-3 leading-7 text-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
