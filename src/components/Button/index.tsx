import React, {useMemo} from 'react';
import {TouchableOpacity, Text, ViewStyle, StyleProp} from 'react-native';
import {styles} from './style';

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
        <Text style={styles.textInput}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};
