/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import MainIcon from '../assets/icons/mainIcon.svg';
import ActiveMainIcon from '../assets/icons/activeMainIcon.svg';
import ProfileIcon from '../assets/icons/profileIcon.svg';
import ActiveProfileIcon from '../assets/icons/activeProfileIcon.svg';
import MessageIcon from '../assets/icons/messageIcon.svg';
import ActiveMessageIcon from '../assets/icons/activeMessageIcon.svg';

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: '15%',
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: '20%',
  },
  mainIcon: {
    width: 45,
    height: 60,
    marginRight: '20%',
  },
});

const Header = ({
  profile, main, message, navigate, jwt, myId,
}) => {
  const setProfileIcon = () => {
    if (profile) {
      return <ActiveProfileIcon />;
    }
    return <ProfileIcon />;
  };

  const setMainIcon = () => {
    if (main) {
      return <ActiveMainIcon />;
    }
    return <MainIcon />;
  };

  const setMessageIcon = () => {
    if (message) {
      return <ActiveMessageIcon />;
    }
    return <MessageIcon />;
  };

  const profileIcon = setProfileIcon();
  const mainIcon = setMainIcon();
  const messageIcon = setMessageIcon();

  return (
    <View style={styles.header}>

      <TouchableOpacity style={styles.icon} onPress={() => navigate('Profile', { jwt, myId })}>
        {profileIcon}
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => navigate('Home', { jwt, myId })}>
        {mainIcon}
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => navigate('Messages', { jwt, myId })}>
        {messageIcon}
      </TouchableOpacity>

    </View>

  );
};

export default Header;
