import clsx from "clsx";
import React from "react";
import styles from "./TextInput.module.scss";
export const TextInput: React.FC<
  React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
    multiline?: boolean;
  }
> = (_props) => {
  const { multiline, ...props } = _props;
  return multiline ? (
    <textarea
      {...props}
      className={clsx(styles["text-area"], props.className)}
    />
  ) : (
    <input {...props} className={clsx(styles["input"], props.className)} />
  );
};
