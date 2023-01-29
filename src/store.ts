import { configureStore } from "@reduxjs/toolkit";
import { QuestionsReducer } from "./questions/questions";

export const store = configureStore({
  reducer: { questionsState: QuestionsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
