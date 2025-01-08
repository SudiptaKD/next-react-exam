import React from 'react';
import { TableData } from '@/types';
import "../styles/Table.css"

type TableProps = {
  data: TableData[];
};

const Table: React.FC<TableProps> = ({ data }) => (
  <table className="custom-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{new Date(item.created_at).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;