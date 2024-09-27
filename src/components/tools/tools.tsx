"use client";
import styles from "./tools.module.scss";
import { useRef, useState } from "react";
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
  const [isOpenColorsBlock, setIsOpenColorsBlock] = useState(false);
  const [isOpenColorsBackground, setIsOpenColorsBackground] = useState(false);

  const openAndCloseColorBlock = () => {
    if (isOpenColorsBlock) {
      setIsOpenColorsBlock(false);
    } else setIsOpenColorsBlock(true);
  };

  const openAndCloseColorBackground = () => {
    if (isOpenColorsBackground) {
      setIsOpenColorsBackground(false);
    } else setIsOpenColorsBackground(true);
  };

  const closeColorBlock = () => {
    setIsOpenColorsBlock(false);
    setIsOpenColorsBackground(false);
  };

  return (
    <div className={styles.flexBlock}>
      <ColorButton
        style={{
          backgroundColor: paintColor,
        }}
        onClick={openAndCloseColorBlock}
      >
        <Pen />
      </ColorButton>
      <ColorButton
        onClick={openAndCloseColorBackground}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <Back />
      </ColorButton>
      <ColorButton>
        <Eraser />
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
      {(isOpenColorsBlock || isOpenColorsBackground) && (
        <ColorPalette
          isClosePalette={closeColorBlock}
          isOpenColorsBlock={isOpenColorsBlock}
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
