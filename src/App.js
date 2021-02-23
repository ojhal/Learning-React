import React, { Component } from "react";
import './App.css';
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello word!"
    }

  }
  render() {
    return (
      <div>
        <h3 style={{ color: "red" }}>{this.state.msg}</h3>
      </div>
    )
  }

}



export default App;
