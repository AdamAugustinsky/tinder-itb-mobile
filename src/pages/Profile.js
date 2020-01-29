import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Header from '../components/MainHeader';
import MatchImage from '../components/MatchImage';
import Button from '../components/Button';

export default function Profile( props)  {
  const { navigate } = props.navigation;

  return (
    <>
    <Header navigate={navigate} profile={true} />
    <View style={styles.container}>
      <MatchImage />
    </View>
    <View style={styles.buttons}>
      <TouchableOpacity onPress={() => navigate('ProfileConfigs')}>
        <Button text='Meu Perfil'/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('Login')}>
        <Button text='Sair'/>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'center',
  }
})