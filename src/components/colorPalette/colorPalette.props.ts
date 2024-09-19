import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ColorPaletteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isClosePalette: () => void;
}
