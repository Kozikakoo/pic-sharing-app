import styles from "./Photo.module.scss";
import cn from "classnames";
import { PhotoProps } from "./Photo.props";

const Photo = ({ className, ...props }: PhotoProps) => {
  return (
    <div className={cn(className, styles.photo)} {...props}>
      A
    </div>
  );
};

export default Photo;
