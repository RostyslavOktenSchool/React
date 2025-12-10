import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className='pagination'>
      <button 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className='btn-pagination'
      >
        ← Попередня
      </button>
      
      <span className='page-info'>Сторінка {currentPage} з {totalPages}</span>
      
      <button 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className='btn-pagination'
      >
        Наступна →
      </button>
    </div>
  );
};

export default Pagination;
