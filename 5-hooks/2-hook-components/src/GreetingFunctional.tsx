interface GreetingProps {
  message: string;
}

export default function Greeting(props: GreetingProps) {
  console.log('rendering greeting');
  return <div>{props.message}</div>;
}
