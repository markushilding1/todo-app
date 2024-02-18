import React from 'react';

import { Todo, useDeleteTodoMutation } from '../services/todos';
import SwipeableListItem from '../components/SwipeableListItem';

export interface WithSwipeToDeleteTodo {}

function withSwipeToDeleteTodo<
  T extends WithSwipeToDeleteTodo = WithSwipeToDeleteTodo,
>(Component: React.FunctionComponent<T>) {
  return function WithSwipeToDeleteTodo(childProps: any) {
    const item = (childProps as any).item as Todo;
    const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

    const handleDelete = () => {
      deleteTodo(item.id);
    };

    return (
      <SwipeableListItem onDelete={handleDelete} isDeleting={isDeleting}>
        <Component {...childProps} />
      </SwipeableListItem>
    );
  };
}

export default withSwipeToDeleteTodo;
