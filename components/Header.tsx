"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import lsrLogo from "@/app/images/lsr-logo.png";

const links = [
  { label: "Software Engineering", href: "#software-engineering" },
  { label: "Robotics", href: "#robotics" },
  { label: "Learning", href: "#learning" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md">
      <div className="container-wide flex h-[82px] items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="LSR — Learn. Solve. Repeat."
        >
          <Image
  src={lsrLogo}
  alt="LSR"
  className="w-[145px] sm:w-[220px] h-auto"
/>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-pink px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-ink/10 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="bg-cream lg:hidden">
          <nav className="container-wide flex flex-col py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-base font-semibold"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex justify-center bg-pink px-6 py-3 font-bold text-white"
            >
              Start Learning
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
