import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import useTodoListScreen from './TodoListScreen.hook';
import TodoListItem from '../../components/TodoListItem';

const TodoListScreen = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useTodoListScreen();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TodoListItem item={item} />}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.flatList}
        initialNumToRender={15}
        onEndReached={fetchNextPage}
        ListFooterComponent={
          isFetchingNextPage && <ActivityIndicator color="black" />
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
