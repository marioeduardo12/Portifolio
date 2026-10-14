import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main
        id="conteudo"
        tabIndex={-1}
        className="relative isolate overflow-x-clip outline-none"
      >
        <PageBackdrop />
        <Hero />
        <div className="flex flex-col gap-6 pb-6 sm:gap-8 lg:gap-10">
          <About />
          <ExperienceTimeline />
          <Projects />
          <TechStack />
        </div>
      </main>
    </>
  );
}

/** Luzes ambientes ao longo da página, dando continuidade entre as seções. */
function PageBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute top-[18%] -left-[20rem] size-[44rem] rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.1),transparent)]" />
      <div className="absolute top-[42%] -right-[22rem] size-[48rem] rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.08),transparent)]" />
      <div className="absolute top-[70%] -left-[18rem] size-[40rem] rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.08),transparent)]" />
    </div>
  );
}
