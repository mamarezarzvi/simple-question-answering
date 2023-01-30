import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionsActions } from "../../../questions/questions";
import { RootState } from "../../../store";
import { strings } from "../../../utils/strings";
import { Button } from "../../Button/Button";
import { TextInput } from "../../TextInput/TextInput";
import { FontWeight, Text1, Text2, Text4 } from "../../Typography/Text";
import { AnswerItem, QuestionItem } from "../QuestionItem/QuestionItem";
import styles from "./QuestionDetail.module.scss";
import textStyles from "../../Typography/TextColors.module.scss";
import clsx from "clsx";

export const QuestionDetail: React.FC = () => {
  const answerRef = useRef("");
  const [hasError, setError] = useState(false);
  const dispatch = useDispatch();
  const item = useSelector(
    (state: RootState) =>
      state.questionsState.questions[state.questionsState.selectedQuestionId!]
  );

  const submitAnswer = useCallback(() => {
    if (answerRef.current === "") {
      setError(true);
      return;
    }
    dispatch(
      QuestionsActions.addAnswer({
        questionId: item?.id!,
        answer: {
          description: answerRef.current,
          username: "Elnaz",
        },
      })
    );
    dispatch(QuestionsActions.clearSelected());
  }, [item?.id]);

  const handleChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setError(false);
      answerRef.current = event.currentTarget.value;
    },
    []
  );
  return (
    <>
      <QuestionItem data={item!} />
      <Text1 fontWeight={FontWeight.bold} className={styles["title"]}>
        {strings.answers}
      </Text1>
      {item?.answers?.map((ans) => (
        <AnswerItem key={ans.id} data={ans} questionId={item.id} />
      ))}
      {item?.answers?.length === 0 && (
        <Text2
          className={clsx(styles["no-answer"], textStyles["gray-dark-text"])}
        >
          {strings.noAnswer}
        </Text2>
      )}
      <Text1 fontWeight={FontWeight.bold}>{strings.submitAnswer}</Text1>
      <Text4 className={styles["description"]}>{strings.writeYourAnswer}</Text4>
      <TextInput
        multiline
        placeholder={strings.answerPlaceholder}
        onChange={handleChange}
      />
      {hasError && (
        <Text4 className={textStyles["error-text"]}>
          {strings.answerError}
        </Text4>
      )}
      <Button className={styles["send-button"]} onClick={submitAnswer}>
        {strings.sendAnswer}
      </Button>
    </>
  );
};
