import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';

import { useAddTodoMutation } from 'reduxTodo/todosApi';

export const Form = () => {
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const value = {
      id: nanoid(),
      text: e.target.search.value,
    };
    addTodo(value).unwrap().then();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
