import {
  bottomRowColors,
  middleRowColors,
  paintColorsBrightness,
  topRowColors,
} from "@/lib/data";
import styles from "./tools.module.scss";
import { ToolsProps } from "./tools.props";
import { useState } from "react";

const Tools = ({ range, color }: ToolsProps) => {
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
        style={{ backgroundColor: color }}
        onClick={openAndCloseColorBlock}
      ></div>
      {isOpenColorsBlock && (
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
      )}
      <div className={styles.paintButton}></div>
      <div>
        <input type="range" defaultValue={range} />
      </div>
    </div>
  );
};

export default Tools;
