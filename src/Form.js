import React, { Component } from 'react'

export default class File extends Component {
  render() {
    return (
      <div>
        <h1 className='form'>Fee Form</h1>
        <p>Name:</p>
        <input
          name="name"
          text="text"
          placeholder="Enter name"
        />

        <p>Application No:</p>
        <input
          name="name"
          text="text"
          placeholder="Enter App No"
        />

        <p>Father's Name:</p>
        <input
          name="name"
          text="text"
          placeholder="Enter Father's Name"
        />



      </div>
    )
  }
}
