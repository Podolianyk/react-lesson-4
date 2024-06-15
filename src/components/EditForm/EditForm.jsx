import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import {
  editToDo,
  selectCurrentToDo,
  setCurrentToDo,
} from 'reduxTodo/todosSlice';
import { useDispatch, useSelector } from 'react-redux';

export const EditForm = () => {
  const dispatch = useDispatch();
  const currentToDo = useSelector(selectCurrentToDo);

  const handleCancel = () => {
    dispatch(setCurrentToDo(null));
  };

  const handleEdit = e => {
    e.preventDefault();
    const newValue = e.target.text.value;
    const updatedToDo = { ...currentToDo, text: newValue };
    dispatch(editToDo(updatedToDo));
  };

  return (
    <form className={style.form} onSubmit={handleEdit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentToDo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
