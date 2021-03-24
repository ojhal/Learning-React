import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const App = () => {
      return (
        <div>
          <h1> Welcome our new company </h1>
          <div className="Container">
            <div className="Row">
              <div className="Col-sm"><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card></div>
              <div className="Col-sm"><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card></div>
              <div className="Col-sm"><Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                  <button variant="primary">Go somewhere</button>
                </Card.Body>
              </Card></div>

            </div>
          </div>

        </div>
      );
    }
  }

