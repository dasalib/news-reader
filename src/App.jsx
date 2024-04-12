import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Records from './components/Records/Records';
import ArticleDetails from './ArticleDetails';
import Pagination from './components/Pagination';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const totalPages = 100;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=kazakhstan&api-key=e5kqlQpYfI6InpMTOf7zVE81M5ztuRA6&page=${currentPage}&page_size=15`
      );

      // Parse the search results into an array of objects
      const records = response.data.response.docs.map((doc) => {
        return {
          web_url: doc.web_url,
          title: doc.headline.main,
          abstract: doc.abstract,
          pub_date: doc.pub_date,
          byline: doc.byline.original,
          multimedia: doc.multimedia,
        };
      });

      setData(records);
      setLoading(false);
    }

    fetchData();
  }, [currentPage]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>Kazakhstan News</h1>
      {selectedArticle && <ArticleDetails article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
      {loading ? <p>Loading...</p> : <Records records={data} onArticleClick={handleArticleClick} />}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}


export default App;
