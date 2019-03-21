import React, { Component } from "react";
import Header from "./components/Header/Header";
import MainController from "./containers/Main";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainController />
      </React.Fragment>
    );
  }
}

export default App;
