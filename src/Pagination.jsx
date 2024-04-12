import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === nPages;
  const firstPageIndex = 1;
  const lastPageIndex = Math.min(nPages, 5);
  const hasFirstPage = currentPage > firstPageIndex + 1;
  const hasLastPage = currentPage < nPages - 1;

  return (
    <div className="pagination">
      <button onClick={() => setCurrentPage(1)} disabled={isFirstPage}>
        First
      </button>
      {hasFirstPage && (
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={isFirstPage}>
          Previous
        </button>
      )}
      {Array.from({ length: lastPageIndex - firstPageIndex + 1 }, (_, i) => (
        <button
          key={firstPageIndex + i}
          onClick={() => setCurrentPage(firstPageIndex + i)}
          className={`page-item ${currentPage === firstPageIndex + i ? 'active' : ''}`}
        >
          {firstPageIndex + i}
        </button>
      ))}
      {hasLastPage && (
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={isLastPage}>
          Next
        </button>
      )}
      <button onClick={() => setCurrentPage(nPages)} disabled={isLastPage}>
        Last
      </button>
    </div>
  );
};

export default Pagination;