import { createSelector, createSlice } from '@reduxjs/toolkit';
import { todosApi } from './todosApi';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: { filter: '', currentTodo: null },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setCurrentToDo: (state, { payload }) => {
      state.currentTodo = payload;
    },
  },
});

export const selectFilter = state => state.todos.filter;
export const selectCurrentToDo = state => state.todos.currentTodo;
export const selectFilteredTodos = createSelector(
  [todosApi.endpoints.getTodos.select(), selectFilter],
  (todos, filter) =>
    todos.data?.filter(
      ({ text }) => text.toLowerCase().includes(filter.toLowerCase()) ?? [],
    ),
);

export const { changeFilter, setCurrentToDo } = todosSlice.actions;
