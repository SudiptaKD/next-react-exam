export interface TableData {
    id: number;
    name: string;
    email: string;
    created_at: string;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rows: number) => void;
  }
  
  export interface SearchProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
  }