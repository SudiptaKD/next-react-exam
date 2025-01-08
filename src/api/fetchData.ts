import { TableData } from "@/types";

export const fetchData = async (url: string, query: string): Promise<{ data: TableData[]; totalPages: number, totalItems : number }> => {
    const response = await fetch(url + query);
    const result = await response.json();
    return { data: result.data, totalPages: result.last_page, totalItems: result?.total };
  };