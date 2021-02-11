/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import WelcomeScreen from '../src/screens/welcomeScreen';
import DeviceInfo from '../src/utility/deviceInfo';

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
    <WelcomeScreen {...props} />
  </Provider>
);

describe('Welcome screen test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call a Native Module isEmulator Method when device info button is pressed and should show 'App is running on Device'", async () => {
    DeviceInfo.isEmulator.mockReturnValueOnce(false);
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('device_info'));
    await waitFor(() => {
      expect(getByTestId('device_text').children[0]).toEqual(
        'App is running on device',
      );
    });
  });

  test("should call a Native Module isEmulator Method when check device button is pressed and should show 'App is running on Emulator'", async () => {
    DeviceInfo.isEmulator.mockReturnValueOnce(true);
    const {getByTestId} = render(component);
    fireEvent.press(getByTestId('device_info'));
    await waitFor(() => {
      expect(getByTestId('device_text').children[0]).toEqual(
        'App is running on emulator',
      );
    });
  });
});
