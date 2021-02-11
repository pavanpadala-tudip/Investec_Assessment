// @flow
import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Input, Button} from '../../components';
import Styles from './styles';
import {screenNames} from '../../navigators/helper';
import styles from '../logoutscreen/styles';
import {saveUserName} from '../../utility/actionTypes';
import DeviceInfo from '../../utility/deviceInfo';

type Props = {
  navigation: any,
  addUserName: Function,
};

const WelcomeScreen = (props: Props) => {
  const {navigation, addUserName} = props;

  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [deviceMessage, setDeviceMessage] = useState('');

  const handlePressMe = () => {
    if (name === '') {
      setErrorMessage('Please enter your name');
    } else {
      addUserName(name);
      navigation.navigate(screenNames.homescreen);
      setErrorMessage('');
      setDeviceMessage('');
    }
  };

  const handleTextChange = (text) => {
    setName(text);
    setErrorMessage('');
  };

  const handleDeviceInfo = async () => {
    const isEmulator = await DeviceInfo.isEmulator();
    setDeviceMessage(
      isEmulator ? 'App is running on emulator' : 'App is running on device',
    );
  };

  return (
    <View style={styles.mainView}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={Styles.container}>
          <Text testID="device_text" style={Styles.welcomeTextStyle}>
            {deviceMessage}
          </Text>
          <Text style={Styles.welcomeTextStyle}>Welcome</Text>
          <Input
            placeholder="Name"
            autoCapitalize="words"
            testID="text_input"
            onSubmitEditing={handlePressMe}
            returnKeyType="done"
            onChangeText={(text) => handleTextChange(text)}
            value={name}
          />
          <Text style={Styles.error}>{errorMessage}</Text>
          <Button testID="nav_button" onPress={handlePressMe}>
            Press me
          </Button>
          <Button testID="device_info" onPress={handleDeviceInfo}>
            Device Info
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserName: (value) => saveUserName(dispatch, value),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
