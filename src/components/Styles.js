import {StyleSheet} from 'react-native';
import Colors from '../utility/colorConstant';
import constant from '../utility/constant';

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: 60,
    color: '#000',
    paddingHorizontal: 7,
    borderBottomWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: Colors.INPUT_FIELD_COLOR,
    marginBottom: -3,
  },
  button: {
    marginTop: 20,
    borderColor: '#778899',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#6aaefd',
    height: 60,
    justifyContent: 'center',
    borderRadius: 8,
    width: constant.SCREEN_WIDTH * 0.9,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#ffffff',
  },
  disableButton: {
    marginTop: 20,
    borderColor: '#778899',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#34424d',
    height: 60,
    justifyContent: 'center',
    borderRadius: 8,
    width: constant.SCREEN_WIDTH * 0.9,
  },
  swiperButton: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#1c1a27',
    borderWidth: 2,
    width: constant.SCREEN_WIDTH * 0.9,
    height: 60,
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
    borderColor: '#778899',
  },
});

export default styles;
