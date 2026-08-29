import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import MountainReveal from "@/components/MountainReveal";
import Destinations from "@/components/Destinations";
import Experiences from "@/components/Experiences";
import LuqmanStory from "@/components/LuqmanStory";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

const siteUrl = "https://tourism-website-five-chi.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteUrl}/#organization`,
  name: "Karakoram Trails by Luqman",
  alternateName: [
    "Karakoram Trails",
    "Karakoram Trails Luqman",
    "KT by Luqman",
  ],
  url: siteUrl,
  description:
    "Karakoram Trails by Luqman offers mountain journeys and tourism experiences across northern Pakistan, including Hunza, Passu, Gilgit-Baltistan and surrounding destinations.",
  image: `${siteUrl}/images/passu-cones.jpg`,
  sameAs: [
    "https://www.instagram.com/malik98765432100000",
    "https://www.facebook.com/KarakoramTrailsByLuqman",
    "https://youtube.com/@karakoramtrailsbyluqman",
  ],
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  knowsAbout: [
    "Karakoram Mountains",
    "Northern Pakistan",
    "Hunza Valley",
    "Passu",
    "Passu Cones",
    "Gilgit-Baltistan",
    "Skardu",
    "Fairy Meadows",
    "Naltar Valley",
    "Khunjerab Pass",
    "Pakistan tourism",
    "Mountain tourism",
    "Adventure travel",
    "Trekking in Pakistan",
  ],
  serviceType: [
    "Mountain Tours",
    "Adventure Tours",
    "Northern Pakistan Tours",
    "Mountain Tourism",
    "Trekking Experiences",
    "Travel Experiences",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main>
        <Hero />
        <StorySection />
        <MountainReveal />
        <Destinations />
        <Experiences />
        <LuqmanStory />
        <Contact />
        <SocialLinks />
      </main>
    </>
  );
}