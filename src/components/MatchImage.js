/* eslint-disable react/prop-types */
import React from 'react';
import {
  ImageBackground, Text, View, StyleSheet,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import School from '../assets/school.svg';
import Grade from '../assets/grade.svg';

const styles = StyleSheet.create({
  profileImage: {
    width: '100%',
    maxWidth: 350,
    height: '100%',
    maxHeight: 550,
  },
  description: {
    marginLeft: 20,
    position: 'absolute',
    bottom: 10,
  },
  texts: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
  },
  name: {
    fontSize: 32,
    fontWeight: '500',
  },
  icon: {
    height: 20,
    width: 20,
  },
});

const MatchImage = ({ match }) => (
  <ImageBackground
    style={styles.profileImage}
    imageStyle={{ borderRadius: 25 }}
    source={match.icon}
  >
    <LinearGradient
      style={{ width: '100%', height: '100%', borderRadius: 25 }}
      colors={['transparent', '#000']}
      start={[0.3, 0.4]}
      end={[2, 2]}
    >
      <View style={styles.description}>
        <Text style={styles.texts}>
          <Text style={styles.name}>
            {match.name}
            {', '}
          </Text>
          {match.age}
        </Text>
        <Text style={styles.texts}>
          <School />
          {match.school}
        </Text>
        <Text style={styles.texts}>
          <Grade />
          {match.grade}
        </Text>
      </View>
    </LinearGradient>
  </ImageBackground>
);

export default MatchImage;
