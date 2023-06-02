import React, {useCallback, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {signupActions as actions} from '../../redux/modules/signup/slice';
import {COLORS} from '../../utils/styles';
import {Button} from '../../components/Button';
import {Box} from '../../components/Box';
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
        <Text style={styles.title}>Welcome to CodeLeap network!</Text>
        <Text style={styles.text}>Please enter your username</Text>
        <TextInput
          style={styles.input}
          placeholder="Ewerton Vinicius Turco"
          placeholderTextColor={COLORS.secondary}
          value={name}
          onChangeText={setName}
        />
        <Button onPress={onPress} bgColor={COLORS.primary} text="Enter" />
      </Box>
    </View>
  );
};
