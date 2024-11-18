import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  classNameLabel?: string;
  labelFor: string;
  labelText: string;
  placeholder?: string;
  children?: ReactNode;
}
