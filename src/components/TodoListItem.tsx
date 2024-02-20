import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';
import { Todo } from '../services/todos';
import CircularCompletedButton from './CircularCompletedButton';
import { View } from 'react-native';

export interface TodoItemProps {
  item: Todo;
  onMarkCompleted: () => void;
  isCompleted: boolean;
  isUpdating: boolean;
}

const TodoListItem = ({
  item,
  onMarkCompleted,
  isCompleted,
  isUpdating,
}: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.markCompletedContainer}>
        <CircularCompletedButton
          onPress={onMarkCompleted}
          completed={isCompleted}
          disabled={isUpdating}
        />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    flexShrink: 1,
    flexGrow: 1,
  },
  markCompletedContainer: {
    marginRight: 15,
  },
});

export default TodoListItem;
