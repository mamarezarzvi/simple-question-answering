import styles from "./Questions.module.scss";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionsActions } from "../../questions/questions";
import { getQuestionsThunk } from "../../questions/questions.thunk";
import { RootState } from "../../store";
import { QuestionItem } from "./QuestionItem/QuestionItem";
import { QuestionDetail } from "./QuestionDetail/QuestionDetail";

export const Questions: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();
  const { questions, selectedQuestionId } = useSelector((state: RootState) => ({
    questions: state.questionsState.questions,
    selectedQuestionId: state.questionsState.selectedQuestionId,
  }));

  const clearSelectedQuestion = useCallback(() => {
    dispatch(QuestionsActions.clearSelected());
  }, []);

  useEffect(() => {
    dispatch(getQuestionsThunk());
    window.addEventListener("popstate", clearSelectedQuestion);
    return () => {
      window.removeEventListener("popstate", clearSelectedQuestion);
    };
  }, []);

  return (
    <div className={styles["questions-container"]}>
      {selectedQuestionId != null ? (
        <QuestionDetail />
      ) : (
        questions.map((item) => <QuestionItem key={item.id} data={item} />)
      )}
    </div>
  );
};
