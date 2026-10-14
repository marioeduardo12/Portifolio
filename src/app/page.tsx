import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="conteudo" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero />
      </main>
    </>
  );
}
