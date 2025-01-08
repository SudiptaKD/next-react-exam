import React from 'react';
import { PaginationProps } from '@/types'; 


const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRowsPerPageChange(Number(e.target.value));
  };

  return (
    <div className="pagination-controls flex items-center justify-between p-4">
      <div className="rows-per-page flex items-center gap-4">
        <label htmlFor="rows-per-page" className="mr-2 text-sm text-white">
          Rows per page:
        </label>
        <select
          id="rows-per-page"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="border border-gray-300 rounded-md p-1 text-sm"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <span className="text-sm text-white ml-4">
      {`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, totalItems)} of ${totalItems} items`}
      </span>

      <div className="flex items-center space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
          className="px-2 py-1 text-sm border rounded-md bg-[#333] text-white hover:bg-gray-200 disabled:opacity-50"
        >
          |&lt;
        </button>
        <button
          disabled={currentPage <= 5}
          onClick={() => onPageChange(Math.max(1, currentPage - 5))}
          className="px-2 py-1 text-sm border rounded-md bg-[#333] text-white hover:bg-gray-200 disabled:opacity-50"
        >
          &lt;&lt;
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-2 py-1 text-sm border rounded-md bg-[#333] text-white hover:bg-gray-200 disabled:opacity-50"
        >
          &lt;
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-2 py-1 text-sm border rounded-md bg-[#333] text-white hover:bg-gray-200 disabled:opacity-50"
        >
          &gt;
        </button>
        <button
          disabled={currentPage + 5 > totalPages}
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 5))}
          className="px-2 py-1 text-sm border rounded-md bg-[#333] text-white hover:bg-gray-200 disabled:opacity-50"
        >
          &gt;&gt;
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
          className="px-2 py-1 text-sm border rounded-md bg-[#333] text-white hover:bg-gray-200 disabled:opacity-50"
        >
          &gt;|
        </button>
      </div>
    </div>
  );
};

export default Pagination;
