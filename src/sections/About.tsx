"use client";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookCover from "@/assets/images/book-cover.png";
import map from "@/assets/images/map.png";
import emojiSmile from "@/assets/images/emoji-smile.png";
import {
  HtmlIcon,
  CssIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  MuiIcon,
  TailwindIcon,
  GithubIcon,
  JiraIcon,
  FigmaIcon,
  ChromeIcon,
  ShadcnIcon,
} from "@/components/Icons";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItems = [
  {
    title: "HTML5",
    icon: HtmlIcon,
  },
  {
    title: "CSS3",
    icon: CssIcon,
  },
  {
    title: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    title: "React.js",
    icon: ReactIcon,
  },
  {
    title: "Next.js",
    icon: NextjsIcon,
  },
  {
    title: "Material UI",
    icon: MuiIcon,
  },
  {
    title: "Shadcn UI",
    icon: ShadcnIcon,
  },
  {
    title: "Tailwind",
    icon: TailwindIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Jira",
    icon: JiraIcon,
  },
  {
    title: "Figma",
    icon: FigmaIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
];
const hobbies = [
  {
    title: "Learning",
    emoji: "🧠",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏃‍♀️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "5%",
    top: "65%",
  },
  {
    title: "AI Tools",
    emoji: "🤖",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimps Into My World"
          description="Learn more about who I am, What I do, and What inspire me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookCover} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={map}
                alt="Map"
                className="h-full w-full object-cover "
              />
              <div className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-18 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 -z-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
                <Image
                  src={emojiSmile}
                  alt="Smiling emoji"
                  className="size-14"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
