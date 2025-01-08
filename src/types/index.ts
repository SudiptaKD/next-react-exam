export interface TableData {
    id: number;
    name: string;
    email: string;
    created_at: string;
  }
  
  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
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