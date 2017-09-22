import React, { Component } from 'react';

export default class NavBarCommand extends Component {
  render() {
    const {addCounter, removeCounter, resetCounters, sum, disableReset, emptyCounters} = this.props;
    return (
      <div>
        <button onClick={addCounter}>Add Counter</button>
        <button onClick={removeCounter} disabled={emptyCounters}>Remove Counter</button>
        <button onClick={resetCounters} disabled={disableReset}>Reset all counters</button>
        <br />sum : {sum}
      </div>
    );
  }
}
