import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: builder => ({
    listTodos: builder.query<Todo[], number | void>({
      query: () => 'todos/',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useListTodosQuery } = todosApi;
