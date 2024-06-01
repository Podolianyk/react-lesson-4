import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from 'reduxTodo/todosSlice';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const hendleSubmit = (e) => {
    e.preventDefault()
    const value = {
      id: nanoid(),
      text: e.target.search.value,
    }
    dispatch(addTodo(value));
  }
  const dispatch = useDispatch();
  return (
    <form className={style.form} onSubmit={hendleSubmit}>
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
