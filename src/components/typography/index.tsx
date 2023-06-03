import React from 'react';
import {Text} from 'react-native';
import {styles} from './styles';

type Props = {
  children: string | string[];
  style?: object;
};

export const Title = ({children, style}: Props) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export const Subtitle = ({children, style}: Props) => {
  return <Text style={[styles.subtitle, style]}>{children}</Text>;
};

export const TextRegular = ({children, style}: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
