import React from 'react';

interface GreetingProps {
  enteredName: string;
  message: string;
  greetingDispatcher: React.Dispatch<{ type: string; payload: string }>;
}

export default function Greeting(props: GreetingProps) {
  console.log('rendering greeting');

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.greetingDispatcher({ type: 'enteredName', payload: e.target.value });
    props.greetingDispatcher({ type: 'message', payload: e.target.value });
  };

  return (
    <div>
      <input type="text" value={props.enteredName} onChange={onChangeName} />
      <div>{props.message}</div>
    </div>
  );
}
