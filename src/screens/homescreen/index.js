// @flow
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Button, SwipeButtons} from '../../components';
import Styles from './styles';
import {screenNames} from '../../navigators/helper';
import styles from '../../components/Styles';

type Props = {
  navigation: any,
  userName: String,
};

const HomeScreen = (props: Props) => {
  const {navigation, userName} = props;

  const handleSubmit = () => {
    navigation.navigate(screenNames.logoutscreen);
  };

  const handleGoBack = () => {
    navigation.navigate(screenNames.welcomeScreen);
  };

  return (
    <View style={Styles.mainView}>
      <ScrollView>
        <View style={Styles.nameView}>
          <Text style={Styles.nameStyle}>Hi {userName}</Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.headingText}>4 variations of a button</Text>
          <Button
            testID="goback_button"
            style={styles.textButton}
            onPress={() => handleGoBack()}>
            Press me
          </Button>
          <Button
            testID="disabled_button"
            style={styles.disableButton}
            disabled={true}
            onPress={() => null}>
            Press me
          </Button>
          <Button testID="active_button" onPress={handleSubmit}>
            <Text style={styles.activeLabel}>Press me</Text>
          </Button>

          <SwipeButtons
            onSwipe={() => handleSubmit()}
            value="Slide me to continue"
          />
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

export default connect(mapStateToProps)(HomeScreen);
