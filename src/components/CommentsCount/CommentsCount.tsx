import { Comment } from "../../assets/icons/Comment";
import { FontWeight, Text4 } from "../Typography/Text";
import styles from "./CommentsCount.module.scss";
import textStyles from "../Typography/TextColors.module.scss";

export const CommentsCount: React.FC<{ count: number }> = (props) => {
  return (
    <div className={styles["wrapper"]}>
      <Comment />
      <Text4
        fontWeight={FontWeight.medium}
        className={textStyles["gray-dark-text"]}
      >
        {props.count}
      </Text4>
    </div>
  );
};
