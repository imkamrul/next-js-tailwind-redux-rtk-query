"use client";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import counterSlice from "./slice/exampleSlice";
export const store = configureStore({
  reducer: {
    counts: counterSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
