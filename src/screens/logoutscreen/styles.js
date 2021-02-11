import {StyleSheet} from 'react-native';
import Colors from '../../utility/colorConstant';
import constant from '../../utility/constant';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
  },
  nameStyle: {
    fontSize: 30,
    marginTop: constant.SCREEN_HEIGHT * 0.03,
    color: '#FFF',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: constant.SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    marginTop: 325,
    marginBottom: 30,
  },
  welcomeTextStyle: {
    fontSize: 28,
    marginTop: constant.SCREEN_HEIGHT * 0.01,
    color: '#FFF',
  },
});

export default styles;
