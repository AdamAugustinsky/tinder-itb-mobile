/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ImageBackground, Text, View, StyleSheet,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import School from '../assets/school.svg';
import Grade from '../assets/grade.svg';

import api from '../services/api';

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
    fontSize: 20,
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

const MatchImage = ({ match }) => {
  const [age, setAge] = useState('');
  const [schoolName, setSchoolName] = useState('');

  const getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let idade = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      idade -= 1;
    }
    setAge(idade);
  };

  const getSchoolName = async (schoolId) => {
    const response = await api.get(`/schools/${schoolId}`);
    setSchoolName(response.data.nome);
  };

  useEffect(() => {
    getAge(match.data_nascimento);
    getSchoolName(match.escola);
  }, []);

  return (
    <ImageBackground
      style={styles.profileImage}
      imageStyle={{ borderRadius: 25 }}
      source={match.icon}
    >
      <LinearGradient
        style={{ width: '100%', height: '100%', borderRadius: 25 }}
        colors={['transparent', '#000']}
        start={[0.3, 0.3]}
        end={[2, 2]}
      >
        <View style={styles.description}>
          <Text style={styles.texts}>
            <Text style={styles.name}>
              {match.nome}
              {', '}
            </Text>
            {age}
          </Text>
          <Text style={styles.texts}>
            <School />
            {schoolName}
          </Text>
          <Text style={styles.texts}>
            <Grade />
            {match.curso}
            {' '}
            {match.ano}
            {match.sala}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default MatchImage;
