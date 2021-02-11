//@flow
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from '../screens/welcomeScreen';
import HomeScreen from '../screens/homescreen';
import LogoutScreen from '../screens/logoutscreen';

const registrationRoutes = createStackNavigator(
  {
    WelcomeScreen,
    HomeScreen,
    LogoutScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppNavigator = createSwitchNavigator({
  registrationRoutes,
});

const navigators = createAppContainer(AppNavigator);

export default navigators;
