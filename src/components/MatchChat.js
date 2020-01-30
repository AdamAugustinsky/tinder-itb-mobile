import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, Linking, Alert} from 'react-native';

export default function MatchChat( props ) {
  
  return(
    <TouchableOpacity style={styles.chat} onPress={() => {
      props.setMatchContacts(props.match);
      props.changeModalVisibility(true);
    }}>
      <Image style={styles.image} source={props.match.icon} />
      <Text style={styles.name}> {props.match.name} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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