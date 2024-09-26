import { PaintColor } from "@/lib/type";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ColorPaletteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isClosePalette: () => void;
  isOpenColorsBlock: boolean;
  changeBackgroundCanvas: (color: PaintColor) => void;
}
