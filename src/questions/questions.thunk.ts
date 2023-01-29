import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { QuestionsActions } from "./questions";

export const getQuestionsThunk =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(QuestionsActions.setLoading(true));
    try {
      const _res = await fetch("http://localhost:4000/questions");
      const res = await _res.json();
      dispatch(QuestionsActions.setQuestions(res));
    } catch (error) {
      console.log("request failed!");
      dispatch(QuestionsActions.setLoading(false));
    }
  };
