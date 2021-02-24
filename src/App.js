import React, { Component } from "react";
import './App.css';
import puma from './puma.png';
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello word!",
      backgroundColor: "blue",
      color: "gray",
      count: 0
    }

  }

  handleClick = () => {
    this.setState({
      msg: "Hi!, i am Ojhal",
      backgroundColor: "red",
      color: "green",
      count: this.state.count + 1
    })
    console.log('clicked')
  }

  render() {
    return (
      <div className="container">
        <img src={puma} className="App-logo" alt="logo" />
        <h1>Message{this.state.count}</h1>
        <p style={{ color: this.state.color }}>{this.state.msg}</p>
        <input
          name="name"
          text="text"
          placeholder="Enter name"
        />
        <button style={{ backgroundColor: this.state.backgroundColor }} onClick={this.handleClick}>click  me</button>
      </div>
    );
  }

}



export default App;
