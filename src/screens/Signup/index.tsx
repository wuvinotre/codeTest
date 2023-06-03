import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {signupActions as actions} from '../../redux/modules/signup/slice';

import {Button} from '../../components/Button';
import {Box} from '../../components/Box';
import {Input} from '../../components/Input';
import {Title, TextRegular} from '../../components/typography';
import {COLORS} from '../../utils/styles';
import {styles} from './styles';

export const Signup = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    dispatch(actions.setName(name));
    navigation.navigate('Main');
  }, [dispatch, name, navigation]);

  return (
    <View style={styles.container}>
      <Box>
        <Title style={styles.title}>Welcome to CodeLeap network!</Title>
        <TextRegular style={styles.text}>
          Please enter your username
        </TextRegular>
        <Input
          placeholder="Ewerton Vinicius Turco"
          value={name}
          onChangeText={setName}
        />
        <Button onPress={onPress} bgColor={COLORS.primary} text="Enter" />
      </Box>
    </View>
  );
};
