import { ColorButtonProps } from "./ColorButton.props";
import styles from "./ColorButton.module.scss";
import { forwardRef } from "react";

const ColorButton = forwardRef<HTMLButtonElement, ColorButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} className={styles.circle} {...props}>
        {children}
      </button>
    );
  }
);

ColorButton.displayName = "ColorButton";

export default ColorButton;
