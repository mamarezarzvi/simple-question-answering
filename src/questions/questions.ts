import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

export type Answer = {
  id: number;
  username: string;
  description: string;
  date: string;
  goodVoteCount: number;
  isUserVotedGood?: boolean;
  badVoteCount: number;
  isUserVotedBad?: boolean;
};

export type Question = {
  id: number;
  title: string;
  description: string;
  date: string;
  answers: Answer[];
};

const InitialState: {
  questions: Question[];
  loading: boolean;
  selectedQuestionId: number | null;
} = {
  loading: false,
  questions: [],
  selectedQuestionId: null,
};

const QuestionsSlice = createSlice({
  name: "Questions",
  initialState: InitialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions.push(...action.payload);
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    addQuestion(state, action: PayloadAction<Omit<Question, "id">>) {
      const id = state.questions.length;
      state.questions.push({ id, ...action.payload });
    },
    addAnswer(
      state,
      action: PayloadAction<{
        answer: Omit<Answer, "id" | "date" | "goodVoteCount" | "badVoteCount">;
        questionId: number;
      }>
    ) {
      const id = state.questions[action.payload.questionId].answers.length;
      console.log("add", id);
      state.questions[action.payload.questionId].answers.push({
        id,
        date: Date.now().toString(),
        goodVoteCount: 0,
        badVoteCount: 0,
        ...action.payload.answer,
      });
    },
    setAnswerUsefulness(
      state,
      action: PayloadAction<{
        questionId: number;
        answerId: number;
        isUseful: boolean;
      }>
    ) {
      const { questionId, answerId, isUseful } = action.payload;
      state.questions[questionId] = produce(
        state.questions[questionId],
        (draft) => {
          const answer = draft.answers[answerId];
          if (isUseful) {
            if (!answer.isUserVotedGood) {
              answer.goodVoteCount++;
              answer.isUserVotedGood = true;
            } else {
              answer.goodVoteCount--;
              answer.isUserVotedGood = false;
            }
          } else {
            if (!answer.isUserVotedBad) {
              answer.badVoteCount++;
              answer.isUserVotedBad = true;
            } else {
              answer.badVoteCount--;
              answer.isUserVotedBad = false;
            }
          }
        }
      );
    },
    setQuestionSelected(state, action: PayloadAction<number>) {
      console.log(action.payload);
      state.selectedQuestionId = action.payload;
      window.history.pushState({}, "");
    },
    clearSelected(state) {
      state.selectedQuestionId = null;
    },
  },
});

export const QuestionsReducer = QuestionsSlice.reducer;
export const QuestionsActions = QuestionsSlice.actions;
