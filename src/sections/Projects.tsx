import Image from "next/image";
import Link from "next/link";
import AIResumeBuilder from "@/assets/images/aiResumeBuilder-landing.png";
import BabyLine from "@/assets/images/ninibits-landing.png";
import { BadgeCheck } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
const portfolioProjects = [
  {
    company: "Thesis Project",
    year: "2024",
    title: "Online Resume Builder with AI",
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
  {
    company: "niniBits Freelance",
    year: "2025",
    title: "Online Store Website for Kids",
    technology: [{ item: "React.js" }, { item: "Material UI" }],
    link: "https://github.com/ShimaSafari/BabyLine",
    image: BabyLine,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-word Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital exeperiences.
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-8"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
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
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
