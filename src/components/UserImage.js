/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
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

const UserImage = ({ user }) => {
  const [userAge, setUserAge] = useState();

  const calculateAge = (birthMonth, birthDay, birthYear) => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();
    let age = todayYear - birthYear;

    if (todayMonth < (birthMonth - 1)) {
      age -= 1;
    }
    if (((birthMonth - 1) === todayMonth) && (todayDay < birthDay)) {
      age -= 1;
    }
    return age;
  };

  useEffect(() => {
    const setNewUserAge = async () => {
      const birthDate = new Date(user.birthdate);
      setUserAge(calculateAge(birthDate.getMonth(), birthDate.getDate(), birthDate.getFullYear()));
    };

    setNewUserAge();
  }, [user.birthdate]);

  return (
    <ImageBackground
      style={styles.profileImage}
      imageStyle={{ borderRadius: 25 }}
      source={user.icon}
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
              {user.name}
              {', '}
            </Text>
            {userAge}
          </Text>
          <Text style={styles.texts}>
            <School />
            {user.school_name}
          </Text>
          <Text style={styles.texts}>
            <Grade />
            {user.course}
            {' '}
            {user.grade}
            {user.school_class}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default UserImage;
