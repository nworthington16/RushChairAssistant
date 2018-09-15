import React, { Component } from 'react';
import '../css/Status.css';
import Column from './Column'
// import Rushee from './Rushee';

class Status extends Component {

  static defaultProps = {
    categories: [
        "Pledge",
        "Bid holding",
        "Bid called",
        "Get to bid",
        "Get to know",
        "Dumpster"
    ]
  };

  getRusheesByStatus(status) {
    let rushees = this.props.rushees;
    let filteredRushees = rushees.filter(rushee => rushee.status === status);
    return filteredRushees;
  }

  render() {
    let statuses = this.props.categories.map(status => {
      return (<Column
                key={status}
                status={status}
                rushees={this.getRusheesByStatus(status)} />);
    });
    return (
      <div className="statuses">
        {statuses}
      </div>
    )
  }
}

export default Status;
