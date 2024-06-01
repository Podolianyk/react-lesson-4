import {
  Section,
  Container,
  Header,
  Text,
  Form,
  TodoList,
  Filter,
} from 'components';
import { useSelector } from 'react-redux';
import { selecTodos } from 'reduxTodo/todosSlice';

export const App = () => {
  const todos = useSelector(selecTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
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
