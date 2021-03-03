import React, { Component } from 'react';
import './App.css';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: ["React Course", "react hooks"]

    }

  }

  handleClick = () => {
    this.setState({
      msg: "course"
    })
    console.log('clicked')
  }
  render() {
    const arr = [10, 20, 30, 40];
    const newArr = arr.map(num => {
      return <li>{num * 2}</li>
    })
    console.log('oldArray =', arr)
    console.log('newArray =', newArr)
    return (
      <div>
        <h2>Message :</h2>

        <p>{this.state.msg}</p>
        <ul className='a'>
          {newArr}

        </ul>

        <button onClick={this.handleClick}>
          Click here to know contents!
        </button>
      </div>
    );
  }
}


export default List;