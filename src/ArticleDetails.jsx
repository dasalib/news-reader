import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetails = ({ articles }) => {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <p>{article.published_date}</p>
      <p>{article.byline}</p>
      <img src={article.multimedia[0].url} alt={article.title} />
      <p>{article.lead_paragraph}</p>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDetails;