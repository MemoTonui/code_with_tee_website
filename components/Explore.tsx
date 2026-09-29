import { ArrowRight } from "lucide-react";
import { AreaIllustration } from "./Illustrations";

const areas = [
  [
    "code",
    "Programming",
    "Learn the building blocks of code and use them to make something that works.",
    "Scratch • Python • Programming",
    "bg-peach",
  ],
  [
    "create",
    "Websites & Apps",
    "Turn an idea into something people can actually interact with.",
    "HTML • CSS • JavaScript",
    "bg-yellow",
  ],
  [
    "solve",
    "Problem Solving",
    "Learn how to break a difficult problem into smaller pieces and work through it.",
    "Logic • Algorithms • Debugging",
    "bg-blue",
  ],
  [
    "mentor",
    "Mentor-led Learning",
    "Students have someone to ask when they are stuck — and someone who can help them understand why.",
    "Questions • Feedback • Practice",
    "bg-mint",
  ],
  [
    "debug",
    "Debugging",
    "Something isn't working? We investigate the problem instead of starting over.",
    "Test • Debug • Improve",
    "bg-peach",
  ],
  [
    "robotics",
    "Robotics & AI",
    "For students ready to explore what happens when software interacts with the physical world.",
    "Arduino • Robotics • AI",
    "bg-blue",
  ],
];

export default function Explore() {
  return (
    <section id="explore" className="bg-cream py-20 sm:py-28">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-pink">
            WHAT WE TEACH
          </p>

          <h2 className="text-5xl font-extrabold leading-[1.02] sm:text-7xl">
            Start somewhere. Then build from there.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">
            There isn't one perfect programming language or one perfect
            project. What a student learns depends on their age, experience
            and what they want to make.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map(([kind, title, text, tags, bg]) => (
            <article
              key={title}
              className={`overflow-hidden rounded-[32px] ${bg} transition hover:-translate-y-1`}
            >
              <AreaIllustration kind={kind} />

              <div className="bg-white/85 p-7">
                <h3 className="text-2xl font-extrabold">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-ink/65">
                  {text}
                </p>

                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.1em] text-pink">
                  {tags}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-ink"
                >
                  Ask about this
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}