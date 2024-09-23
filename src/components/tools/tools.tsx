import styles from "./tools.module.scss";
import { useRef, useState } from "react";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import ColorPalette from "../colorPalette/colorPalette";
import { ToolsProps } from "./tools.props";
import { PaintWidth } from "@/lib/type";
import ColorButton from "../colorButton/colorButton";

const Tools = ({ undoDrawing }: ToolsProps) => {
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
    <div className={styles.gridBlock}>
      <ColorButton
        style={{
          backgroundImage: `url('/pen.svg')`,
          backgroundColor: paintColor,
          gridArea: "pen",
        }}
        onClick={openAndCloseColorBlock}
      />
      <ColorButton
        style={{ backgroundImage: `url('/back.svg')`, gridArea: "background" }}
      />
      <ColorButton
        style={{ backgroundImage: `url('/eraser.svg')`, gridArea: "clear" }}
      />
      <ColorButton
        onClick={undoDrawing}
        style={{ backgroundImage: `url('/arrow-left.svg')`, gridArea: "back" }}
      />
      <ColorButton
        style={{
          backgroundImage: `url('/download.svg')`,
          gridArea: "download",
        }}
      />
      {isOpenColorsBlock && <ColorPalette isClosePalette={closeColorBlock} />}
      <div className={styles.paintButton}></div>
    </div>
  );
};

export default Tools;
