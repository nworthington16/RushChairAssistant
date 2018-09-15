import React, { Component } from 'react';
import '../css/Dashboard.css'
import ViewSelect from './ViewSelect'
import List from './List'
import Status from './Status'
import AddRushee from './AddRushee'

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: true,
      status: false
    };
  }

  render() {
    if (this.state.list) {
      return (
        <div className="dashboard">
          <div className="back-button" onClick={this.sendBack.bind(this)}>
            Back
          </div>
          <div className="title">{this.props.event}</div>
          <ViewSelect
            listSelect={this.listSelect.bind(this)}
            statusSelect={this.statusSelect.bind(this)}
            state={this.state} />
          <List
            rushees={this.props.rushees}
            deleteRushee={this.deleteRushee.bind(this)} />
          <AddRushee
            addRushee={this.addRushee.bind(this)} />
        </div>
      )
    } else {
      return (
        <div className="dashboard">
          <div className="back-button" onClick={this.sendBack.bind(this)}>
            Back
          </div>
          <div className="title">{this.props.event}</div>
          <ViewSelect
            listSelect={this.listSelect.bind(this)}
            statusSelect={this.statusSelect.bind(this)}
            state={this.state} />
          <Status
            rushees={this.props.rushees} />
          <AddRushee
            addRushee={this.addRushee.bind(this)} />
        </div>
      )
    }
  }

  addRushee(newRushee) {
    this.props.addRushee(newRushee);
  }

  deleteRushee(gtid) {
    this.props.deleteRushee(gtid);
  }

  listSelect() {
    let state = this.state;
    state.list = true;
    state.status = false;
    this.setState(state);
  }

  statusSelect() {
    let state = this.state;
    state.list = false;
    state.status = true;
    this.setState(state);
  }

  sendBack() {
    this.props.sendBack();
  }
}

export default Dashboard;
