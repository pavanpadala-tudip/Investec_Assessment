// @flow
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Styles from './Styles';

const Button = (props: any) => (
  <TouchableOpacity style={[Styles.button, props.style]} {...props}>
    <Text style={[Styles.buttonLabel, props.labelStyle]}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button;
