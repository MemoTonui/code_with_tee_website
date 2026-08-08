const groups = [
  ["6–8", "Curious Explorers", "“What happens if I press this?”", "Stories, games, visual programming, and playful discovery.", "bg-mint"],
  ["9–12", "Young Builders", "“Can I make my own game?”", "Creating projects, learning logic, and making ideas interactive.", "bg-peach"],
  ["13–15", "Problem Solvers", "“How can I make this better?”", "Developing stronger programming and computational thinking skills.", "bg-blue"],
  ["16–18", "Future Creators", "“What can I build that matters?”", "Exploring websites, apps, advanced programming, robotics, AI, and bigger projects.", "bg-yellow"]
];

export default function AgeGroups() {
  return (
    <section id="ages" className="bg-cream py-20 sm:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">GROWING WITH CODEWITHTEE</p>
          <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">Different ages. Different questions. Big possibilities.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {groups.map(([age, title, question, text, bg]) => (
            <article key={age} className={`rounded-[32px] ${bg} p-8 sm:p-10`}>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-5xl font-extrabold tracking-[-0.07em]">{age}</span>
                  <h3 className="mt-4 text-2xl font-extrabold">{title}</h3>
                </div>
                <span className="text-4xl text-pink"></span>
              </div>
              <p className="mt-8 text-xl font-bold">“{question}”</p>
              <p className="mt-4 max-w-lg leading-7 text-ink/65">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
5