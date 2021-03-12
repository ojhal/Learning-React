import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value

    })
    console.log(e.target.value)
  }


  handleSubmit = (e) => {
    e.preventDefault()
    alert("You are submitting " + this.state.value);
    console.log(e.target.elements.username.value)

  }


  handleClick = (e) => {

    console.log('clicked')
  }
  render() {
    return (
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

        {/* <input type="submit" value="submit" /> */}
        <br />

        <button className='btn' type="submit" onClick={this.handleClick}>Submit</button>



      </form>
    )
  }
}

//   handleSubmit = (event) => {
//     event.preventDefault()
//     console.log(event.target[0].value)
//     // console.log(event.target.elements.username.value)
//     // console.log(event.target.username.value)
//     // console.log(this.inputNode.value)
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//         <input
//             type="text"
//             name="username"
//           // ref={node => (this.inputNode = node)}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
// }
