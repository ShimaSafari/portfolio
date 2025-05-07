import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { BookOpen, Box, MessageCircleHeart } from "lucide-react";
import bookCover from "@/assets/images/book-cover.png";
import { TechIcons } from "@/components/TechIcon";
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
} from "@/components/Icons";
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
export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimps Into My World"
        description="Learn more about who I am, What I do, and What inspire me."
      />
      <div>
        <Card>
          <div>
            <BookOpen />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookCover} alt="Book cover" />
        </Card>
        <Card>
          <div>
            <Box />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft exceptional
              digital experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcons component={item.icon} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
