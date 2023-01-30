import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
};
const InitialState: ModalState = { isOpen: false };

const ModalSlice = createSlice({
  name: "Modal",
  initialState: InitialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const ModalActions = ModalSlice.actions;
export const ModalReducer = ModalSlice.reducer;
