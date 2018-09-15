import React, { Component } from 'react';
import '../css/List.css'
import Rushee from './Rushee'

class List extends Component {
  render() {
    let rushees;
    if (this.props.rushees) {
      rushees = this.props.rushees.map(rushee => {
        return (
          <Rushee
            key={rushee.gtid}
            rushee={rushee}
            deleteRushee={this.deleteRushee.bind(this)} />
        )
      });
    }

    return (
      <div className="rushee-list">
        {rushees}
      </div>
    )
  }

  deleteRushee(gtid) {
    this.props.deleteRushee(gtid);
  }

}

export default List;
