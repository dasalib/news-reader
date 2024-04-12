import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Records from './components/Records/Records';
import ArticleDetails from './ArticleDetails';
import Pagination from './Pagination';
// import Sort from './Sort';

function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // // const [sortBy, setSortBy] = useState('relevance');
  // const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=kazakhstan&page=${currentPage}`,
        {
          headers: {
            'api-key': 'e5kqlQpYfI6InpMTOf7zVE81M5ztuRA6',
          },
        }
      );

      setArticles(response.data.response.docs);
    }

    fetchData();
  }, [currentPage, sortDirection]);

  // function handleSortChange(sortBy, sortDirection) {
  //   setSortBy(sortBy);
  //   setSortDirection(sortDirection);
  //   setCurrentPage(1);
  // }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div className="App">
      {/* <Sort onSortChange={handleSortChange} /> */}
      <Records articles={articles} onArticleClick={(article) => setSelectedArticle(article)} />
      <Pagination currentPage={currentPage} totalPages={Math.ceil(response.data.response.meta.hits / 10)} onPageChange={handlePageChange} />
      {selectedArticle && <ArticleDetails article={selectedArticle} onClose={() => setSelectedArticle(null)} />}
    </div>
  );
}

export default App;