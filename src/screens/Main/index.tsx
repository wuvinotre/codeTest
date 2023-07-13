import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {fetchData} from '../../redux/modules/main/slice';
import {getData} from '../../redux/modules/main/selector';

import {ModalBox} from '../../components/Modal';
import {Card} from '../../components/Card';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {TextRegular, Title} from '../../components/typography';

import {COLORS} from '../../utils/styles';
import {styles} from './styles';

export const Main = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(getData);

  const headerComponent = useCallback(() => {
    return <Header />;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: headerComponent,
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: COLORS.textSecondary,
    });
  }, [navigation, headerComponent]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ScrollView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Card data={data} />
          <ModalBox
            children={
              <View>
                <Title style={styles.title}>What's on your mind?</Title>
                <TextRegular style={styles.text}>Title</TextRegular>
                <Input
                  placeholder="Title here"
                  value={title}
                  onChangeText={setTitle}
                />
                <Text style={styles.text}>Contet</Text>
                <Input
                  placeholder="Content Here"
                  value={content}
                  onChangeText={setContent}
                />
                <Button
                  onPress={() => {}}
                  text="Create"
                  bgColor={COLORS.primary}
                />
              </View>
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};
