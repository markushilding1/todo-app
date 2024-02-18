import React, { useEffect, useState, useCallback } from 'react';
import { Todo, useUpdateTodoMutation } from '../services/todos';

export interface WithMarkTodoCompletedProps {
  onMarkCompleted: () => void;
  isCompleted: boolean;
  isUpdating: boolean;
}

function withMarkTodoCompleted<
  T extends WithMarkTodoCompletedProps = WithMarkTodoCompletedProps,
>(Component: React.FunctionComponent<T>) {
  return (childProps: Omit<T, keyof WithMarkTodoCompletedProps>) => {
    const item = (childProps as any).item as Todo;
    const [isCompleted, setCompleted] = useState(item.completed);
    const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();

    const handleMarkCompleted = useCallback(() => {
      const prevValue = isCompleted;
      setCompleted(!prevValue);
      updateTodo({ id: item.id, completed: !prevValue });
    }, [isCompleted, item.id, updateTodo]);

    useEffect(() => {
      setCompleted(item.completed);
    }, [item]);

    const memoizedComponent = React.useMemo(
      () => (
        <Component
          {...(childProps as T)}
          onMarkCompleted={handleMarkCompleted}
          isCompleted={isCompleted}
          isUpdating={isUpdating}
        />
      ),
      [childProps, handleMarkCompleted, isCompleted, isUpdating],
    );

    return memoizedComponent;
  };
}

export default withMarkTodoCompleted;
