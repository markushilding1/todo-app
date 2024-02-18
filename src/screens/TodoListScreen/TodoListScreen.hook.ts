import { useEffect, useState } from 'react';
import { Todo, useGetTodosQuery } from '../../services/todos';

const PER_PAGE = 20;

const useTodoListScreen = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetTodosQuery(); // page would go here as a parameter if we were using server side pagination.
  const [pages, setPages] = useState<Todo[][]>();
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
