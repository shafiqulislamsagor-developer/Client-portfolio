import Commitment from "@/components/commitment/Commitment";
import Hero from "@/components/hero/Hero";
import Intro from "@/components/intro/Intro";
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
    </main>
  );
}
