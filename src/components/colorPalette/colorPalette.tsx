"use client";
import {
  bottomRowColors,
  middleRowColors,
  paintColorsBrightness,
  topRowColors,
} from "@/lib/data";
import styles from "./ColorPalette.module.scss";
import { PaintColor } from "@/lib/type";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import { ColorPaletteProps } from "./ColorPalette.props";
import RangeWidth from "../RangeWidth/RangeWidth";
import { useEffect, useRef } from "react";

const ColorPalette = ({
  isClosePalette,
  isOpenColorsBlock,
  changeBackgroundCanvas,
}: ColorPaletteProps) => {
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
  const paletteRef = useRef<HTMLDivElement>(null);

  const changeColorAndClosePalette = (color: PaintColor) => {
    if (isOpenColorsBlock) {
      setPaintColor(color);
      setCurrentStyle({ ...currentStyle, color });
    } else {
      setBackgroundColor(color);
      changeBackgroundCanvas(color);
    }
    isClosePalette();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        paletteRef.current &&
        !paletteRef.current.contains(event.target as Node)
      ) {
        isClosePalette(); // Закрываем палитру
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [paletteRef, isClosePalette]);

  return (
    <div ref={paletteRef} className={styles.colorsBlock}>
      <div className={styles.brightness}>
        {paintColorsBrightness.map((color) => (
          <div
            onClick={() => changeColorAndClosePalette(color)}
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
              onClick={() => changeColorAndClosePalette(color)}
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
              onClick={() => changeColorAndClosePalette(color)}
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
              onClick={() => changeColorAndClosePalette(color)}
              key={color}
              style={{ backgroundColor: color }}
              className={styles.colors}
            ></div>
          ))}
        </div>
      </div>
      {isOpenColorsBlock && <RangeWidth />}
    </div>
  );
};

export default ColorPalette;
