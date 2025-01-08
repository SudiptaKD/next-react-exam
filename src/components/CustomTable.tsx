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

  useEffect(() => {
    const loadTableData = async () => {
      const { data, totalPages } = await fetchData(
        'https://api.razzakfashion.com/?paginate=5&search=',
        `${searchTerm}&page=${currentPage}`
      );
      setData(data);
      setTotalPages(totalPages);
    };
    loadTableData();
  }, [currentPage, searchTerm]);

  return (
    <div>
      <Search value={searchTerm} onChange={setSearchTerm} />
      <Table data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CustomTable;