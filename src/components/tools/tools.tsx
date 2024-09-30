"use client";
import styles from "./tools.module.scss";
import { useEffect, useState } from "react";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import ColorPalette from "../colorPalette/colorPalette";
import { ToolsProps } from "./tools.props";
import { PaintColor, PaintWidth } from "@/lib/type";
import ColorButton from "../colorButton/colorButton";
import Pen from "../../assets/pen.svg";
import Trash from "../../assets/trash.svg";
import Back from "../../assets/back.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import Download from "../../assets/download.svg";
import Eraser from "../../assets/eraser.svg";
import { darkColors } from "@/lib/data";

const Tools = ({
  undoDrawing,
  clearDrawing,
  changeBackgroundCanvas,
}: ToolsProps) => {
  const {
    paintColor,
    setPaintColor,
    width,
    setWidth,
    currentStyle,
    setCurrentStyle,
    backgroundColor,
    setBackgroundColor,
  } = usePaintStylesContext();
  const [activePalette, setActivePalette] = useState<
    "paint" | "background" | null
  >(null);
  const [activeEraser, setActiveEraser] = useState(false);
  const [lastColor, setLastColor] = useState<PaintColor>("#000000");

  const togglePalette = (type: "paint" | "background") => {
    setActivePalette((prev) => (prev === type ? null : type));
  };

  const onClickEraser = () => {
    setLastColor(paintColor);
    setPaintColor(backgroundColor);
    setCurrentStyle({ ...currentStyle, color: backgroundColor });
    setWidth(8);
    setActiveEraser(true);
  };

  return (
    <div className={styles.flexBlock}>
      <ColorButton
        style={
          activeEraser
            ? {
                backgroundColor: lastColor,
              }
            : { backgroundColor: paintColor }
        }
        onClick={() => togglePalette("paint")}
      >
        <Pen fill={darkColors.includes(paintColor) ? "white" : "black"} />
      </ColorButton>
      <ColorButton
        onClick={() => togglePalette("background")}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <Back fill={darkColors.includes(backgroundColor) ? "white" : "black"} />
      </ColorButton>
      <ColorButton>
        <Eraser onClick={onClickEraser} />
      </ColorButton>
      <ColorButton onClick={undoDrawing}>
        <ArrowLeft />
      </ColorButton>
      <ColorButton>
        <Download />
      </ColorButton>
      <ColorButton onClick={clearDrawing}>
        <Trash />
      </ColorButton>
      {activePalette && (
        <ColorPalette
          isClosePalette={() => setActivePalette(null)}
          isOpenColorsBlock={activePalette === "paint"}
          changeBackgroundCanvas={(color: PaintColor) =>
            changeBackgroundCanvas(color)
          }
        />
      )}
      <div className={styles.paintButton}></div>
    </div>
  );
};

export default Tools;
