import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children?: ReactNode;
  placeholder?: string;
}
