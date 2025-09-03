
// import { API_URL } from "@/config";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const borrowApi = createApi({
//   reducerPath: "borrowApi",
//   baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
//   tagTypes: ["Borrows"],
//   endpoints: (builder) => ({
//     // Mutation to borrow a book
//     borrowBook: builder.mutation<any, { bookId: string; quantity: number; dueDate: string }>({
//       query: ({ bookId, quantity, dueDate }) => ({
//         url: "/api/borrow",
//         method: "POST",
//         body: {
//           book: bookId, // backend expects "book"
//           quantity,
//           dueDate,
//         },
//       }),
//       invalidatesTags: ["Borrows"],
//     }),

//     // Query to fetch borrow summary
//     getBorrowSummary: builder.query<any[], void>({
//       query: () => "/api/borrow",
//       transformResponse: (response: any) => {
//         // ✅ Normalize response so it's always an array
//         if (Array.isArray(response)) return response;
//         if (Array.isArray(response?.data)) return response.data;
//         if (Array.isArray(response?.summary)) return response.summary;
//         return [];
//       },
//       providesTags: ["Borrows"],
//     }),
//   }),
// });

// export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
// src/redux/api/borrowApi.ts
import { API_URL } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  tagTypes: ["Borrows", "books"], // ✅ added "books"
  endpoints: (builder) => ({
    // Mutation to borrow a book
    borrowBook: builder.mutation<any, { bookId: string; quantity: number; dueDate: string }>({
      query: ({ bookId, quantity, dueDate }) => ({
        url: "/api/borrow",
        method: "POST",
        body: {
          book: bookId, // backend expects "book"
          quantity,
          dueDate,
        },
      }),
      invalidatesTags: ["Borrows", "books"], // ✅ refresh both borrows & books
    }),

    // Query to fetch borrow summary
    getBorrowSummary: builder.query<any[], void>({
      query: () => "/api/borrow",
      transformResponse: (response: any) => {
        // ✅ Normalize response so it's always an array
        if (Array.isArray(response)) return response;
        if (Array.isArray(response?.data)) return response.data;
        if (Array.isArray(response?.summary)) return response.summary;
        return [];
      },
      providesTags: ["Borrows"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
