import React from 'react';
import {View} from 'react-native';
import {Title} from '../typography';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.text}>CodeLeap Network</Title>
    </View>
  );
};
