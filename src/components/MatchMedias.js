/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Linking, Modal,
} from 'react-native';

import InstagramLogo from '../assets/instagram.svg';
import WhatsappLogo from '../assets/whatsapp.svg';
import FacebookLogo from '../assets/facebook.svg';


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

const MatchMedias = ({ match, modalVisibility, setModalVisibility }) => {
  const { instagramUsername, facebookUsername, whatsappNumber } = match;

  const loadInstagram = () => {
    if (instagramUsername) {
      return <InstagramLogo width="50" height="50" />;
    }
    return <Text />;
  };
  const loadFacebook = () => {
    if (facebookUsername) {
      return <FacebookLogo width="50" height="50" />;
    }
    return <Text />;
  };

  const loadWhatsapp = () => {
    if (whatsappNumber) {
      return <WhatsappLogo width="50" height="50" />;
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
            <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${instagramUsername}`)}>
              {loadInstagram()}
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={() => Linking.openURL(`https://www.facebook.com/${facebookUsername}`)}>
              {loadFacebook()}
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${whatsappNumber}`)}>
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
};

export default MatchMedias;
