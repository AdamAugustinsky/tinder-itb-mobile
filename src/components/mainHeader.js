import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {SvgUri } from 'react-native-svg';

export default function Header( props ) {
  
  function setProfile() {
    if (props.profile) {
      return props.profile;
    } else {
      return 'https://svgshare.com/i/HUJ.svg';
    }
  }

  function setMain() {
    if (props.main) {
      return props.main;
    } else {
      return 'https://svgshare.com/i/HWj.svg';
    }
  }

  function setMessage() {
    if (props.message) {
      return props.message;
    } else {
      return 'https://svgshare.com/i/HW2.svg';
    }
  }

  const profile = setProfile();

  const main = setMain();
  
  const message = setMessage();
  
  return(
    <View style={styles.header}>
      
      <TouchableOpacity style={styles.icon} onPress={() => props.navigate('Profile')}>
        <SvgUri uri={profile}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => props.navigate('Home')}>
        <SvgUri uri={main}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icon} onPress={() => props.navigate('Messages')}>
        <SvgUri uri={message}/>
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
