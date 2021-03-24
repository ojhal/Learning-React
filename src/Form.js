import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: true

    }
  }
  handleChange = (e) => {
    // const key = e.target.name;
    // const val = e.target.value;
    // this.setState({
    //   [key]: val
    // });

    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      // show: !this.state.show
    })
  }


  handleSubmit = (e) => {

    // alert(this.state.value)
    console.log(e.target)
    e.preventDefault()
    // alert("You are submitting " + this.state.value);


  }




  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <h3 className='form'>Application For Travel Document Fee</h3>
          <p>Provide the following information as it appears on your Green Card.</p>


          <p className='a'> First Name:</p>
          <input
            name="username"
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
            name="number"
            text="text"
            placeholder="Enter App No"
            onChange={this.handleChange}
          />

          <p>Date Of Birth:</p>
          <input
            name="date"
            text="text"
            placeholder="DD/MM/YYYY"
            onChange={this.handleChange}
          />


          <br />
          <p>{this.state.username}</p>
          <p>{this.state.name}</p>
          <p>{this.state.number}</p>
          <p>{this.state.date}</p>

          {/* <input type="submit"></input> */}


          <button className='btn' type="submit" onClick={this.handleClick}>Submit</button>
          {/* {this.state.show ?  :  */}

        </form>
      </div>

    )
  }
}


