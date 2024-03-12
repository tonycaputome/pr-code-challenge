import { useCallback, useState } from "react";

function usePagination<T>(data: T[] = [], itemsPerPage = 20) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data?.length / itemsPerPage);

  const currentData = useCallback(() => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    if (data && data.length) return data.slice(begin, end);
  }, [data, itemsPerPage, currentPage]);

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return {
    next,
    prev,
    jump,
    currentData,
    paginated: currentData(),
    currentPage,
    maxPage
  };
}

export default usePagination;
