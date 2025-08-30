import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksApi = createApi({
    reducerPath:'booksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints:(builder)=>({
        getBooks:builder.query({
            query:()=>"api/books",
            })
        })
    })




export const { useGetBooksQuery } = booksApi;