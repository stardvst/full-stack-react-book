import React, { FC, useState } from 'react';
import UserTodos from './UserTodos';

interface DisplayTextProps {
  getUserFullName: (username: string) => Promise<string>;
}

const DisplayText: FC<DisplayTextProps> = ({ getUserFullName }) => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');
  const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickShowMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMessage(text.length ? `welcome to react testing, ${await getUserFullName(text)}` : '');
    setTodoControl(<UserTodos username={text} />);
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
      {todoControl}
    </form>
  );
};

export default DisplayText;
