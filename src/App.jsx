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
import { useGetTodosQuery } from 'reduxTodo/todosApi';
import { selectCurrentToDo } from 'reduxTodo/todosSlice';

export const App = () => {
  const currentToDo = useSelector(selectCurrentToDo);
  const { data: todos = [] } = useGetTodosQuery();

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
