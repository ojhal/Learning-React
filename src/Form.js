import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
   super(props);
   this.state = {
    msg: "Hi!,there"
  }
}
  render() {
    return (
      <div>
       <p>{this.state.msg}</p>
        <h1>ojhal</h1>
      </div>
    )
  }
}

export default Form;
