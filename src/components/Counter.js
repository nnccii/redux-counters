import React, { Component } from 'react';
import CounterDisplay from "./CounterDisplay";
import CounterCommand from "./CounterCommand";

export default class Counter extends Component {
  render() {
    const {increment, decrement, reset, count} = this.props;
    return (
      <div>
        <CounterCommand increment={increment} decrement={decrement} reset={reset} disableReset={count === 0} />
        <CounterDisplay count={count}/>
      </div>
    );
  }
}
