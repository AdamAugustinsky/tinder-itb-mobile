import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Linking, Modal,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  matchMedias: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: 300,
    height: 150,

    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 30,

  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    top: 0,
    alignSelf: 'center',
  },
  space: {
    width: '10%',
  },
  icons: {
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center',
  },
});

export default function MatchChatMedias({
  match, modalVisibility, setModalVisibility,
}) {
  const { number, facebook, instagram } = match.contacts;

  const loadInstagram = () => {
    if (instagram) {
      return <Ionicons name="logo-instagram" size={52} color="#fff" />;
    }
    return <Text />;
  };
  const loadFacebook = () => {
    if (facebook) {
      return <Ionicons name="logo-facebook" size={52} color="#fff" />;
    }
    return <Text />;
  };

  const loadWhatsapp = () => {
    if (number) {
      return <Ionicons name="logo-facebook" size={52} color="#fff" />;
    }
    return <Text />;
  };

  return (
    <Modal
      transparent={modalVisibility}
      visible={modalVisibility}
      style={styles.matchMedias}
      onRequestClose={() => setModalVisibility(false)}
    >

      <TouchableOpacity activeOpacity={1} disabled style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.text}>
            Redes Sociais de
            {' '}
            {match.name}
          </Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${instagram}`)}>
              {loadInstagram()}
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={() => Linking.openURL(`https://www.facebook.com/${facebook}`)}>
              {loadFacebook()}
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${number}`)}>
              {loadWhatsapp()}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }} onPress={() => setModalVisibility(false)}>
            <Text style={{ color: 'blue', fontSize: 30 }}> Sair </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
