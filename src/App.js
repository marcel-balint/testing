import React, { Component } from "react";

import "./App.css";
import Card from "./components/Card";

class App extends Component {
  state = {
    total: 0
  };

  addHandler = () => {
    this.setState({
      total: this.state.total + 1
    });
  };

  clearHandler = () => {
    this.setState({
      total: 0
    });
  };

  render() {
    const styles = {
      textAlign: "center",
      marginTop: "10px",
      cursor: "pointer"
    };

    let show;

    if (this.state.total > 0) {
      show = (
        <div>
          <h1 style={styles}>Total: {this.state.total} </h1>
          <p style={styles} onClick={this.clearHandler}>
            Clear
          </p>
        </div>
      );
    } else {
      show = null;
    }

    return (
      <React.Fragment>
        {show}
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
