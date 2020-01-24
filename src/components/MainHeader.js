import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import MainIcon from '../assets/icons/mainIcon.svg';
import ActiveMainIcon from '../assets/icons/activeMainIcon.svg';
import ProfileIcon from '../assets/icons/profileIcon.svg';
import ActiveProfileIcon from '../assets/icons/activeProfileIcon.svg';
import MessageIcon from '../assets/icons/messageIcon.svg';
import ActiveMessageIcon from '../assets/icons/activeMessageIcon.svg';

export default function Header( props ) {
  
  
  function setProfileIcon() {
    if(props.profile){
      return <ActiveProfileIcon />;
    } else {
      return <ProfileIcon />
    }
  }
  
  function setMainIcon() {
    if(props.main){
      return <ActiveMainIcon />;
    } else {
      return <MainIcon />
    }
  }

  function setMessageIcon() {
    if(props.message){
      return <ActiveMessageIcon />;
    } else {
      return <MessageIcon />
    }
  }

  const profileIcon = setProfileIcon();
  const mainIcon = setMainIcon();
  const messageIcon = setMessageIcon();

  return(
    <View style={styles.header}>
      
      <TouchableOpacity style={styles.icon} onPress={() => props.navigate('Profile')}>
        {profileIcon}
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => props.navigate('Home')}>
        {mainIcon}
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => props.navigate('Messages')}>
        {messageIcon}
      </TouchableOpacity>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    marginLeft: '15%'
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: '20%',
  },
  mainIcon: {
    width: 45,
    height: 60,
    marginRight: '20%'
  },
})
