const baseUrl = 'https://api.github.com/users/';

const get = url =>
  fetch(url, {
    method: 'GET'
  }).then(data => data.json());

const github = {
  fetchUser: user => get(baseUrl + user),
  fetchRepos: user => get(`${baseUrl + user}/repos`)
};

export default github;
