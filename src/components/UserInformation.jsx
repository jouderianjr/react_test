import React from 'react';
import RepositoryList from './RepositoryList';

const UserInformation = ({ user, repos }) => {
  const { avatar_url, login, html_url, bio } = user;
  return (
    <div>
      <img src={avatar_url} width={100} />
      <a href={html_url} target="_blank">
        <h3>@{login}</h3>
      </a>
      <p>{bio}</p>
      <RepositoryList repos={repos} />
    </div>
  );
};

export default UserInformation;
