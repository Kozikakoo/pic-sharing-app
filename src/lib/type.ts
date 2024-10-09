import {
  paintColorsBrightness,
  topRowColors,
  middleRowColors,
  bottomRowColors,
} from "./data";

export type PaintColor =
  | (typeof paintColorsBrightness)[number]
  | (typeof topRowColors)[number]
  | (typeof middleRowColors)[number]
  | (typeof bottomRowColors)[number];

export type PaintWidth = 2 | 4 | 6 | 8;

export type ActivePalette = "pen" | "background" | null;

export type ActiveColorButton = "pen" | "background" | "eraser";

export interface ICurrentStyle {
  color: PaintColor;
  width: PaintWidth;
}
