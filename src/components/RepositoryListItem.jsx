import React from 'react';

const RepositoryListItem = ({ repo }) => {
  const { name, description, html_url } = repo;
  return (
    <li>
      <a href={html_url} target="_blank">
        {name}
      </a>
      {description && (
        <ul>
          <li>{description}</li>
        </ul>
      )}
    </li>
  );
};

export default RepositoryListItem;
