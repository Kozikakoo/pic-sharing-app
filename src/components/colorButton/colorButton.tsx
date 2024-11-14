import { ColorButtonProps } from "./ColorButton.props";
import styles from "./ColorButton.module.scss";
import { forwardRef } from "react";
import cn from "classnames";

const ColorButton = forwardRef<HTMLButtonElement, ColorButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(className, styles.circle)} {...props}>
        {children}
      </button>
    );
  }
);

ColorButton.displayName = "ColorButton";

export default ColorButton;
