import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {TextRegular, Title} from '../typography';

type CardProps = {
  data: [
    {
      title: string;
      username: string;
      created_datetime: string;
      content: string;
    },
  ];
};

export const Card = ({data}: CardProps) => {
  return (
    <>
      {data.map(item => {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Title style={styles.headerTitle}>{item.title}</Title>
            </View>
            <View style={styles.content}>
              <View style={styles.textName}>
                <TextRegular>@{item.username}</TextRegular>
                {/* <TextRegular>{item.created_datetime}</TextRegular> */}
              </View>
              <TextRegular>{item.content}</TextRegular>
            </View>
          </View>
        );
      })}
    </>
  );
};
