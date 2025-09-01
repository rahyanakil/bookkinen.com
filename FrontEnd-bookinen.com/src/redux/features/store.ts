// import {configureStore} from "@reduxjs/toolkit"
// import { booksApi } from "../api/CreateBookApi";

// export const store =configureStore({
//     reducer:{
//         // booksApi:booksApi.reducer,
//         [booksApi.reducerPath]:booksApi.reducer,
//     },
//     middleware:(getDefaultMiddleware)=>{
//         return getDefaultMiddleware().concat(booksApi.middleware)
//     }
// });

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch =typeof store.dispatch;
// export type AppStore =typeof store;

// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "../api/CreateBookApi";
import { borrowApi } from "../api/borrowApi"; // ✅ import borrowApi

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer, // ✅ add borrowApi reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(booksApi.middleware)
      .concat(borrowApi.middleware); // ✅ add borrowApi middleware
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
