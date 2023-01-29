// 3 types of button outlined, filled and text buttons
// optional icon
//color
import { PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.scss";
export const Button: React.FC<PropsWithChildren<{ icon?: ReactNode }>> = (
  props
) => {
  return (
    <button className={styles["button"]}>
      {props.icon}
      {props.children}
    </button>
  );
};
