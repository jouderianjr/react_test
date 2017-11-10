import React from 'react';

const UserInformation = ({ user }) => (
  <div>
    <img src={user.avatar_url} width={100} />
    <h3>{user.login}</h3>
    <p>{user.bio}</p>
  </div>
);

export default UserInformation;
