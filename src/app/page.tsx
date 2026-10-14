import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Parallax } from "@/components/ui/Parallax";
import {
  experiences,
  profile,
  siteConfig,
  socialLinks,
  techGroups,
} from "@/data/portfolio";

const [city, region] = profile.location.split(", ");
const currentJob = experiences.find((experience) => !experience.end);

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: siteConfig.description,
  ...(siteConfig.url && { url: siteConfig.url }),
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressRegion: region,
    addressCountry: "BR",
  },
  ...(currentJob && {
    worksFor: { "@type": "Organization", name: currentJob.company },
  }),
  alumniOf: { "@type": "EducationalOrganization", name: "COTEMIG" },
  affiliation: { "@type": "CollegeOrUniversity", name: "PUC Minas" },
  knowsAbout: techGroups.flatMap((group) => group.items.map((item) => item.name)),
  knowsLanguage: ["pt-BR", "en"],
  sameAs: [socialLinks.github.href, socialLinks.linkedin.href],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main
        id="conteudo"
        tabIndex={-1}
        className="relative isolate overflow-x-clip outline-none"
      >
        <PageBackdrop />
        <Hero />
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          <About />
          <ExperienceTimeline />
          <Projects />
          <TechStack />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Luzes ambientes ao longo da página, dando continuidade entre as seções. */
function PageBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <Parallax offset={80} className="absolute top-[18%] -left-80 size-176">
        <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.1),transparent)]" />
      </Parallax>
      <Parallax offset={100} className="absolute top-[42%] -right-88 size-192">
        <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.08),transparent)]" />
      </Parallax>
      <Parallax offset={80} className="absolute top-[68%] -left-72 size-160">
        <div className="size-full rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.08),transparent)]" />
      </Parallax>
    </div>
  );
}
