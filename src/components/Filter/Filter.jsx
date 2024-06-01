import { changeFilter } from 'reduxTodo/todosSlice';
import style from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  }
  

  return <input className={style.input} placeholder="Find it" name="filter" onChange={handleChange}/>;
};
