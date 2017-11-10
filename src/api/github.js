const github = {
  fetchUser: user => {
    return fetch(`https://api.github.com/users/${user}`, {
      method: 'GET'
    }).then(data => data.json());
  }
};

export default github;
