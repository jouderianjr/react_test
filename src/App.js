import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserInformation } from './components';
import { github } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: {},
      isLoading: false,
      isFetched: false,
      hasError: false
    };

    this.getUserInformation = this.getUserInformation.bind(this);
  }

  getUserInformation() {
    const user = 'jouderianjr';
    const { fetchUser, fetchRepos } = github;

    this.setState({ isLoading: true });

    Promise.all([fetchUser(user), fetchRepos(user)])
      .then(resp =>
        this.setState({
          user: resp[0],
          repos: resp[1],
          isLoading: false,
          isFetched: true
        })
      )
      .catch(err => this.setState({ hasError: true, isLoading: false }));
  }

  render() {
    const { user, isLoading, isFetched, hasError, repos } = this.state;

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
        {isFetched && <UserInformation user={user} repos={repos} />}
      </div>
    );
  }
}

export default App;
