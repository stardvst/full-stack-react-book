import React, { useState } from 'react';

const DisplayText = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickShowMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMessage(text.length ? `welcome to react testing, ${text}` : '');
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
    </form>
  );
};

export default DisplayText;
