import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {fetchData} from '../../redux/modules/main/slice';
import {getData} from '../../redux/modules/main/selector';
import {ModalBox} from '../../components/Modal';
import {Card} from '../../components/Card';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {COLORS} from '../../utils/styles';
import {styles} from './styles';

export const Main = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const data = useSelector(getData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Header />,
      headerStyle: {
        backgroundColor: COLORS.primary,
      },
      headerTintColor: COLORS.textSecondary,
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Card data={data} />
          <ModalBox
            children={
              <View>
                <Text style={styles.title}>What's on your mind?</Text>
                <Text style={styles.text}>Title</Text>
                <Input
                  placeholder="Hello World"
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
