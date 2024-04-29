import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store";
import { resetNotification } from "./notification/notificationReducer";

const initialState = {};

const resetAppStateReducer = createSlice({
  name: "resetAppState",
  initialState,
  reducers: {
    resetAppState(state) {
      const dispatch = store.dispatch;
      dispatch(resetNotification());
    },
  },
});

export const { resetAppState } = resetAppStateReducer.actions;
export default resetAppStateReducer.reducer;
