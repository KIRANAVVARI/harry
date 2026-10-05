import Hero from "@/components/Hero";
import AboutHarry from "@/components/AboutHarry";
import Navbar from "@/components/Navbar";
import FloatingStars from "@/components/Floatingstars";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingStars />

      <Hero />

      <AboutHarry />

      <Timeline />
    </>
  );
}