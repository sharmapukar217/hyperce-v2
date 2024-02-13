import { cn } from "@/utils";
import { ReactNode } from "react";

export type ContainerProps = {
  full?: boolean;
  children: ReactNode;
  classes?: { root?: string };
};

export function Container({ children, classes }: ContainerProps) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 md:px-12 xl:px-6", classes?.root)}>{children}</div>
  );
}
