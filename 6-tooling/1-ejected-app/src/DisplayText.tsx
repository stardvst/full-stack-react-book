import React, { FC, useState } from 'react';

interface DisplayTextProps {
  getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [todos, setTodos] = useState<Array<JSX.Element>>();

  const setUserTodos = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userResponse.ok) {
      const users = await userResponse.json();
      const userByName = users.find((user: any) => user.username.toLowerCase() === text);
      console.log('user by username:', userByName);
      //return userByName.name;

      const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (todosResponse.ok) {
        const todos = await todosResponse.json();
        const userTodos = todos.filter((todo: any) => todo.userId === userByName.id);
        console.log('user todos:', userTodos);

        const todoList = userTodos.map((todo: any) => <li key={todo.id}>{todo.title}</li>);
        setTodos(todoList);
      }
    }
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickShowMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMessage(text.length ? `welcome to react testing, ${await getUserFullName(text)}` : '');
    setUserTodos();
  };

  return (
    <form>
      <div>
        <label htmlFor="name">enter your name:</label>
        <input type="text" value={text} onChange={onChangeText} data-testid="name-input" />
        <button data-testid="name-submit" onClick={onClickShowMessage}>
          show message
        </button>
      </div>
      <div>
        <p data-testid="final-msg">{message}</p>
      </div>
      <div>this is just a test entry</div>
      <ul style={{ marginTop: '1rem', listStyleType: 'none' }}>{todos}</ul>
    </form>
  );
};

export default DisplayText;
