import React, { useState, useEffect } from 'react';
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import { fetchData } from '@/api/fetchData';
import { TableData } from '@/types';

const CustomTable: React.FC = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    const loadTableData = async () => {
      const { data, totalPages, totalItems } = await fetchData(
        `https://api.razzakfashion.com/?paginate=${rowsPerPage}&search=`,
        `${searchTerm}&page=${currentPage}`
      );
      setData(data);
      setTotalPages(totalPages);
      setTotalItems(totalItems);
    };
    loadTableData();
  }, [currentPage, searchTerm, rowsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSearchTerm = (text: string) => {
    setCurrentPage(1)
    setSearchTerm(text)
  }

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  return (
    <div className="p-4 bg-[#333]">
      <Search value={searchTerm} onChange={handleSearchTerm} />
      <Table data={data} />
      <div className="w-full flex justify-end items-center bg-[#333] shadow-md">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </div>
  );
};

export default CustomTable;
