import React, { Component } from 'react'

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      Guests: 2
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    // console.log(e)

    this.setState({
      [name]: value

    })
  }
  render() {
    return (

      <form>
        <label>
          CheckBox:
            <input
            name="isGoing"
            type="Checkbox"
            checked={this.state.isGoing}
            onChange={this.handleChange} />
        </label>

        <br />
        <label>
          <input
            name="Guests"
            type="number"
            value={this.state.Guests}
            onChange={this.handleChange} />

        </label>
      </form>



    )
  }
}

