// @flow

import React from 'react';
import SwipeButton from 'rn-swipe-button';
import {View} from 'react-native';
import diamondIcon from '../assets/diamond.png';
import constant from '../utility/constant';
import Styles from './Styles';

type Props = {
  value: String,
  onSwipe: Function,
};

const SwipeButtons = (props: Props) => {
  const {onSwipe, value} = props;
  return (
    <View style={Styles.swiperButton}>
      <SwipeButton
        disabled={false}
        swipeSuccessThreshold={75}
        width={constant.SCREEN_WIDTH * 0.89}
        height={55}
        title={value}
        titleColor="#5a8dc4"
        titleFontSize={20}
        thumbIconImageSource={diamondIcon}
        onSwipeSuccess={onSwipe}
        shouldResetAfterSuccess={true}
        railFillBackgroundColor="#1c1a27"
        railFillBorderColor="#1c1a27"
        thumbIconBackgroundColor="#6eb1f7"
        thumbIconBorderColor="#6eb1f7"
        railBackgroundColor="#1c1a27"
        railBorderColor="#1c1a27"
      />
    </View>
  );
};

export default SwipeButtons;
