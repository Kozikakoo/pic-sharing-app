import styles from "./tools.module.scss";
import { useRef, useState } from "react";
import { usePaintStylesContext } from "@/context/paint-styles-context";
import ColorPalette from "../colorPalette/colorPalette";
import { ToolsProps } from "./tools.props";
import { PaintWidth } from "@/lib/type";

const Tools = () => {
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
  const rangeRef = useRef<HTMLInputElement>(null);

  const openAndCloseColorBlock = () => {
    if (isOpenColorsBlock) {
      setIsOpenColorsBlock(false);
    } else setIsOpenColorsBlock(true);
  };

  const closeColorBlock = () => {
    setIsOpenColorsBlock(false);
    if (rangeRef.current) {
      console.log(rangeRef.current.value);
    }
  };

  const changeWidth = () => {
    if (rangeRef.current) {
      setWidth(rangeRef.current.value as PaintWidth);
      setCurrentStyle({
        ...currentStyle,
        width: rangeRef.current.value as PaintWidth,
      });
    }
  };

  return (
    <div>
      <div
        className={styles.paintButton}
        style={{ backgroundColor: paintColor }}
        onClick={openAndCloseColorBlock}
      ></div>
      {isOpenColorsBlock && <ColorPalette isClosePalette={closeColorBlock} />}
      <div className={styles.paintButton}></div>
      <div>
        <input
          defaultValue="2"
          ref={rangeRef}
          type="range"
          min="2"
          max="8"
          step="2"
          onChange={changeWidth}
        />
      </div>
    </div>
  );
};

export default Tools;
