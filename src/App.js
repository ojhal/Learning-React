import React, { Component } from "react";
import './App.css';
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
    console.log('clicked', this)
  }

  render() {
    return (
      <div className="container">

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
