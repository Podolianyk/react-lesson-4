import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], filter: '', currentTodo: null },
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
    setCurrentToDo: (state, { payload }) => {
      state.currentTodo = payload;
    },
    editToDo: (state, { payload }) => {
      const indexEl = state.items.findIndex(todo => todo.id === payload.id);
      state.items.splice(indexEl, 1, payload);
      state.currentTodo = null;
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
export function selectCurrentToDo(state) {
  return state.todos.currentTodo;
}

export const { addTodo, deleteTodo, changeFilter, setCurrentToDo, editToDo } =
  todosSlice.actions;
