import React, { Component } from 'react';
// import './App.css';

class List extends Component {


  constructor(props) {
    super(props);
    this.state = {
      msg: 'React Course',
      show: false
    }


  }


  handleClick = () => {
    this.setState({
      show: !this.state.show

    })

  }
  render() {
    const content = ['React js', 'React Router', 'React Native', 'React Jsx']
    const contentItem = content.map((contents) =>
      <li>{contents}</li>
    );

    // const arr = [10, 20, 30, 40];
    // const newArr = arr.map(num => {
    //   return <li>{num * 2}</li>
    // })
    // console.log('oldArray =', arr)
    // console.log('newArray =', newArr)
    return (


      <div>

        <h2>Message: {this.props.item}</h2>

        < button onClick={this.handleClick} >
          Click here to know contents!
          </button >
        <h3>{this.state.msg}</h3>




        {this.state.show ? <ul>{contentItem}</ul> : null}


        {/* <ul className='a'>
          {arr.map(num => {
            return <li>{num * 2}</li>
          })}
          {/* {newArr} */}

        {/* </ul> * /} */}
        {/* <ul className='a'>


        </ul> */}


        {/* < button onClick={this.handleClick} >
          Click here to know contents!
        </button > */}
      </div >
    );
  }
}


export default List;