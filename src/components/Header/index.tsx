import React from 'react';
import {View, StatusBar} from 'react-native';
import {Title} from '../typography';
import {styles} from './styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Title style={styles.text}>CodeLeap Network</Title>
    </View>
  );
};
