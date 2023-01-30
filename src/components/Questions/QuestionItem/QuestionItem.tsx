import styles from "./QuestionItem.module.scss";
import { Question } from "../../../questions/questions";
import { FontWeight, Text2, Text3 } from "../../Typography/Text";
import { Button, ButtonVariant } from "../../Button/Button";
import { strings } from "../../../utils/strings";
import { DateTime } from "../../DateTime/DateTime";
import { CommentsCount } from "../../CommentsCount/CommentsCount";

export const QuestionItem: React.FC<{ data: Question }> = (props) => {
  return (
    <div className={styles["question-container"]}>
      <div className={styles["header"]}>
        <div className={styles["title-wrapper"]}>
          <img src="/icons/user.png" alt="user profile" />
          <Text2 fontWeight={FontWeight.medium}>{props.data.title}</Text2>
        </div>
        <div className={styles["info-wrapper"]}>
          <DateTime date={props.data.date} />
          <CommentsCount count={props.data.commentsCount} />
        </div>
      </div>
      <div className={styles["detail"]}>
        <Text3>{props.data.description}</Text3>
        <Button variant={ButtonVariant.Outlined}>{strings.moreDetail}</Button>
      </div>
    </div>
  );
};
