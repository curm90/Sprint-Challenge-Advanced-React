import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { PlayerList } from './components/PlayerList';
import { NavBar } from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({ players: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
