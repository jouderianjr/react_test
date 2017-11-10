import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';
import { github } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoading: false,
      isFetched: false,
      hasError: false
    };

    this.getUserInformation = this.getUserInformation.bind(this);
  }

  getUserInformation() {
    this.setState({ isLoading: true });

    github
      .fetchUser('jouderianjr')
      .then(user => this.setState({ user, isLoading: false, isFetched: true }))
      .catch(err => this.setState({ hasError: true, isLoading: false }));
  }

  render() {
    const { user, isLoading, isFetched, hasError } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {!isFetched && (
          <div className="App-intro">
            <p>Click on the button to fetch the user information</p>
            <button disabled={isLoading} onClick={this.getUserInformation}>
              Click me
            </button>
            {hasError && <p>Error, try again!</p>}
          </div>
        )}
        {isFetched && <UserInformation user={user} />}
      </div>
    );
  }
}

export default App;
