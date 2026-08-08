 "use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-pink py-2 text-center text-[11px] font-semibold tracking-[0.15em] text-white">
        ✦ LEARN • CREATE • BUILD ✦
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10  backdrop-blur-md">
        <div className="container-wide flex h-[78px] items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold tracking-[-0.06em] text-ink">
            Code<span className="text-pink">With</span>Tee<span className="text-yellow">✦</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-semibold text-ink/70 hover:text-pink">Home</a>
            <a href="#about" className="text-sm font-semibold text-ink/70 hover:text-pink">About</a>
            <a href="#explore" className="flex items-center gap-1 text-sm font-semibold text-ink/70 hover:text-pink">
              What we explore <ChevronDown size={15} />
            </a>
            <a href="#ages" className="text-sm font-semibold text-ink/70 hover:text-pink">Age groups</a>
          </nav>

          <a href="#contact" className="hidden rounded-full bg-yellow px-6 py-3 text-sm font-bold text-ink shadow-[3px_3px_0_#2B2455] md:block">
            Let&apos;s build ✦
          </a>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="border-t border-ink/10 bg-slate-50 px-5 py-5 md:hidden">
            <div className="container-wide flex flex-col gap-5">
              <a href="#home" onClick={() => setOpen(false)} className="font-semibold">Home</a>
              <a href="#about" onClick={() => setOpen(false)} className="font-semibold">About</a>
              <a href="#explore" onClick={() => setOpen(false)} className="font-semibold">What we explore</a>
              <a href="#ages" onClick={() => setOpen(false)} className="font-semibold">Age groups</a>
              <a href="#contact" onClick={() => setOpen(false)} className="w-fit rounded-full bg-dark px-5 py-3 font-bold">Let&apos;s build</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
