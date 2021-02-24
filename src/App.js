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

  handleClick = () => {
    this.setState({
      msg: "Hi!, i am Ojhal"
    })
    console.log('clicked', this)
  }

  render() {
    return (
      <div className="container">
        <h1>Message</h1>
        <p style={{ color: "red" }}>{this.state.msg}</p>
        <button onClick={this.handleClick}>click  me</button>
      </div>
    );
  }

}



export default App;
