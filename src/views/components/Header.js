import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {SvgUri } from 'react-native-svg';

export default function Header( props ) {
  
  const [profile, setProfile] = useState('https://svgshare.com/i/HUJ.svg');
  const [main, setMain] = useState('https://svgshare.com/i/HWj.svg');
  const [message, setMessage] = useState('https://svgshare.com/i/HW2.svg');
  
  useEffect(() => {

    if(props.profile) {
      setProfile('');
      setProfile('https://svgshare.com/i/HVD.svg');
    }
    
    if(props.main) {
      setMain('');
      setMain('https://svgshare.com/i/HX4.svg');
    }

    if(props.message) {
      setMessage('');
      setMessage('https://svgshare.com/i/HWG.svg');
    }

  },[])
  
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
