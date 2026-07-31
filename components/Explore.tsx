import { ArrowRight } from "lucide-react";
import { AreaIllustration } from "./Illustrations";

const areas = [
  ["code", "Learn to Code", "Start with the foundations of programming through practical, creative projects.", "Scratch • Programming • HTML", "bg-peach"],
  ["create", "Create with Technology", "Turn ideas into games, animations, websites, apps, and interactive experiences.", "Games • Apps • Websites", "bg-yellow"],
  ["solve", "Solve Problems", "Break challenges down, think creatively, test ideas, and find your way forward.", "Logic • Thinking • Strategy", "bg-blue"],
  ["mentor", "Learn with Guidance", "Ask questions, share ideas, collaborate, and grow in confidence.", "Ask • Learn • Grow", "bg-mint"],
  ["debug", "Debug & Improve", "A bug is not failure. It is a clue. Find it, fix it, and try again.", "Try • Investigate • Improve", "bg-peach"],
  ["robotics", "Robotics & AI", "Explore the exciting space where code meets electronics, machines, and the real world.", "Arduino • Robotics • AI", "bg-blue"]
];

export default function Explore() {
  return (
    <section id="explore" className="bg-cream py-20 sm:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">EXPLORE • CREATE • BUILD</p>
          <h2 className="text-5xl font-extrabold leading-[1.02]  sm:text-7xl">What can I learn?</h2>
          <p className="mt-5 text-lg leading-8 text-ink">
            Coding is more than learning a language. It is learning how to think, create, try again, and bring ideas to life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(([kind, title, text, tags, bg]) => (
            <article key={title} className={`overflow-hidden rounded-[32px] ${bg} transition hover:-translate-y-1`}>
              <AreaIllustration kind={kind} />
              <div className="bg-white/85 p-7">
                <h3 className="text-2xl font-extrabold ">{title}</h3>
                <p className="mt-4 leading-7 text-ink/65">{text}</p>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-pink">{tags}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-ink">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
