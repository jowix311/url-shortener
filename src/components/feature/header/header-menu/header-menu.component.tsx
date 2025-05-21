import { CommonAtomicProps } from "@/lib/types";

export const HeaderMenu = ({ className, children }: CommonAtomicProps) => {
  return <div className={className}>{children}</div>;
};

export const HeaderMenuList = ({
  className,
  children,
}: CommonAtomicProps) => {
  return <ul className={className}>{children}</ul>;
};

