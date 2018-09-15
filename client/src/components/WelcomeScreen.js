import React, { Component } from 'react';
import '../css/WelcomeScreen.css'

class WelcomeScreen extends Component {

  render() {
    return (
      <div>
        <div className="welcome-screen">
          <div className="title">
            Rush Chair Assistant
          </div>
          <div className="button" onClick={this.createEvent.bind(this)} >
            Formal Rush Fall 2018
          </div>
        </div>
      </div>
    )
  }

  createEvent() {
    this.props.createEvent();
  }
}

export default WelcomeScreen;
