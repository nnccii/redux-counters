import React, { Component } from 'react';
import ListContainer from "../containers/ListContainer";
import NavBarCommandContainer from "../containers/NavBarCommandContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBarCommandContainer />
        <ListContainer />
      </div>
    );
  }
}
