import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./state/auth";
import GetTrending from "./state/getTrending";
import createEventReducer from "./state/CreateE/createEvent";

export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        GetTrending: GetTrending,
        createEventReducer: createEventReducer
      },
})