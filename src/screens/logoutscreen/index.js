//@flow
import * as React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Button} from '../../components';
import Styles from './styles';
import {screenNames} from '../../navigators/helper';
import styles from './styles';

type Props = {
  navigation: any,
  userName: String,
};

const LogoutScreen = (props: Props) => {
  const {navigation, userName} = props;

  const handleLogOut = () => {
    props.navigation.navigate('WelcomeScreen');
    navigation.navigate(screenNames.welcomeScreen);
  };

  return (
    <View style={styles.mainView}>
      <ScrollView>
        <View>
          <Text style={Styles.nameStyle}>Bye {userName}</Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.welcomeTextStyle}>Thank you!</Text>
          <Button testID="pressme_button" onPress={handleLogOut}>
            Press me
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

export default connect(mapStateToProps)(LogoutScreen);
