import { configureStore } from "@reduxjs/toolkit";
import { ModalReducer } from "./modals/modals";
import { QuestionsReducer } from "./questions/questions";

export const store = configureStore({
  reducer: { questionsState: QuestionsReducer, modalState: ModalReducer },
});

export type RootState = ReturnType<typeof store.getState>;
