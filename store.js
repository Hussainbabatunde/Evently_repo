import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state/auth";
import GetTrending from "./state/getTrending";

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        GetTrending: GetTrending
      },
})