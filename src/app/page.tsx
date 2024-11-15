import Commitment from "@/components/commitment/Commitment";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
import Project from "@/components/project/Project";
import Skill from "@/components/skill/Skill";
import Work from "@/components/work/Work";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Work />
      <Intro />
      <Commitment />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
