import React, { Component } from "react";
import List from './List.js';
import CheckBox from './CheckBox';
import Form from './Form.js'
import './App.css';
import puma from './puma.png';
import Card from './Card.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello word!",
      backgroundColor: "blue",
      // color: "gray",
      count: 0,
      color: ""
    }

  }
  handleChange = (e) => {
    this.setState({
      color: e.target.value
    })
    console.log('changed')
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
    const content = ['React js', 'React Router', 'React Native', 'React Jsx', 'ojhal']
    return (
      <div className="container">
        <img src={puma} className="image" alt="logo" />

        <h1>Message{this.state.count}</h1>
        <p style={{ color: this.state.color }}>{this.state.msg}{this.handleChange}</p>
        <input
          name="name"
          text="text"
          placeholder="Enter name"
          onChange={this.handleChange}
        />
        <button className="click" style={{ backgroundColor: this.state.backgroundColor }} onClick={this.handleClick}>click  me</button>
        <List list={content} />

        <Form />
        <CheckBox />
        <Card />



      </div>
    );
  }

}



export default App;


