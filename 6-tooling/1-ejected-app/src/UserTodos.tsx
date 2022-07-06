import { FC, useEffect, useState } from 'react';

interface UserTodosProps {
  username: string;
}

const UserTodos: FC<UserTodosProps> = ({ username }) => {
  const [todos, setTodos] = useState<Array<JSX.Element>>();

  useEffect(() => {
    if (username) {
      setUserTodos();
    }
  }, [username]);

  const setUserTodos = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userResponse) {
      const users = await userResponse.json();
      const userByName = users.find((user: any) => user.username.toLowerCase() === username);
      console.log('user by username:', userByName);

      const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (userByName && todosResponse) {
        const todos = await todosResponse.json();
        const userTodos = todos.filter((todo: any) => todo.userId === userByName.id);
        console.log('user todos:', userTodos);

        const todoList = userTodos.map((todo: any) => <li key={todo.id}>{todo.title}</li>);
        setTodos(todoList);
      }
    }
  };

  return <ul style={{ marginTop: '1rem', listStyleType: 'none' }}>{todos}</ul>;
};

export default UserTodos;
