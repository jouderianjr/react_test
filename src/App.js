import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';
import { github } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };

    this.getUserInformation = this.getUserInformation.bind(this);
  }

  getUserInformation() {
    github.fetchUser('jouderianjr').then(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <p>Click on the button to fetch the user information</p>
          <button onClick={this.getUserInformation}>Click me</button>
        </div>
        <UserInformation user={user} />
      </div>
    );
  }
}

export default App;
