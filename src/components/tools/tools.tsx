import {
  bottomRowColors,
  middleRowColors,
  paintColorsBrightness,
  topRowColors,
} from "@/lib/data";
import styles from "./tools.module.scss";
import { useState } from "react";
import { usePaintStylesContext } from "@/context/paint-styles.context";
import ColorPalette from "../colorPalette/colorPalette";

const Tools = () => {
  const {
    paintColor,
    setPaintColor,
    width,
    setWidth,
    backgroundColor,
    setBackgroundColor,
  } = usePaintStylesContext();
  const [isOpenColorsBlock, setIsOpenColorsBlock] = useState(false);

  const openAndCloseColorBlock = () => {
    if (isOpenColorsBlock) {
      setIsOpenColorsBlock(false);
    } else setIsOpenColorsBlock(true);
  };

  return (
    <div>
      <div
        className={styles.paintButton}
        style={{ backgroundColor: paintColor }}
        onClick={openAndCloseColorBlock}
      ></div>
      {isOpenColorsBlock && <ColorPalette />}
      <div className={styles.paintButton}></div>
      <div>
        <input type="range" />
      </div>
    </div>
  );
};

export default Tools;
