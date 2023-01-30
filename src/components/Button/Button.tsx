import clsx from "clsx";
import React, { PropsWithChildren, ReactNode } from "react";
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
  React.HTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    variant?: ButtonVariant;
  }
> = (_props) => {
  const { variant, icon, ...props } = _props;
  return (
    <button
      {...props}
      className={clsx(
        styles["button"],
        variant && buttonVariantClasses[variant],
        props.className
      )}
    >
      {icon}
      {props.children}
    </button>
  );
};
