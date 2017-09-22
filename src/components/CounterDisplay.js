import React, { Component } from 'react';

export default class CounterDisplay extends Component {
  render() {
    const {count} = this.props;
    return (
      <div>
        {count}
      </div>
    );
  }
}
