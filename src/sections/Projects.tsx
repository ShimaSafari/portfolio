import Image from "next/image";
import Link from "next/link";
import AIResumeBuilder from "@/assets/images/aiResumeBuilder-landing.png";
import BabyLine from "@/assets/images/ninibits-landing.png";
import { BadgeCheck } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Freelance niniBits",
    year: "2025",
    title: "ECommerce for Babies",
    technology: [{ item: "React.js" }, { item: "Material UI" }],
    link: "https://github.com/ShimaSafari/BabyLine",
    image: BabyLine,
  },
  {
    company: "Thesis Project",
    year: "2024",
    title: "AI Resume Builder",
    technology: [
      { item: "React.js" },
      { item: "Shadcn UI" },
      { item: "Starpi CMS" },
      { item: "Clerk Authentication" },
      { item: "Google Gemini API" },
    ],
    link: "https://github.com/ShimaSafari/ai-resume-builder",
    image: AIResumeBuilder,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-word Results"
          title=" Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col flex-wrap gap-4 mt-4 md:mt-5">
                    {project.technology.map((tech) => (
                      <li
                        key={tech.item}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <BadgeCheck className="size-5 md:size-6" />
                        <span>{tech.item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6">
                      <span>View Source Code</span>
                      <ArrowUpRight className="size-5" />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 rounded-t-xl md:rounded-t-3xl lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
