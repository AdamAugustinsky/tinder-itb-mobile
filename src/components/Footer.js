import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Svg, {SvgUri} from 'react-native-svg';

export default function Footer() {
  return(
    <View style={styles.footer}>
      <TouchableOpacity style={styles.dislike}>
        <SvgUri uri="https://svgshare.com/i/HW4.svg"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dislike}>
        <SvgUri uri='https://svgshare.com/i/HVi.svg'/>
      </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    bottom: 0,
    alignItems: 'center'
  },
  dislike: {
    left: '50%',
    marginLeft: '18%',
  }
});