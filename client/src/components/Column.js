import React, { Component } from 'react';
import '../css/Column.css';
// import Rushee from './Rushee';

class Column extends Component {
  getNames(rushees) {
    let names = [];
    for (let i = 0; i < rushees.length; i++) {
      names.push(rushees[i].name);
    }
    return names;
  }

  render() {
    let names = this.getNames(this.props.rushees);
    let namesArr = names.map(name => {
      return (<div key={name} className="rushee">{name}</div>);
    });
    return (
      <div className="column">
        <div className="header">
          <strong>{this.props.status}</strong>
        </div>
        <div className="rushees">
          {namesArr}
        </div>
      </div>
    );
  }

}

export default Column;
