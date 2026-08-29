import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MountainReveal from "@/components/MountainReveal";
import Destinations from "@/components/Destinations";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main>
      <Hero />
      <StorySection />
      <MountainReveal />
      <Destinations />
      <Experiences />
      <Contact />
      <SocialLinks />
    </main>
  );
}