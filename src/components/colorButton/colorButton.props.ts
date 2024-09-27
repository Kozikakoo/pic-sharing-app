import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ColorButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}
