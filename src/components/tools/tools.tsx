import styles from "./tools.module.scss";
import { useRef, useState } from "react";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import ColorPalette from "../colorPalette/colorPalette";
import { ToolsProps } from "./tools.props";
import { PaintWidth } from "@/lib/type";
import ColorButton from "../colorButton/colorButton";

const Tools = ({ undoDrawing, clearDrawing }: ToolsProps) => {
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

  const openAndCloseColorBlock = () => {
    if (isOpenColorsBlock) {
      setIsOpenColorsBlock(false);
    } else setIsOpenColorsBlock(true);
  };

  const closeColorBlock = () => {
    setIsOpenColorsBlock(false);
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
      <ColorButton style={{ backgroundImage: `url('/back.svg')` }} />
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
      {isOpenColorsBlock && <ColorPalette isClosePalette={closeColorBlock} />}
      <div className={styles.paintButton}></div>
    </div>
  );
};

export default Tools;
