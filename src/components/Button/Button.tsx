import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import styles from "./Button.module.scss";

export enum ButtonVariant {
  Filled = "filled",
  Outlined = "outlined",
  SimpleText = "simpleText",
}

const buttonVariantClasses = {
  [ButtonVariant.SimpleText]: styles["button--simple"],
  [ButtonVariant.Outlined]: styles["button--outlined"],
  [ButtonVariant.Filled]: "",
};
export const Button: React.FC<
  PropsWithChildren<{ icon?: ReactNode; variant?: ButtonVariant }>
> = (props) => {
  return (
    <button
      className={clsx(
        styles["button"],
        props.variant && buttonVariantClasses[props.variant]
      )}
    >
      {props.icon}
      {props.children}
    </button>
  );
};
