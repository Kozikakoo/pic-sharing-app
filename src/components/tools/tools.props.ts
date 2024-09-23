import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ToolsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  undoDrawing: () => void;
}
