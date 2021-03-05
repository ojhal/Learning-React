import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className='container1'>
        <h3 className='form'>Application For Travel Document Fee</h3>
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

        <button className='btn'>Submit</button>



      </div>
    )
  }
}
