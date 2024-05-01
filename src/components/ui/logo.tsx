import { cn } from "@/utils";
import Link from "next/link";
import { ComponentProps } from "react";

type LogoProps = ComponentProps<"a">;
export const Logo = ({ className, ...rest }: LogoProps) => (
  <Link
    className={cn(
      "text-2xl font-bold text-gray-100 hover:text-gray-50",
      className,
    )}
    {...rest}
    href={"/"}
  >
    TIMS
  </Link>
);
