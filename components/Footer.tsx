export default function Footer() {
  return (
    <footer id="contact" className="bg-[#17233C] py-16 text-white">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="text-3xl font-extrabold tracking-[-0.06em]">
              Code<span className="text-pink">With</span>Tee<span className="text-yellow">✦</span>
            </a>
            <p className="mt-5 max-w-sm leading-7 text-white/65">
              Helping young minds explore, create, solve, and build with technology.
            </p>
            <a href="mailto:hello@codewithtee.com" className="mt-6 inline-block rounded-full bg-yellow px-6 py-3 font-bold text-ink">
              Let&apos;s talk ✦
            </a>
          </div>

          <div>
            <h3 className="font-extrabold">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-white/65">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#explore" className="hover:text-white">What we explore</a>
              <a href="#ages" className="hover:text-white">Age groups</a>
              <a href="#journey" className="hover:text-white">The journey</a>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">A little reminder</h3>
            <p className="mt-5 leading-7 text-white/65">
              You do not have to know everything to start building something.
            </p>
            <p className="mt-6 text-2xl font-extrabold text-yellow">Start with a little code. ✦</p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-6 text-sm text-white/40">
          Made with curiosity, creativity, and a little bit of code.
        </div>
      </div>
    </footer>
  );
}
