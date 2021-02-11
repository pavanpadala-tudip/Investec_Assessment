/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {fireEvent, render} from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import HomeScreen from '../src/screens/homescreen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../src/utility/deviceInfo', () => ({
  isEmulator: jest.fn(),
}));
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const store = mockStore({username: 'Pavan'});
const props = {navigation: {navigate: jest.fn()}, username: 'Pavan'};
const component = (
  <Provider store={store}>
    <HomeScreen {...props} />
  </Provider>
);

describe('Home screen test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should navigate back to welcome screen', () => {
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('goback_button'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('WelcomeScreen');
  });

  test('should not navigate to another screen', () => {
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('disabled_button'));
    expect(props.navigation.navigate).not.toHaveBeenCalled();
  });

  test('Should navigate back to logout screen', () => {
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('active_button'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('LogoutScreen');
  });
});
