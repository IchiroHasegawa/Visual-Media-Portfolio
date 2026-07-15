import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function SectionContainer({
  children,
  className,
  as: Component = "section",
  ...props
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        "w-full px-6 md:px-12 py-16 md:py-[120px] max-w-[1440px] mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
