import { CommonAtomicProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export const HeaderLogo = ({ children, className }: CommonAtomicProps) => {
  return <div className={cn("", className)}>{children}</div>;
};
