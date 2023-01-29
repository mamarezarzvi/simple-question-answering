import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";

type Answer = {
  id: number;
  username: string;
  description: string;
  date: string;
  goodVoteCount: number;
  badVoteCount: number;
};

type Question = {
  id: number;
  title: string;
  description: string;
  date: string;
  commentsCount: number;
  answers: Answer[] | undefined;
};

const InitialState: { questions: Question[]; loading: boolean } = {
  loading: false,
  questions: [],
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
      action: PayloadAction<{ answer: Omit<Answer, "id">; questionId: number }>
    ) {
      const id = state.questions[action.payload.questionId].answers?.length;
      if (!id) return;
      state.questions[action.payload.questionId].answers?.push({
        id,
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
          if (!draft.answers) return;

          if (isUseful) draft.answers[answerId].goodVoteCount++;
          else draft.answers[answerId].badVoteCount++;
        }
      );
    },
  },
});

export const QuestionsReducer = QuestionsSlice.reducer;
export const QuestionsActions = QuestionsSlice.actions;
