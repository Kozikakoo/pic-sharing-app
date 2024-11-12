import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: ReactNode;
  placeholder: string;
}
