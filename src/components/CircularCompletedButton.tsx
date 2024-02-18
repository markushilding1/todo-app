import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

interface CircularCompletedButtonProps {
  onPress: () => void;
  disabled?: boolean;
  completed?: boolean;
}

const CircularCompletedButton = ({
  onPress,
  disabled,
  completed,
}: CircularCompletedButtonProps) => {
  return (
    <TouchableOpacity
      testID="circularCompletedButton"
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, completed && styles.completed]}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.placeholderText,
  },
  completed: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
});

export default CircularCompletedButton;
