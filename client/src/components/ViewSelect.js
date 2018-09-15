import React, { Component } from 'react';
import '../css/ViewSelect.css';

class ViewSelect extends Component {
  render() {
    if (this.props.state.list) {
      return (
        <div className="view-select">
          <div className="selected" onClick={this.listSelect.bind(this)}>
            List
          </div>
          <div className="unselected" onClick={this.statusSelect.bind(this)}>
            Status
          </div>
        </div>
      )
    } else {
      return (
        <div className="view-select">
          <div className="unselected" onClick={this.listSelect.bind(this)}>
            List
          </div>
          <div className="selected" onClick={this.statusSelect.bind(this)}>
            Status
          </div>
        </div>
      )
    }
  }

  listSelect() {
    this.props.listSelect();
  }

  statusSelect() {
    this.props.statusSelect();
  }
}

export default ViewSelect;
