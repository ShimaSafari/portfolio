import { twMerge } from "tailwind-merge";
import { TechIcons } from "./TechIcon";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    icon: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex mask-x-from-85%", className)}>
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-12",
          itemsWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg"
          >
            <TechIcons component={item.icon} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
