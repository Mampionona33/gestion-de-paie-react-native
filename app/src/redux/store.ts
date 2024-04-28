import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import notificationReducer from "./notification/notificationReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
});

const configStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactive la vérification de sérialisation obsolète
    }),
});

export const store = configStore;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
