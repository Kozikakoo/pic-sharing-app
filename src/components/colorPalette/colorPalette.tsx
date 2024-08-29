import {
  bottomRowColors,
  middleRowColors,
  paintColorsBrightness,
  topRowColors,
} from "@/lib/data";
import styles from "./colorPalette.module.scss";

const ColorPalette = () => {
  return (
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
  );
};

export default ColorPalette;
