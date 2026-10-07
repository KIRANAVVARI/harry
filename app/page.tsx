import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThroughMyEyes from "@/components/ThroughMyEyes";
import MemoryJourney from "@/components/MemoryJourney";
import LetterForHarry from "@/components/LetterForHarry";
import BirthdayFinale from "@/components/BirthdayFinale";
import MemoryVault from "@/components/MemoryVault";
import BucketList from "@/components/BucketList";
import Cake from "@/components/Cake";
import Surprise from "@/components/Surprise";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950 text-white">
        <Hero />
        <ThroughMyEyes />
        <MemoryJourney />
        <MemoryVault />
        <BucketList />
        <LetterForHarry />
        <BirthdayFinale />
        <Surprise />
      </main>
    </>
  );
}