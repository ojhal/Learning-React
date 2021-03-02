import React, { Component } from 'react';

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
    return (
      <div>
        <h2>Message :</h2>
        <p>{this.state.msg}</p>
        <button onClick={this.handleClick}>
          Click here to know contents!
        </button>
      </div>
    );
  }
}


export default List;