import React, { useEffect, useState } from 'react';
import {
  View, ImageBackground, Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons, Feather } from '@expo/vector-icons';

import styles from './styles';

export default function TargetCard({ user }) {
  const [matchAge, setMatchAge] = useState(0);

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
    if (user) {
      const birthDate = new Date(user.birthdate);
      setMatchAge(calculateAge(birthDate.getMonth(), birthDate.getDate(),
        birthDate.getFullYear()));
    }
  }, [user]);

  return (
    <View>
      <ImageBackground
        source={{ uri: user.images[0] }}
        style={styles.background}
        imageStyle={styles.image}
      >
        <LinearGradient
          style={[styles.background]}
          colors={['transparent', '#2d2d2d']}
          start={[0, 0.3]}
          end={[0, 1]}
        >

          <View style={styles.body}>

            <View style={styles.group}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.age}>{matchAge}</Text>
            </View>

            <View style={styles.group}>
              <EvilIcons name="pencil" size={36} color="#fff" />
              <Text style={styles.school}>{user.school_name}</Text>
            </View>

            <View style={styles.group}>
              <Feather name="book" size={20} style={{ marginLeft: 4 }} color="#fff" />
              <Text style={[styles.school, { marginLeft: 12 }]}>
                {`${user.course} ${user.grade}${user.school_class} ${user.period}`}
              </Text>
            </View>
          </View>

        </LinearGradient>
      </ImageBackground>

    </View>
  );
}
