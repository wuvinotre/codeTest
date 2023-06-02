import React from 'react';
import {TextInput} from 'react-native';
import {COLORS} from '../../utils/styles';
import {styles} from './styles';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export const Input = ({placeholder, value, onChangeText}: InputProps) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondary}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};
