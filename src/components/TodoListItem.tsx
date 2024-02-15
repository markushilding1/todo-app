import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  LinearTransition,
} from 'react-native-reanimated';
import colors from '../constants/colors';

const TodoListItem = ({ item }) => {
  const listItemStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      borderTopWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: 20,
      paddingVertical: 15,
    };
  });

  return (
    <Animated.View layout={LinearTransition} style={listItemStyle}>
      <Text style={styles.text}>{item.title}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
});

export default TodoListItem;
