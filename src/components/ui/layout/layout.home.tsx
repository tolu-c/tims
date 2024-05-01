import { cn } from "@/utils";
import { ComponentProps, PropsWithChildren } from "react";

type LayoutProps = ComponentProps<"main"> & PropsWithChildren;

export const HomeLayout = ({ children, className, ...rest }: LayoutProps) => {
  return (
    <main className={cn("2xl:container mx-auto", className)} {...rest}>
      {children}
    </main>
  );
};

  
    
