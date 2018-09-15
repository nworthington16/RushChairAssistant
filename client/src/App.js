import React, { Component } from 'react';
import './css/App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    axios
      .get('/api/rushees')
      .then(response => {
        console.log(response);
        let rushees = this.state.events[0].rushees;
        for (let i = 0; i < response.data.length; i++) {
          let rushee = response.data[i];
          rushees.push({
            name: rushee.name,
            gtid: rushee.gtid,
            status: rushee.status
          });
        }
      })
      .catch(error => {
        console.log(error);
      });

    this.state = {
      event: null,
      events: [
        {
          name: "Formal Rush Fall '18",
          list: true,
          status: false,
          rushees: []
        }
      ]
    };
  }

  createEvent() {
    this.setState({
      event: "Formal Rush Fall '18",
      events: this.state.events
    });
  }

  sendBack() {
    this.setState({
      event: null,
      events: this.state.events
    });
  }

  addRushee(newRushee) {
    let rushees = this.state.events[0].rushees;
    rushees.push(newRushee);
    this.setState({
      event: this.state.event,
      events: [
        {
          name: this.state.events[0].name,
          list: this.state.events[0].list,
          status: this.state.events[0].status,
          rushees: rushees
        }
      ]
    });
  }

  deleteRushee(gtid) {

    // this is horrible but it works
    axios
      .get('/api/rushees')
      .then(response => {
        let rushees = response.data;
        for (let i = 0; i < rushees.length; i++) {
          if (rushees[i].gtid === gtid) {
            // find rushee by id
            const id = rushees[i]._id;
            // delete rushee
            axios
              .delete(`/api/rushees/${id}`)
              .then(response => {
                console.log(response);
              })
              .catch(err => {
                console.log(err);
              });
            break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
    let rushees = this.state.events[0].rushees;
    rushees = rushees.filter(rushee => {return rushee.gtid !== gtid});
    this.setState({
      event: this.state.event,
      events: [
        {
          name: this.state.events[0].name,
          list: this.state.events[0].list,
          status: this.state.events[0].status,
          rushees: rushees
        }
      ]
    });
  }

  render() {
    if (this.state.event) {
      return <Dashboard
                event={this.state.event}
                rushees={this.state.events[0].rushees}
                addRushee={this.addRushee.bind(this)}
                deleteRushee={this.deleteRushee.bind(this)}
                sendBack={this.sendBack.bind(this)} />
    } else {
      return <WelcomeScreen
                createEvent={this.createEvent.bind(this)} />
    }
  }
}

export default App;
