import { cn } from "@/utils";
import { Merriweather } from "next/font/google";
import { ComponentProps, PropsWithChildren } from "react";

const merri = Merriweather({ subsets: ["latin"], weight: "700" });

type SectionLayoutProps = ComponentProps<"section"> &
  PropsWithChildren & { title: string };

export const SectionLayout = ({
  className,
  children,
  title,
  ...rest
}: SectionLayoutProps) => (
  <section
    className={cn(
      `w-full flex flex-col pt-12 pb-8 lg:w-5/6 2xl:container mx-auto gap-10 items-start`,
      className,
    )}
    {...rest}
  >
    <h2
      className={`text-3xl text-gray-900 font-bold font-serif ${merri.className}`}
    >
      {title}
    </h2>
    {children}
  </section>
);
