"use client";
import {
  bottomRowColors,
  middleRowColors,
  paintColorsBrightness,
  topRowColors,
} from "@/lib/data";
import styles from "./colorPalette.module.scss";
import { PaintColor, PaintWidth } from "@/lib/type";
import { usePaintStylesContext } from "@/context/paint-styles-context";

const ColorPalette = () => {
  const {
    paintColor,
    setPaintColor,
    width,
    setWidth,
    backgroundColor,
    setBackgroundColor,
    currentStyle,
    setCurrentStyle,
  } = usePaintStylesContext();

  const changeColor = (color: PaintColor) => {
    setPaintColor(color);
    setCurrentStyle({ ...currentStyle, color });
  };

  const changeWidth = (lineWidth: PaintWidth) => {
    setWidth(lineWidth);
    setCurrentStyle({ ...currentStyle, width });
  };

  return (
    <div className={styles.colorsBlock}>
      <div className={styles.brightness}>
        {paintColorsBrightness.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={styles.colors}
          ></div>
        ))}
      </div>
      <div>
        <div className={styles.rowColors}>
          {" "}
          {topRowColors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={styles.colors}
            ></div>
          ))}
        </div>
        <div className={styles.rowColors}>
          {" "}
          {middleRowColors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={styles.colors}
            ></div>
          ))}
        </div>
        <div className={styles.rowColors}>
          {" "}
          {bottomRowColors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={styles.colors}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
