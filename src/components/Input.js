//@flow
import React from 'react';
import {TextInput} from 'react-native';
import Styles from './Styles';
import Colors from '../utility/colorConstant';

const Input = (props: any) => (
  <TextInput
    style={{...Styles.inputStyle}}
    underlineColorAndroid="transparent"
    spellCheck={false}
    autoCorrect={false}
    placeholderTextColor={Colors.PLACEHOLDER_COLOR}
    blurOnSubmit={false}
    ref={props.inputRef}
    returnKeyType="next"
    {...props}
  />
);

export default Input;
