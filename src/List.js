import React, { Component } from 'react';
// import './App.css';

class List extends Component {
  static defaultProps = {
    userContent: ['React state', 'React Js', 'React Router']
  }

  constructor(props) {
    super(props);
    this.state = {
      msg: 'React Course',
      content: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  usersArray() {
    return (
      <ul className='a'>
        {this.props.userContent.map(content => (
          <li>{content}</li>
        ))}
      </ul>
    )

  }


  handleClick() {
    this.setState({
      msg: 'Course Content :',
      content: this.usersArray()

    })
    console.log('clicked')
  }
  render() {
    // const arr = [10, 20, 30, 40];
    // const newArr = arr.map(num => {
    //   return <li>{num * 2}</li>
    // })
    // console.log('oldArray =', arr)
    // console.log('newArray =', newArr)
    return (
      <div>
        <h2>Message :</h2>
        <h3>{this.state.msg}</h3>



        <p>{this.state.content}</p>


        {/* <ul className='a'>
          {arr.map(num => {
            return <li>{num * 2}</li>
          })}
          {/* {newArr} */}

        {/* </ul> * /} */}
        {/* <ul className='a'>


        </ul> */}


        < button onClick={this.handleClick} >
          Click here to know contents!
        </button >
      </div >
    );
  }
}


export default List;