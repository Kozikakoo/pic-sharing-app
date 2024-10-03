"use client";
import styles from "./tools.module.scss";
import { RefObject, useEffect, useRef, useState } from "react";
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
  downloadCanvasImg,
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
    "pen" | "background" | null
  >(null);
  const [activeColorButton, setActiveColorButton] = useState<
    "pen" | "background" | "eraser"
  >("pen");
  const [lastColor, setLastColor] = useState<PaintColor>("#000000");
  const PenRef = useRef<HTMLButtonElement>(null);
  const EraserRef = useRef<HTMLButtonElement>(null);
  const BackgroundRef = useRef<HTMLButtonElement>(null);

  const addAndRemoveStyleBorder = (
    buttonToAdd: React.RefObject<HTMLButtonElement>,
    buttonsToRemove: React.RefObject<HTMLButtonElement>[]
  ) => {
    if (buttonToAdd.current) {
      buttonToAdd.current.style.border = "1px solid black";
    }

    buttonsToRemove.forEach((button) => {
      if (button.current) {
        button.current.style.border = "none";
      }
    });
  };

  useEffect(() => {
    const buttonMap = {
      pen: { add: PenRef, remove: [EraserRef, BackgroundRef] },
      eraser: { add: EraserRef, remove: [PenRef, BackgroundRef] },
      background: { add: BackgroundRef, remove: [PenRef, EraserRef] },
    };

    const activeConfig = buttonMap[activeColorButton as keyof typeof buttonMap];

    if (activeConfig) {
      addAndRemoveStyleBorder(activeConfig.add, activeConfig.remove);
    }
  }, [activeColorButton]);

  const togglePalette = (type: "pen" | "background") => {
    setActivePalette((prev) => (prev === type ? null : type));
    setActiveColorButton(type);
  };

  const onClickEraser = () => {
    setLastColor(paintColor);
    setPaintColor(backgroundColor);
    setCurrentStyle({ ...currentStyle, color: backgroundColor });
    setWidth(8);
    setActiveColorButton("eraser");
  };

  const fillSVG = () => {
    if (activeColorButton == "eraser") {
      return darkColors.includes(lastColor) ? "white" : "black";
    } else return darkColors.includes(paintColor) ? "white" : "black";
  };

  return (
    <div className={styles.flexBlock}>
      <ColorButton
        style={
          activeColorButton == "eraser"
            ? {
                backgroundColor: lastColor,
              }
            : { backgroundColor: paintColor }
        }
        onClick={() => togglePalette("pen")}
        ref={PenRef}
      >
        <Pen fill={fillSVG()} />
      </ColorButton>
      <ColorButton
        onClick={() => togglePalette("background")}
        style={{
          backgroundColor: backgroundColor,
        }}
        ref={BackgroundRef}
      >
        <Back fill={darkColors.includes(backgroundColor) ? "white" : "black"} />
      </ColorButton>
      <ColorButton onClick={onClickEraser} ref={EraserRef}>
        <Eraser />
      </ColorButton>
      <ColorButton onClick={undoDrawing}>
        <ArrowLeft />
      </ColorButton>
      <ColorButton onClick={downloadCanvasImg}>
        <Download />
      </ColorButton>
      <ColorButton onClick={clearDrawing}>
        <Trash />
      </ColorButton>
      {activePalette && (
        <ColorPalette
          isClosePalette={() => setActivePalette(null)}
          isOpenColorsBlock={activePalette === "pen"}
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
