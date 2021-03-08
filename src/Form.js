import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  handleClick = () => {
    console.log('clicked')
  }
  render() {
    return (
      <div className='container1'>
        <h3 className='form'>Application For Travel Document Fee</h3>
        <p>Provide the following information as it appears on your Green Card.</p>


        <p className='a'> First Name:</p>
        <input
          name="name"
          text="text"
          placeholder="First Name"
        />

        <p>Last Name:</p>
        <input
          name="name"
          text="text"
          placeholder="Last Name"
        />

        <p>Application No:</p>
        <input
          name="name"
          text="text"
          placeholder="Enter App No"
        />

        <p>Date Of Birth:</p>
        <input
          name="name"
          text="text"
          placeholder="DD/MM/YYYY"
        />
        <br />

        <button className='btn' onClick={this.handleClick}>Submit</button>



      </div>
    )
  }
}
