/* ------------------------------------------------------------------ */
/*  Section dividers — the playful edges from the inspo.               */
/*  Place at the TOP of a section; `fill` = that section's bg colour.  */
/*  Tailwind classes for fill: text-cream, text-mint, text-yellow...   */
/*                                                                     */
/*  Usage:                                                             */
/*    <section className="relative bg-mint ...">                       */
/*      <Divider variant="wave" className="text-mint" />               */
/*      ... content ...                                                */
/*    </section>                                                       */
/* ------------------------------------------------------------------ */

type DividerProps = {
  variant?: "wave" | "zigzag";
  className?: string; // pass a text-<color> util to set the fill
  flip?: boolean; // flip vertically if you want it at the bottom
};

export default function Divider({
  variant = "wave",
  className = "text-cream",
  flip = false,
}: DividerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -top-px leading-[0] ${className} ${
        flip ? "top-auto -bottom-px rotate-180" : ""
      }`}
    >
      <svg
        className="block h-[42px] w-full sm:h-[64px]"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "wave" ? (
          <path d="M0,40 C240,90 480,-10 720,40 C960,90 1200,-10 1440,40 L1440,0 L0,0 Z" />
        ) : (
          <path d="M0,0 L1440,0 L1440,30 L1380,60 L1320,30 L1260,60 L1200,30 L1140,60 L1080,30 L1020,60 L960,30 L900,60 L840,30 L780,60 L720,30 L660,60 L600,30 L540,60 L480,30 L420,60 L360,30 L300,60 L240,30 L180,60 L120,30 L60,60 L0,30 Z" />
        )}
      </svg>
    </div>
  );
}