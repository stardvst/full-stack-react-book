import React from 'react';

interface GreetingProps {
  name?: string;
}

interface GreetingState {
  message: string;
}

class Greeting extends React.Component<GreetingProps> {
  state: GreetingState;

  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      message: Greeting.getNewMessage(props.name),
    };
  }

  static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
    console.log(props, state);

    if (props.name /*&& props.name !== state.message*/) {
      const newState = { ...state };
      newState.message = Greeting.getNewMessage(props.name);
      return newState;
    }

    return state;
  }

  static getNewMessage(name: string = '') {
    return `hello from ${name}`;
  }

  render() {
    console.log('rendering greeting');

    if (!this.props.name) {
      return <div>no name given</div>;
    }
    return <div>{this.state.message}</div>;
  }
}

export default Greeting;
