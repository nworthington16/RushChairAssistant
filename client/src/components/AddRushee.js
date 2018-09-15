import React, { Component } from 'react';
import '../css/AddRushee.css'
import axios from 'axios';

class AddRushee extends Component {
  constructor() {
    super();
    this.state = {
      newRushee:  {},
    };
  }

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

  addRushee(e) {
    if (this.refs.nameinput.value === '') {
      alert('Please enter a valid name');
    } else {
      this.setState({
        newRushee: {
          name: this.refs.nameinput.value,
          gtid: this.refs.gtidinput.value,
          status: this.refs.statusselect.value
        }
      }, () => {
        this.props.addRushee(this.state.newRushee);
        this.refs.nameinput.value = '';
        this.refs.gtidinput.value = '';
        console.log(this.state.newRushee);
        axios
          .post('/api/rushees', this.state.newRushee)
          .then(response => {console.log(response)})
          .catch(error => {console.log(error)});
      })
    }
    e.preventDefault();
  }

  render() {
    let statuses = this.props.categories.map(status => {
      return <option key={status} value={status}>{status}</option>
    });
    return (
      <div className="add-rushee">
        <form onSubmit={this.addRushee.bind(this)} >
          <input type="submit" className="add-button" value="+"/>
          <input type="text" className="name-input" ref="nameinput" placeholder="Name" />
          <input type="text" className="gtid-input" ref="gtidinput" placeholder="GTID" />
          <select className="status-select" ref="statusselect">
            {statuses}
          </select>
        </form>
      </div>
    )
  }

}

export default AddRushee;
