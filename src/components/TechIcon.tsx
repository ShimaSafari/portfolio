export const TechIcons = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="oklch(84.5% 0.143 164.978)" />
          <stop offset="100%" stopColor="oklch(74.6% 0.16 232.661)" />
        </linearGradient>
      </svg>
    </>
  );
};
