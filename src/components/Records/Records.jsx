import React from 'react';
import { Link } from 'react-router-dom';
import './Records.css';

const Records = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <p>{article.published_date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Records;