import React from 'react';

const ArticleDetails = ({ article, onClose }) => {
  const { web_url, title, abstract, pub_date, byline, multimedia } = article;

  return (
    <div className="article-details">
      <button onClick={onClose}>Close</button>
      <h2 className='title'>{title}</h2>
      <p className='abstract'>{abstract}</p>
      <p className='pub-date'>{pub_date} - {byline}</p>
      {multimedia.length > 0 && (
        <img
          src={multimedia[0].url}
          alt={title}
          width={multimedia[0].width}
          height={multimedia[0].height}
        />
      )}
      <a href={web_url} target="_blank" rel="noopener noreferrer" className="read-more-button">Read More</a>
    </div>
  );
};

export default ArticleDetails;
