/* eslint-disable react/prop-types */
import React from 'react';
import {
  TouchableOpacity, Text, Image, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

  chat: {
    width: '100%',
    height: 80,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',

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
});


const MatchChat = ({ match, setMatchContacts, changeModalVisibility }) => {
  const { icon, name } = match;

  return (
    <TouchableOpacity
      style={styles.chat}
      onPress={() => {
        setMatchContacts(match);
        changeModalVisibility(true);
      }}
    >
      <Image style={styles.image} source={icon} />
      <Text style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default MatchChat;
