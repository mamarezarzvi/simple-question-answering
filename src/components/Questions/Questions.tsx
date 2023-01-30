import styles from "./Questions.module.scss";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionsActions } from "../../questions/questions";
import { getQuestionsThunk } from "../../questions/questions.thunk";
import { RootState } from "../../store";
import { QuestionItem } from "./QuestionItem/QuestionItem";

export const Questions: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questionsState.questions
  );

  useEffect(() => {
    dispatch(getQuestionsThunk());
  }, []);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div className={styles["questions-container"]}>
      {questions.map((item) => (
        <QuestionItem key={item.id} data={item} />
      ))}
    </div>
  );
};
