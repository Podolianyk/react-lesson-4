import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://637785ab81a568fc2518138f.mockapi.io/api',
  }),

  tagTypes: ['Todo'],

  endpoints: builder => {
    return {
      getTodos: builder.query({
        query: () => ({
          url: '/todos',
          method: 'GET',
        }),
        providesTags: ['Todo'],
      }),
      addTodo: builder.mutation({
        query: payload => ({
          url: '/todos',
          method: 'POST',
          body: payload,
        }),
        // invalidatesTags: ['Todo'],
        // optimistic updates example
        async onQueryStarted(payload, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
            todosApi.util.updateQueryData('getTodos', undefined, draft => {
              draft.push(payload);
            }),
          );
          try {
            await queryFulfilled;
          } catch {
            patchResult.undo();
          }
        },
      }),
      editTodo: builder.mutation({
        query: ({ id, ...body }) => ({
          url: `/todos/${id}`,
          method: 'PUT',
          body,
        }),
        // invalidatesTags: ['Todo'],
        // pessimistic updates example
        async onQueryStarted(payload, { dispatch }) {
          try {
            // const { data: updatedPost } = await queryFulfilled;

            dispatch(
              todosApi.util.updateQueryData('getTodos', undefined, draft => {
                const index = draft.findIndex(item => item.id === payload.id);
                draft.splice(index, 1, payload);
              }),
            );
          } catch {
            //
          }
        },
      }),
      deleteTodo: builder.mutation({
        query: id => ({
          url: `/todos/${id}`,
          method: 'DELETE',
        }),
        // automatic refresh data
        invalidatesTags: ['Todo'],
      }),
    };
  },
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useEditTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
