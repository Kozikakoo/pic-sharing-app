import { OverlayProps } from "./Overlay.props";
import styles from "./Overlay.module.scss";

const Overlay = ({ children }: OverlayProps) => {
  return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
