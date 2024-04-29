import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import notificationReducer from "./notification/notificationReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  notifications: notificationReducer,
  auth: authReducer,
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
