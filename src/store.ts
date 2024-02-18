import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { todosApi } from './services/todos';

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware();
    const middleWare = defaultMiddleware.concat(todosApi.middleware);
    return __DEV__ ? middleWare.concat(createLogger()) : middleWare;
  },
  devTools: __DEV__,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
