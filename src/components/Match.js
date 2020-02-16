/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Linking, Modal, Image,
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
    backgroundColor: '#c0c0c0',
    borderRadius: 30,

  },
  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: 'rgba(45, 45, 45, 0.7)',
  },
  space: {
    width: '10%',
  },
  icons: {
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center',
  },
  match: {
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#2D2D2D',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 25,
  },
  fotos: {
    flexDirection: 'row',
  },
});

const MatchChatMedias = ({
  match, isMatch, setIsMatch,
}) => {
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
      transparent
      visible={isMatch}
      style={styles.matchMedias}
    >

      <TouchableOpacity activeOpacity={1} disabled style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.match}>
            MATCH!!!!
          </Text>
          <Text style={styles.text}>
            Você e
            {' '}
            {match.name}
            {' '}
            deram match
          </Text>
          <View style={styles.fotos}>
            <Image style={styles.image} />
            <View style={styles.space} />
            <Image style={styles.image} />
          </View>
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
          <TouchableOpacity style={{ alignItems: 'center', marginTop: 20 }} onPress={() => setIsMatch(false)}>
            <Text style={{ color: 'blue', fontSize: 30 }}> Sair </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MatchChatMedias;
