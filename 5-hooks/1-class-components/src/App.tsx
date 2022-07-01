import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFunctional';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      enteredName: '',
      message: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string; message: string };

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value,
      message: !e.target.value ? '' : `hello from ${e.target.value}`,
    });
  }

  render() {
    console.log('rendering app');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="text" value={this.state.enteredName} onChange={this.onChangeName} />
          {/* <Greeting />
          <Greeting name="alan walker" /> */}
          <Greeting message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
