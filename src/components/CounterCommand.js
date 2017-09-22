import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const {increment, decrement, reset, disableReset} = this.props;
    return (
      <div>
        <button onClick={increment}>UP</button>
        <button onClick={decrement}>DOWN</button>
        <button onClick={reset} disabled={disableReset}>RESET</button>
      </div>
    );
  }
}
