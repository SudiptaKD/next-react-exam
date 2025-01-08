import React from 'react';
import { SearchProps } from '@/types';
import "../styles/Search.css"

const Search: React.FC<SearchProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default Search;