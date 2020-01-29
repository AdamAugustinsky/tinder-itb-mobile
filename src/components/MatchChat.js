import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, Linking, Alert} from 'react-native';

export default function MatchChat( props ) {
  
  function showMatchInformations( props ) {
    Alert.alert(`Redes sociais de ${props.name}`, '', [
      {text: 'Whatsapp', onPress: () => Linking.openURL(`https://wa.me/${props.number}`)},
      {text: 'Facebook', onPress: () => Linking.openURL(`https://www.facebook.com/${props.facebookUsername}`)},
      {text: 'Instagram', onPress: () => Linking.openURL(`https://www.instagram.com/${props.instagramUsername}`)},
    ],  {cancelable: true})
    //  
  }

  return(
    <TouchableOpacity style={styles.chat} onPress={() => showMatchInformations( props )}>
      <Image style={styles.image} source={props.icon} />
      <Text style={styles.name}> {props.name} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  chat: {
    width: '100%',
    height: 80,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'

  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  name: {
    fontSize: 30,
    fontWeight: '500',
  },
})