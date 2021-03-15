import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    this.setState({
      [key]: val
    });
    console.log(e.target.value)
  }


  handleSubmit = (e) => {
    // alert(this.state.value)
    console.log(e)
    e.preventDefault()
    // alert("You are submitting " + this.state.value);


  }


  handleClick = (e) => {
    console.log('clicked')
  }



  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>

          <h3 className='form'>Application For Travel Document Fee</h3>
          <p>Provide the following information as it appears on your Green Card.</p>


          <p className='a'> First Name:</p>
          <input
            name="name"
            text="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />



          <p>Last Name:</p>
          <input
            name="name"
            text="text"
            placeholder="Last Name"
            onChange={this.handleChange}
          />

          <p>Application No:</p>
          <input
            name="name"
            text="text"
            placeholder="Enter App No"
            onChange={this.handleChange}
          />

          <p>Date Of Birth:</p>
          <input
            name="name"
            text="text"
            placeholder="DD/MM/YYYY"
            onChange={this.handleChange}
          />

          {/* <input type="submit" value="submit" /> */}
          <br />

          <button className='btn' type="submit" onClick={this.handleClick}>Submit</button>


        </form>
      </div>

    )
  }
}


