import React, {useMemo} from 'react';
import {TouchableOpacity, ViewStyle, StyleProp} from 'react-native';
import {styles} from './style';
import {TextRegular} from '../typography';

type Props = {
  onPress: () => void;
  bgColor: string;
  text: string;
};

export const Button = ({onPress, text, bgColor}: Props) => {
  const buttonStyle: StyleProp<ViewStyle> = useMemo(
    () => [styles.button, {backgroundColor: bgColor}],
    [bgColor],
  );

  return (
    <>
      <TouchableOpacity
        style={buttonStyle}
        activeOpacity={0.75}
        onPress={onPress}>
        <TextRegular style={styles.textInput}>{text}</TextRegular>
      </TouchableOpacity>
    </>
  );
};
