"use client";

import { useState } from "react";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  MapPin,
  Sparkles,
} from "lucide-react";

const ageGroups = [
  { emoji: "🌱", label: "6–8" },
  { emoji: "🚀", label: "9–12" },
  { emoji: "🤖", label: "13–15" },
  { emoji: "💻", label: "16–18" },
];

export default function Contact() {
  const [selectedAge, setSelectedAge] = useState("9–12");
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-24"
    >
      {/* Decorative blobs */}

      <div className="absolute left-[-180px] top-10 h-96 w-96 rounded-full bg-mint/40 blur-3xl" />

      <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-yellow/20 blur-3xl" />

      <div className="container-wide relative z-10">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-pink/10 px-5 py-2 font-bold text-pink">
            <Sparkles size={18} />
            LET'S BUILD SOMETHING AWESOME
          </div>

          <h2 className="mt-8 text-5xl font-extrabold  sm:text-6xl">
            Ready to begin your
            <span className="text-pink"> coding adventure?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink">
            Every great programmer starts with curiosity.
            Tell us a little about your future creator and we'll help you
            choose the perfect place to begin.
          </p>
        </div>

        {/* Main Card */}

        <div className="mt-20 ">

          {/* Illustration

          <div className="flex items-center justify-center">

            <img
              src="/images/contact-illustration.png"
              alt="Coding illustration"
              className="w-full max-w-md"
            />

          </div> */}

          {/* Form */}

          <div className="rounded-[36px] border border-black/5 bg-cream/10 p-10 shadow-[0_20px_80px_rgba(0,0,0,.08)]">

            {!sent ? (
              <>

                <Field label="Parent / Guardian">

                  <input
                    className="cute-input"
                    placeholder="Your name"
                  />

                </Field>

                <Field label="Email">

                  <input
                    className="cute-input"
                    placeholder="you@example.com"
                  />

                </Field>

                <Field label="Child's Age">

                  <div className="grid grid-cols-2 gap-4">

                    {ageGroups.map((group) => (

                      <button
                        key={group.label}
                        onClick={() => setSelectedAge(group.label)}
                        className={`rounded-3xl border-2 p-5 transition-all

                        ${
                          selectedAge === group.label
                            ? "border-pink bg-pink text-white shadow-lg"
                            : "border-gray-200 bg-white hover:-translate-y-1 hover:border-pink"
                        }`}
                      >

                        <div className="text-4xl">{group.emoji}</div>

                        <div className="mt-3 font-bold">
                          Ages {group.label}
                        </div>

                      </button>

                    ))}

                  </div>

                </Field>

                <Field label="Tell us about your future coder">

                  <textarea
                    rows={5}
                    className="cute-input resize-none"
                    placeholder="What does your child enjoy? Building games? Robots? Drawing? Tell us a little..."
                  />

                </Field>

                <button
                  onClick={() => setSent(true)}
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-dark py-5 text-lg font-bold text-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Start the Coding Journey
                  <ArrowRight size={20} />
                </button>

              </>
            ) : (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

               

                <h3 className="mt-6 text-4xl font-extrabold text-ink">
                  You're all set!
                </h3>

                <p className="mt-4 max-w-sm text-lg text-ink/60">
                  Our little robot has already delivered your message to Tee.
                  We'll get back to you very soon!
                </p>

                <div className="mt-8 text-6xl">
                  🤖💌
                </div>

              </div>
            )}
          </div>
        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <InfoCard
            icon={<Mail />}
            title="Email"
            text="hello@codewithtee.com"
          />

          <InfoCard
            icon={<MessageCircle />}
            title="WhatsApp"
            text="+254 XXX XXX XXX"
          />

          <InfoCard
            icon={<MapPin />}
            title="Location"
            text="Nairobi, Kenya"
          />

        </div>

      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">

      <label className="mb-3 block text-sm font-extrabold text-ink">

        {label}

      </label>

      {children}

    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[20px] border border-black/5 bg-cream p-4 flex flex-row gap-2 transition hover:-translate-y-2 hover:shadow-xl">

      <div className=" flex h-14 w-14 items-center justify-center rounded-full bg-pink text-white">

        {icon}

      </div>
      <div className="">
<h4 className="text-xl font-extrabold">
        {title}
      </h4>

      <p className="mt-2 text-ink">
        {text}
      </p>
      </div>
      

    </div>
  );
}