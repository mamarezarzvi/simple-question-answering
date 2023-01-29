import clsx from "clsx";
import styles from "./Text.module.scss";

export enum FontWeight {
  normal = 400,
  medium = 700,
  bold = 800,
}

const fontWeightClasses = {
  [FontWeight.bold]: styles["text--bold"],
  [FontWeight.medium]: styles["text--medium"],
  [FontWeight.normal]: styles["text--normal"],
};

const getTextClass = (
  type: string,
  weight: undefined | FontWeight,
  className: string | undefined
) => clsx(styles[type], weight && fontWeightClasses[weight], className);

type TextProps = {
  fontWeight?: FontWeight;
} & React.HTMLAttributes<HTMLParagraphElement>;

const TextBase: React.FC<TextProps> = (props) => {
  const { children, fontWeight, ..._props } = props;
  return <p {..._props}>{children}</p>;
};

export const Text1: React.FC<TextProps> = (props) => {
  return (
    <TextBase
      {...props}
      className={getTextClass("text1", props.fontWeight, props.className)}
    />
  );
};

export const Text2: React.FC<TextProps> = (props) => {
  return (
    <TextBase
      {...props}
      className={getTextClass("text2", props.fontWeight, props.className)}
    />
  );
};

export const Text3: React.FC<TextProps> = (props) => {
  return (
    <TextBase
      {...props}
      className={getTextClass("text3", props.fontWeight, props.className)}
    />
  );
};

export const Text4: React.FC<TextProps> = (props) => {
  return (
    <TextBase
      {...props}
      className={getTextClass("text4", props.fontWeight, props.className)}
    />
  );
};
