import React, { useRef, PropsWithChildren } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  Text,
  Animated,
  StyleSheet,
  I18nManager,
  ActivityIndicator,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';

type SwipeableListItemProps = PropsWithChildren<{
  onDelete: () => void;
  isDeleting: boolean;
  children: React.ReactNode;
}>;

function SwipeableListItem({
  onDelete,
  isDeleting,
  children,
}: SwipeableListItemProps) {
  const ref = useRef<Swipeable>(null);

  const renderRightAction = (
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation<number>,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View
        style={[
          styles.rightActionButtonWrapper,
          { transform: [{ translateX: trans }] },
        ]}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={onDelete}>
          {isDeleting ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.actionText}>{text}</Text>
          )}
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>,
  ) => (
    <View style={styles.rightActionWrapper}>
      {renderRightAction('Delete', '#e22131', 192, progress)}
    </View>
  );

  return (
    <Swipeable
      ref={ref}
      renderRightActions={renderRightActions}
      overshootRight={false}>
      {children}
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  rightActionWrapper: {
    width: 192,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  rightActionButtonWrapper: {
    flex: 1,
  },
  actionText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: 'transparent',
    padding: 10,
    textTransform: 'uppercase',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SwipeableListItem;
