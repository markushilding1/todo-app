import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  LinearTransition,
} from 'react-native-reanimated';

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
  const listItemStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 20,
      paddingVertical: 15,
    };
  });

  return (
    <Animated.View layout={LinearTransition} style={listItemStyle}>
      <View style={styles.markCompletedContainer}>
        <CircularCompletedButton
          onPress={onMarkCompleted}
          completed={isCompleted}
          disabled={isUpdating}
        />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
