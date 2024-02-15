import { useEffect, useState } from 'react';
import { useListTodosQuery } from '../../services/todos';

const PER_PAGE = 10;

const useTodoListScreen = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useListTodosQuery(page);
  const [pages, setPages] = useState([]);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  // Simluating server side pagination
  useEffect(() => {
    if (data) {
      const updatedPages = [];
      for (let i = 0; i < page; i += 1) {
        updatedPages.push(data.slice(i * PER_PAGE, (i + 1) * PER_PAGE));
      }

      setPages(updatedPages);
    }
  }, [data, page]);

  // Simulate server side pagination
  const fetchNextPage = () => {
    setIsFetchingNextPage(true);
    setTimeout(() => {
      setPage(page + 1);
    }, 2000);
  };

  return {
    data: pages?.flat(),
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useTodoListScreen;
