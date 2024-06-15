import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selecTodos, selectCurrentToDo } from 'reduxTodo/todosSlice';

export const App = () => {
  const todos = useSelector(selecTodos);
  const currentToDo = useSelector(selectCurrentToDo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!currentToDo ? <Form /> : <EditForm />}

          <Filter />
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
