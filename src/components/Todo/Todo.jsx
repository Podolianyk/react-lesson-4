import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { setCurrentToDo } from 'reduxTodo/todosSlice';
import { useDispatch } from 'react-redux';
import { useDeleteTodoMutation } from 'reduxTodo/todosApi';

export const Todo = ({ todo: { text, id }, index }) => {
  const dispatch = useDispatch();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleEditButton = () => {
    dispatch(setCurrentToDo({ id, text }));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          {index + 1}
        </Text>

        <Text>{text}</Text>

        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>

        <button
          className={style.editButton}
          type="button"
          onClick={handleEditButton}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
