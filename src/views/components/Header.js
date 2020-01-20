import React, {useState} from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';

import profileIcon from '../assets/icons/profileIcon.png';
import activeProfileIcon from '../assets/icons/activeProfileIcon.png';
import mainIcon from '../assets/icons/mainIcon.png';
import activeMainIcon from '../assets/icons/activeMainIcon.png';
import messageIcon from '../assets/icons/messageIcon.png';
import activeMessageIcon from '../assets/icons/activeMessageIcon.png';


export default function Header( props ) {

  const [profile, setProfile] = useState(profileIcon);
  const [main, setMain] = useState(activeMainIcon);
  const [message, setMessage] = useState(messageIcon);
  
  return(
    <View style={styles.header}>
      
      <TouchableOpacity onPress={() => {
        setMain(mainIcon);
        setProfile(activeProfileIcon);
        setMessage(messageIcon);
        props.navigate('Profile')}}>
        <Image style={styles.icon} source={profile} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setMain(activeMainIcon);
        setProfile(profileIcon);
        setMessage(messageIcon);
        props.navigate('Home')}}>
        <Image style={styles.mainIcon} source={main}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        setMain(mainIcon);
        setProfile(profileIcon);
        setMessage(activeMessageIcon);
        props.navigate('Message')}}>
        <Image style={styles.icon} source={message}/>
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
