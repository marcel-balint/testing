import React, { Component } from "react";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Card add={this.addHandler} text="First" />
          <Card add={this.addHandler} text="Second" />
          <Card add={this.addHandler} text="Third" />
          <Card add={this.addHandler} text="Fourth" />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
