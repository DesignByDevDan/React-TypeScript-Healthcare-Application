import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string; // Title of the card
  className?: string; // Additional styles
  background?: ReactNode; // Optional background for the card
  Icon: React.ElementType; // Icon component
  description: string; // Short description
  href: string; // Link to navigate
  cta: string; // Call to action text
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl",
      // Light styles
      "bg-white shadow-md transition-all",
      // Dark styles
      "dark:bg-neutral-900 dark:shadow-lg",
      className
    )}
    {...props}
  >
    {background && <div>{background}</div>}
    <div className="pointer-events-none z-10 flex flex-col gap-2 p-6 transition-all duration-300 group-hover:translate-y-0">
      <Icon className="h-12 w-12 text-primary-500 group-hover:text-primary-700" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full items-center justify-between p-4 opacity-0 transition-all duration-300 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>
    <div className="absolute inset-0 pointer-events-none bg-transparent transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/20" />
  </div>
);

export { BentoCard, BentoGrid };
