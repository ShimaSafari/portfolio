import { Heart } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge(" flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-4">
        <Heart className="size-7 text-emerald-200 fill-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-white/60 mt-2 max-w-xs">
        {description}
      </p>
    </div>
  );
};
