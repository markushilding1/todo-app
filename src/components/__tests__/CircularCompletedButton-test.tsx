import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react-native';

import CircularCompletedButton from '../CircularCompletedButton';

describe('button', () => {
  describe('render', () => {
    const mockFunction = jest.fn();

    const button = renderer.create(
      <CircularCompletedButton
        onPress={mockFunction}
        completed
        disabled={false}
      />,
    );

    it(`renders correctly`, () => {
      expect(button.toJSON()).toMatchSnapshot();
    });
  });

  describe('events', () => {
    it(`calls function prop "onPress"`, async () => {
      const mockFunction = jest.fn();
      render(<CircularCompletedButton onPress={mockFunction} />);
      fireEvent.press(screen.getByTestId('circularCompletedButton'));
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });

    it(`does not call function prop "onPress"`, () => {
      const mockFunction = jest.fn();
      render(<CircularCompletedButton onPress={mockFunction} disabled />);
      fireEvent.press(screen.getByTestId('circularCompletedButton'));
      expect(mockFunction).toHaveBeenCalledTimes(0);
    });
  });
});
