// src/redux/api/CreateBookApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "@/config";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  tagTypes: ["books","borrows"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/api/books",
      transformResponse: (response: { success: boolean; data: any[] }) =>
        response.data,
      providesTags: ["books","borrows"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/api/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
