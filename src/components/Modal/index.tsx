import React, {ReactNode, useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {styles} from './styles';

type Props = {
  children: ReactNode;
};

export const ModalBox = ({children}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.positionButton}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.positionModal}>
          <View style={styles.containerModal}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[styles.textButton, styles.textButtonOpen]}>x</Text>
            </Pressable>
            {children}
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.textButton}>+</Text>
      </Pressable>
    </View>
  );
};