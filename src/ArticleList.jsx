import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.web_url}>
        <img src={article.multimedia[0].url} alt={article.headline.main} />
          <h2>{article.headline.main}</h2>
          <p>{article.snippet}</p>
          <a href={article.web_url}>Read more</a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;