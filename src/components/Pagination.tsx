import React from 'react';
import { PaginationProps } from '@/types'; 
import "../styles/Pagination.css"

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination-controls">
    <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
      Previous
    </button>
    <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
      Next
    </button>
  </div>
);

export default Pagination;