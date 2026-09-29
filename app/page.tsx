import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsCodeWithTee from "@/components/WhatIsCodeWithTee";
import Explore from "@/components/Explore";
import Projects from "@/components/Projects";
import AgeGroups from "@/components/AgeGroups";
import Philosophy from "@/components/Philosophy";
import WhyItMatters from "@/components/WhyItMatters";
import About from "@/components/About";
import AboutAlf from "@/components/AboutAlf";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import SoftwareEngineering from "@/components/SoftwareEngineering";
import Robotics from "@/components/Robotics";
import FAQ from "@/components/FAQ";
import HowWeWork from "@/components/HowWeWork";
import Learning from "@/components/Learning";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Intro />

        <SoftwareEngineering />

        <Robotics />

        <Learning />

        <HowWeWork />

        <Projects />

        <About />

        <AboutAlf />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </>
  );
}