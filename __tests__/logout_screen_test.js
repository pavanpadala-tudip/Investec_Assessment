/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {fireEvent, render} from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import LogoutScreen from '../src/screens/logoutscreen';

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
    <LogoutScreen {...props} />
  </Provider>
);

describe('Logout screen test', () => {
  test('Should navigate back to welcome screen', () => {
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('pressme_button'));
    expect(props.navigation.navigate).toHaveBeenCalledWith('WelcomeScreen');
  });
});
