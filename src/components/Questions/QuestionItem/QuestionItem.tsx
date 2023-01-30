import styles from "./QuestionItem.module.scss";
import {
  Answer,
  Question,
  QuestionsActions,
} from "../../../questions/questions";
import { FontWeight, Text2, Text3 } from "../../Typography/Text";
import { Button, ButtonVariant } from "../../Button/Button";
import { strings } from "../../../utils/strings";
import { DateTime } from "../../DateTime/DateTime";
import { CommentsCount } from "../../CommentsCount/CommentsCount";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { Happy } from "../../../assets/icons/Happy";
import { Sad } from "../../../assets/icons/Sad";

export const QuestionItem: React.FC<{ data: Question }> = (props) => {
  const dispatch = useDispatch();
  const handleDetailClick = useCallback(() => {
    console.log("clicked detail: ", props.data.id);
    dispatch(QuestionsActions.setQuestionSelected(props.data.id));
  }, [props.data.id]);

  return (
    <div className={styles["question-container"]}>
      <div className={styles["header"]}>
        <div className={styles["title-wrapper"]}>
          <img src="/icons/user.png" alt="user profile" />
          <Text2 fontWeight={FontWeight.medium}>{props.data.title}</Text2>
        </div>
        <div className={styles["info-wrapper"]}>
          <DateTime date={props.data.date} />
          <CommentsCount count={props.data.answers?.length ?? 0} />
        </div>
      </div>
      <div className={styles["detail"]}>
        <Text3>{props.data.description}</Text3>
        <Button variant={ButtonVariant.Outlined} onClick={handleDetailClick}>
          {strings.moreDetail}
        </Button>
      </div>
    </div>
  );
};

export const AnswerItem: React.FC<{ data: Answer; questionId: number }> = (
  props
) => {
  const dispatch = useDispatch();
  const handleGoodVote = useCallback(() => {
    dispatch(
      QuestionsActions.setAnswerUsefulness({
        questionId: props.questionId,
        answerId: props.data.id,
        isUseful: true,
      })
    );
  }, []);
  const handleBadVote = useCallback(() => {
    dispatch(
      QuestionsActions.setAnswerUsefulness({
        questionId: props.questionId,
        answerId: props.data.id,
        isUseful: false,
      })
    );
  }, []);

  return (
    <div className={styles["question-container"]}>
      <div className={styles["header"]}>
        <div className={styles["title-wrapper"]}>
          <img src="/icons/user.png" alt="user profile" />
          <Text2 fontWeight={FontWeight.medium}>{props.data.username}</Text2>
        </div>
        <div className={styles["info-wrapper"]}>
          <DateTime date={props.data.date} />
          <div className={styles["vote-wrapper"]}>
            <Button variant={ButtonVariant.SimpleText} icon={<Happy />}>
              {props.data.goodVoteCount}
            </Button>
            <Button variant={ButtonVariant.SimpleText} icon={<Sad />}>
              {props.data.badVoteCount}
            </Button>
          </div>
        </div>
      </div>
      <div className={styles["detail"]}>
        <Text3>{props.data.description}</Text3>
        <div className={styles["action-bar"]}>
          <Button
            variant={ButtonVariant.Outlined}
            icon={<Happy />}
            onClick={handleGoodVote}
          >
            {strings.goodAnswer}
          </Button>
          <Button
            className={styles["bad-button"]}
            variant={ButtonVariant.Outlined}
            icon={<Sad />}
            onClick={handleBadVote}
          >
            {strings.badAnswer}
          </Button>
        </div>
      </div>
    </div>
  );
};
