import React, { useReducer } from 'react';
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting enteredName={enteredName} message={message} greetingDispatcher={dispatch} />
      </header>
    </div>
  );
}

export default App;
