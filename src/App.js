import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button"
        >
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
