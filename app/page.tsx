import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsCodeWithTee from "@/components/WhatIsCodeWithTee";
import Explore from "@/components/Explore";
import Projects from "@/components/Projects";
import AgeGroups from "@/components/AgeGroups";
import Philosophy from "@/components/Philosophy";
import WhyItMatters from "@/components/WhyItMatters";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsCodeWithTee />
        <Explore />
        <Projects />
        <AgeGroups />
        <Philosophy />
        <WhyItMatters />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}