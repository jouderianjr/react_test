import React from 'react';
import RepositoryListItem from './RepositoryListItem';

const RepositoryList = ({ repos }) => (
  <div className="App-repository-list">
    <h2>Repositories</h2>
    <ul>{repos.map(repo => <RepositoryListItem repo={repo} />)}</ul>
  </div>
);

export default RepositoryList;
