"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Software Engineering",
  "Robotics",
  "Both",
];

export default function Contact() {
  const [interest, setInterest] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!interest) return;

    // TODO: Connect this to your email/API service.
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="bg-slate-50/20 py-20 sm:py-28 lg:py-32"
    >
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">

          {/* =====================================================
              INTRO
          ===================================================== */}
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink">
              Let's get started
            </p>

            <h2
              className="
                mt-5
                max-w-lg
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.03em]
                text-ink
                sm:text-6xl
                lg:text-7xl
              "
            >
              Ready to
              <span className="text-pink"> build?</span>
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-ink/65">
              Tell us a little about your child and what they're interested
              in. We'll help you find the right place to start.
            </p>

            {/* Quick details */}
            <div className="mt-10 max-w-md border-t border-ink/10 pt-7">
              <div className="grid grid-cols-2 gap-x-8 gap-y-7">

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/35">
                    Ages
                  </p>
                  <p className="mt-2 font-bold text-ink">
                    6–18 years
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/35">
                    Format
                  </p>
                  <p className="mt-2 font-bold text-ink">
                    Live online
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/35">
                    Explore
                  </p>
                  <p className="mt-2 font-bold text-ink">
                    Code + Robotics
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-ink/35">
                    Learning
                  </p>
                  <p className="mt-2 font-bold text-ink">
                    Project-based
                  </p>
                </div>

              </div>
            </div>

            {/* Small human touch */}
            <p className="mt-10 max-w-sm text-sm leading-6 text-ink/45">
              Not sure which one is right? That's completely fine. Tell us
              what your child is curious about and we'll take it from there.
            </p>
          </div>

          {/* =====================================================
              FORM
          ===================================================== */}
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.07)] sm:p-10 lg:p-12">

            {sent ? (
              <div className="flex min-h-[500px] flex-col justify-center">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-teal">
                  <span className="text-sm font-bold text-white">
                    ✓
                  </span>
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                  We've got it
                </p>

                <h3 className="mt-4 max-w-md text-4xl font-black leading-tight tracking-[-0.03em] text-ink">
                  Thanks for reaching out.
                </h3>

                <p className="mt-5 max-w-md leading-7 text-ink/60">
                  We'll look through the details and get back to you with the
                  next steps.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setInterest("");
                  }}
                  className="
                    mt-8
                    w-fit
                    border-b-2
                    border-ink
                    pb-1
                    text-sm
                    font-bold
                    transition
                    hover:border-pink
                    hover:text-pink
                  "
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Jane Doe"
                    className="
                      w-full
                      border-b-2
                      border-ink/10
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-ink
                      outline-none
                      transition
                      placeholder:text-ink/25
                      focus:border-pink
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-ink"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      border-b-2
                      border-ink/10
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-ink
                      outline-none
                      transition
                      placeholder:text-ink/25
                      focus:border-pink
                    "
                  />
                </div>

                {/* Interest */}
                <fieldset>
                  <legend className="mb-3 text-sm font-bold">
                    What are they interested in?
                  </legend>

                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => {
                      const selected = interest === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => setInterest(item)}
                          className={`
                            rounded-full
                            border
                            px-4
                            py-2.5
                            text-sm
                            font-bold
                            transition
                            ${
                              selected
                                ? "border-ink bg-ink text-white"
                                : "border-ink/10 bg-white text-ink hover:border-ink/30"
                            }
                          `}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>

                  <input
                    type="hidden"
                    name="interest"
                    value={interest}
                  />

                  {!interest && (
                    <p className="mt-2 text-xs text-ink/35">
                      Choose one to continue.
                    </p>
                  )}
                </fieldset>

                {/* Age */}
                <div>
                  <label
                    htmlFor="age"
                    className="mb-2 block text-sm font-bold"
                  >
                    Child's age
                  </label>

                  <select
                    id="age"
                    required
                    name="age"
                    defaultValue=""
                    className="
                      w-full
                      border-b-2
                      border-ink/10
                      bg-white
                      px-0
                      py-3
                      text-base
                      text-ink
                      outline-none
                      transition
                      focus:border-pink
                    "
                  >
                    <option value="" disabled>
                      Select age range
                    </option>

                    <option value="6-8">6–8</option>
                    <option value="9-12">9–12</option>
                    <option value="13-15">13–15</option>
                    <option value="16-18">16–18</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Tell us a little more
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="What are they curious about? What would you like them to learn?"
                    className="
                      w-full
                      resize-none
                      border-b-2
                      border-ink/10
                      bg-transparent
                      px-0
                      py-3
                      text-base
                      text-ink
                      outline-none
                      transition
                      placeholder:text-ink/25
                      focus:border-pink
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-full
                    bg-pink
                    px-7
                    py-4
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-ink
                  "
                >
                  <span>Start the conversation</span>

                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-xs leading-5 text-ink/35">
                  We'll only use your details to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}