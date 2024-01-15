import { configureStore } from "@reduxjs/toolkit";
import { termsApi } from "./api";

export const store = configureStore({
    reducer: {
        [termsApi.reducerPath]: termsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(termsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
