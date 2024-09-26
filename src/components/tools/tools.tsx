import styles from "./tools.module.scss";
import { useRef, useState } from "react";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import ColorPalette from "../colorPalette/colorPalette";
import { ToolsProps } from "./tools.props";
import { PaintColor, PaintWidth } from "@/lib/type";
import ColorButton from "../colorButton/colorButton";

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
          backgroundImage: `url('/pen.svg')`,
          backgroundColor: paintColor,
        }}
        onClick={openAndCloseColorBlock}
      />
      <ColorButton
        style={{ backgroundImage: `url('/back.svg')` }}
        onClick={openAndCloseColorBackground}
      />
      <ColorButton style={{ backgroundImage: `url('/eraser.svg')` }} />
      <ColorButton
        onClick={undoDrawing}
        style={{ backgroundImage: `url('/arrow-left.svg')` }}
      />
      <ColorButton
        style={{
          backgroundImage: `url('/download.svg')`,
        }}
      />
      <ColorButton
        style={{
          backgroundImage: `url('/trash.svg')`,
        }}
        onClick={clearDrawing}
      />
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
