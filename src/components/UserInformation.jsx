import React from 'react';

const UserInformation = ({ user }) => {
  const { avatar_url, login, html_url, bio } = user;
  return (
    <div>
      <img src={avatar_url} width={100} />
      <a href={html_url} target="_blank">
        <h3>@{login}</h3>
      </a>
      <p>{bio}</p>
    </div>
  );
};

export default UserInformation;
