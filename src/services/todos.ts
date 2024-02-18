import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Todo {
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
    getTodos: builder.query<Todo[], number | void>({
      query: () => '/todos',
    }),
    updateTodo: builder.mutation<Todo, Partial<Todo>>({
      query: ({ id, ...body }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body,
      }),
      async onQueryStarted({ id, ...body }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todosApi.util.updateQueryData('getTodos', undefined, draftTodos =>
            draftTodos.map(todo =>
              todo.id === id ? { ...todo, ...body } : todo,
            ),
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deleteTodo: builder.mutation<void, number>({
      query: id => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const deleteResult = dispatch(
          todosApi.util.updateQueryData('getTodos', undefined, draftTodos =>
            draftTodos.filter(todo => todo.id !== id),
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          deleteResult.undo();
        }
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
