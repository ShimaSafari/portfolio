import { Heart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLink = [
  {
    title: "Github",
    href: "https://github.com/ShimaSafari",
  },
  {
    title: "LinkedIn",
    href: "www.linkedin.com/in/shimasafari",
  },
  {
    title: "Telegram",
    href: "https://t.me/shimasafarimg",
  },
];
export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -z-10 -translate-x-1/2 bg-emerald-300/30 mask-radial-[50%_50%] mask-radial-at-[bottom_center] mask-radial-from-black mask-radial-to-transparent"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40 inline-flex gap-2 items-center">
            &copy; {new Date().getFullYear()}. All rights reserved.
            <span>Made with</span>
            <Heart className="size-4 text-pink-300 fill-pink-500" />
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
