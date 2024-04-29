import { createSlice } from "@reduxjs/toolkit";
import { ToastOptions } from "react-native-toast-notifications";

interface INotification extends ToastOptions {
  message: string | null;
}

const initialState: INotification = {
  message: null,
};

const notificationReducer = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action: { payload: INotification }) {
      Object.assign(state, action.payload);
    },
    resetNotification(state) {
      state.message = null;
    },
  },
});

export const { setNotification, resetNotification } =
  notificationReducer.actions;
export default notificationReducer.reducer;
