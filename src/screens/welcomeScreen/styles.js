import {StyleSheet} from 'react-native';
import Colors from '../../utility/colorConstant';
import Constant from '../../utility/constant';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Constant.SCREEN_WIDTH * 0.9,
    alignSelf: 'center',
    marginTop: 300,
    marginBottom: 30,
  },
  welcomeTextStyle: {
    fontSize: 28,
    marginTop: Constant.SCREEN_HEIGHT * 0.01,
    color: '#FFF',
    marginBottom: 15,
  },
  error: {
    alignSelf: 'flex-start',
    color: '#F00',
  },
});

export default styles;
