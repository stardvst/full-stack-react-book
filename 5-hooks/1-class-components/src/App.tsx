import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      enteredName: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string };
  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value,
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
          <Greeting name={this.state.enteredName} />
        </header>
      </div>
    );
  }
}

export default App;
