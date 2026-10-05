import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Stats from "@/components/Stats";
import Cake from "@/components/Cake";
import BucketList from "@/components/BucketList";
import Letter from "@/components/Letter";
import Secret from "@/components/Secret";
import Surprise from "@/components/Surprise";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  return (
    <>
      <FloatingHearts />

      <Hero />
      <Timeline />
      <Stats />
      <Cake />
      <BucketList />
      <Letter />
      <Secret />
      <Surprise />
    </>
  );
}