import React from 'react';

const ArticleItem = ({ record, onClick }) => {
  const { web_url, title, abstract, pub_date, byline, multimedia } = record;

  return (
    <div onClick={onClick}>
      <h2>
        <a href={web_url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{abstract}</p>
      <p>
        {pub_date} - {byline}
      </p>
      {multimedia.length > 0 && (
        <img
          src={multimedia[0].url}
          alt={title}
          width={multimedia[0].width}
          height={multimedia[0].height}
        />
      )}
    </div>
  );
};

export default ArticleItem;
