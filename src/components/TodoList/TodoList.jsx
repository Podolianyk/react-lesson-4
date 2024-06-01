import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selecTodos, selectFilter } from 'reduxTodo/todosSlice';

export const TodoList = () => {
  const todos = useSelector(selecTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      {filteredTodos.length > 0 ? (
        <Grid>
          {filteredTodos.map((todo, index) => {
            return <Todo key={todo.id} todo={todo} index={index} />;
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
      ;
    </>
  );
};
