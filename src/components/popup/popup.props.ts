import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";

export interface PopupProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  type: "edit" | "delete";
}
