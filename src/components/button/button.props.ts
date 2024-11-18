import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: "orange" | "white" | "blue" | "red";
  text: string;
}
