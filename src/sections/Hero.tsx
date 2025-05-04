import emojiImage from "@/assets/images/emoji-computer.png";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";
import { Sparkle } from "lucide-react";
import { Sparkles } from "lucide-react";
import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 mask-y-from-90%">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <Sparkle className="size-24 text-transparent fill-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <Sparkle className="size-12 text-transparent fill-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <Sparkle className="size-8 text-transparent fill-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <Sparkles className="size-8 text-emerald-300/30 fill-emerald-300/30 stroke-1" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <Sparkles className="size-5 text-emerald-300/30 fill-emerald-300/30 stroke-1" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <Sparkles className="size-10 text-emerald-300/30 fill-emerald-300/30 stroke-1" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <Sparkles className="size-14 text-emerald-300/30 fill-emerald-300/30 stroke-1" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={emojiImage}
            className="size-[100px]"
            alt="Person peeking from behind a laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto sm:px-4 md:px-0">
          <h1 className="font-serif text-center text-3xl md:text-5xl mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-emerald-300/50 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            {/* <Image src={ArrowDown} alt="Arrow Down" className="size-4" /> */}
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="text-lg">👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
