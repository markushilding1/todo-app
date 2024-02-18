import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import useTodoListScreen from './TodoListScreen.hook';
import TodoListItem from '../../components/TodoListItem';
import withMarkTodoCompleted from '../../hocs/withMarkTodoCompleted';

const Item = withMarkTodoCompleted(TodoListItem);

const TodoListScreen = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useTodoListScreen();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.flatList}
        initialNumToRender={20}
        onEndReached={fetchNextPage}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator color="black" /> : undefined
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    width: '100%',
  },
  flatList: {
    paddingTop: 10,
  },
});

export default TodoListScreen;
