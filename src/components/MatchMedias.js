import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import InstagramLogo from '../assets/instagram.svg';
import WhatsappLogo from '../assets/whatsapp.svg';
import FacebookLogo from '../assets/facebook.svg';

export default function MatchMedias( props ) {

  const {instagramUsername, facebookUsername, whatsappNumber} = props.matchContacts

  function loadWhatsapp(whatsappNumber) {
    if(whatsappNumber) {
      return <WhatsappLogo width='50' height='50' />
    } else {
      return <Text />
    }
  }

  function loadInstagram(instagramusername) {
    if(instagramusername) {
      return <InstagramLogo width='50' height='50' />
    } else {
      return <Text />
    }
  }
  
  function loadFacebook(facebookUsername) {
    if(facebookUsername) {
      return <FacebookLogo width='50' height='50' />
    } else {
      return <Text />
    }
  }

  return (
    <TouchableOpacity activeOpacity={1} disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.text}>Redes Sociais de {props.matchContacts.name}</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${instagramUsername}`)}>
            {loadInstagram(instagramUsername)}
          </TouchableOpacity>
          <View style={styles.space}/>
          <TouchableOpacity onPress={() => Linking.openURL(`https://www.facebook.com/${facebookUsername}`)}>
            {loadFacebook(facebookUsername)}
          </TouchableOpacity>
          <View style={styles.space}/>
          <TouchableOpacity onPress={() => Linking.openURL(`https://wa.me/${whatsappNumber}`)}>
            {loadWhatsapp(whatsappNumber)}
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 20}} onPress={() => props.changeModalVisibility(false)}>
          <Text style={{color: 'blue', fontSize: 30}}> Sair </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: 300,
    height: 150,
    
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 30

  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    top: 0,
    alignSelf: 'center'
  },
  space: {
    width: '10%'
  },
  icons: {
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center',
  }
});