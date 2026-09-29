import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What ages does LSR teach?",
    answer:
      "LSR teaches children and teenagers from 6 to 18 years old.",
  },
  {
    question: "Does my child need previous coding experience?",
    answer:
      "No. Students can start without any previous programming experience. We use their age and existing experience to determine an appropriate starting point.",
  },
  {
    question: "What will my child learn?",
    answer:
      "Students learn software engineering and robotics. Depending on their age and level, this can include programming, web development, Python, JavaScript, electronics, sensors, microcontrollers, robotics and software engineering practices.",
  },
  {
    question: "Are Software Engineering and Robotics taught separately?",
    answer:
      "They can be. Students can focus on software engineering, robotics, or explore both as they progress.",
  },
  {
    question: "Will students build projects?",
    answer:
      "Yes. Projects are an important part of the learning process. Students use what they learn to create software and robotics projects appropriate to their level.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        {/* Heading */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-pink">
            Questions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            Before you start.
          </h2>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl bg-slate-50/50 px-6 py-5 transition-colors "
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                <span>{faq.question}</span>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
                  <ChevronDown
                    size={20}
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-open:rotate-180"
                  />
                </span>
              </summary>

              <p className="mt-4 max-w-2xl pr-12 leading-7 text-ink/60 ">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}