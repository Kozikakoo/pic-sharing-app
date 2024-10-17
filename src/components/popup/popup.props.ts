import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface OverlayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
