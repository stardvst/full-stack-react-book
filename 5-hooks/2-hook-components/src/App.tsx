import React, { useCallback, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFunctional';

const reducer = (state: any, action: any) => {
  console.log('enteredNameReducer');

  switch (action.type) {
    case 'enteredName':
      if (state.enteredName === action.payload) {
        return state;
      }
      return { ...state, enteredName: action.payload };

    case 'message':
      return { ...state, message: action.payload.length ? `hello from ${action.payload}` : '' };

    default:
      throw new Error(`invalid action type ${action.type}`);
  }
};

const initialState = {
  enteredName: '',
  message: '',
};

function App() {
  const [{ enteredName, message }, dispatch] = useReducer(reducer, initialState);
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);

  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);

  const onWelcomeBtnClick = () => {
    setCountCallback();
  };

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  };

  console.log('rendering app');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting enteredName={enteredName} message={message} greetingDispatcher={dispatch} />

        <div style={{ marginTop: '10px' }}>
          <label htmlFor="count">enter a number and we'll increment it</label>
          <br />
          <input type="text" name="count" value={startCount} onChange={onChangeStartCount} style={{ width: '4rem' }} />
          <p>{count}</p>
          <button onClick={onWelcomeBtnClick}>increment count</button>
        </div>
      </header>
    </div>
  );
}

export default App;
