import { OverlayProps } from "./overlay.props";
import styles from "./overlay.module.scss";

const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
