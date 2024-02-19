import React, { useEffect, useState } from 'react';
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

    const handleMarkCompleted = () => {
      const prevValue = isCompleted;
      setCompleted(!prevValue);
      updateTodo({ id: item.id, completed: !prevValue });
    };

    useEffect(() => {
      setCompleted(item.completed);
    }, [item]);

    return (
      <Component
        {...(childProps as T)}
        onMarkCompleted={handleMarkCompleted}
        isCompleted={isCompleted}
        isUpdating={isUpdating}
      />
    );
  };
}

export default withMarkTodoCompleted;
