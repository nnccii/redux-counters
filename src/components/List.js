import React, { Component } from 'react';
import CounterContainer from "../containers/CounterContainer";

export default class List extends Component {
  render() {
    const {counters} = this.props;
    return (
      <div>
        <ul>
          { counters.map((counter, index) => {
          return <li key={index}><CounterContainer index={index} /></li>
        }) }
        </ul>
      </div>
    );
  }
}
