import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, Linking} from 'react-native';

export default function MatchChat( props ) {
  return(
    <TouchableOpacity style={styles.chat} onPress={() => Linking.openURL(`https://wa.me/${props.number}`)}>
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