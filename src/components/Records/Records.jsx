import React from 'react';
import ArticleItem from '../../ArticleItem';
import './Records.css'

const Records = ({ records,onArticleClick }) => {
  return (
    <div className="records-grid">
      {records.map((record) => (
        <ArticleItem key={record.web_url} record={record} onClick={() => onArticleClick(record)}/>
      ))}
    </div>
  );
};

export default Records;
