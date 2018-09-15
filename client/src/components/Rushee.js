import React, { Component } from 'react';
import '../css/Rushee.css'

class Rushee extends Component {

  render() {
    return (
      <div className="rushee">
        <a href="#" onClick={this.handleClick.bind(this)} >x</a>  {this.props.rushee.name} [ {this.props.rushee.gtid} ] - <strong>{this.props.rushee.status}</strong>
      </div>
    )
  }

  handleClick() {
    this.props.deleteRushee(this.props.rushee.gtid);
  }

}

export default Rushee;
