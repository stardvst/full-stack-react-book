import { FC, useState, useEffect } from 'react';

interface GreetingProps {
  name?: string;
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (name) {
      setMessage(`hello from ${name}`);
    }
  }, [name]);

  if (!name) {
    return <div>no name given</div>;
  }

  return <div>{message}</div>;
};

export default Greeting;
