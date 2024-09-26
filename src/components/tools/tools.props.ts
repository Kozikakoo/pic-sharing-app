import { PaintColor } from "@/lib/type";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ToolsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  undoDrawing: () => void;
  clearDrawing: () => void;
  changeBackgroundCanvas: (color: PaintColor) => void;
}
