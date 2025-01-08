import { TableData } from "@/types";

export const fetchData = async (url: string, query: string): Promise<{ data: TableData[]; totalPages: number }> => {
  try {
    const response = await fetch(url + query);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return { data: result.data, totalPages: result.last_page };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
