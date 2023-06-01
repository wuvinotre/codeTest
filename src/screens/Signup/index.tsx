import React, {useCallback, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {signupActions as actions} from '../../redux/modules/signup/slice';
import {getName} from '../../redux/modules/signup/selector';
import {styles} from './styles';
import {COLORS} from '../../utils/styles';

export const Signup = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const getNameSelector = useSelector(getName);

  const onPress = useCallback(() => {
    dispatch(actions.setName(name));
  }, [dispatch, name]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.header}>Welcome to CodeLeap network!</Text>
        <Text style={styles.subHeader}>Please enter your username</Text>
        <TextInput
          style={styles.input}
          placeholder="Ewerton Vinicius Turco"
          placeholderTextColor={COLORS.secondary}
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          onPress={onPress}>
          <Text style={styles.textInput}>
            {getNameSelector !== '' ? getNameSelector : 'ENTER'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
