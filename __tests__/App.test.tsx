import * as React from 'react';
import {Dimensions} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {it, describe, expect} from '@jest/globals';
import App from '../App';

const {height, width} = Dimensions.get('window');

describe('Testing infinite scrolling list', () => {
  it('Check the main screen is render correctly', async () => {
    const {getByTestId} = render(<App />);
    const header = getByTestId('header');
    expect(header).toBeTruthy();
  });

  it('Scroll to the end of the list', () => {
    const {getByTestId} = render(<App />);
    const flatlist = getByTestId('flatlist');

    fireEvent.scroll(flatlist, {
      nativeEvent: {
        contentSize: {height, width: width * 0.85},
        contentOffset: {y: height},
        layoutMeasurement: {height, width},
      },
    });
  });
});
