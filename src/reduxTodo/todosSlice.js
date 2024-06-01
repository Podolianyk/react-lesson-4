import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], filter: '' },
  reducers: {
    addTodo: (state, { payload }) => {
      state.items.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      const indexEl = state.items.findIndex(todo => todo.id === payload);
      state.items.splice(indexEl, 1);
    },
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export default todosSlice.reducer;

export function selecTodos(state) {
  return state.todos.items;
}
export function selectFilter(state) {
  return state.todos.filter;
}

export const { addTodo, deleteTodo, changeFilter } = todosSlice.actions;
