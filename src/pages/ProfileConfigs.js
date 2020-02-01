/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ScrollView, Text, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BackArrow from '../assets/backArrow.svg';

import SquaredTextInput from '../components/SquaredTextInput';
import Select from '../components/Select';


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignSelf: 'center',
  },
  back: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  top: {
    width: '100%',
    backgroundColor: '#FD3477',
    paddingBottom: 10,
  },
  inputField: {
    position: 'relative',
    width: 300,
    height: 40,
    marginTop: 5,

    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(45, 45, 45, 0.32)',
  },
});

const MyProfile = ({ navigation }) => {
  const { navigate } = navigation;

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [curso, setCurso] = useState('');
  const [turma, setTurma] = useState('');

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity style={styles.back} onPress={() => navigate('Profile')}>
          <BackArrow width={30} height={30} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <SquaredTextInput name="Nome" state={nome} setState={setNome} />
        <SquaredTextInput name="Idade" state={idade} setState={setIdade} />
        <Text>Genero</Text>
        <Select
          state={genero}
          setState={setGenero}
          items={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: '???', value: '???' }]}
        />
        <Text>Escola</Text>
        <Select
          state={escola}
          setState={setEscola}
          items={[
            { label: 'ITB Brasílio Flores de Azevedo', value: 'Belval' },
            { label: 'ITB Professor Munir José', value: 'Paulista' },
            { label: 'ITB Professora Maria Sylvia Chaluppe Mello', value: 'Engenho' },
            { label: 'ITB Professor Hércules Alves de Oliveira', value: 'Mutinga' },
            { label: 'ITB Professor Moacyr Domingos Sávio Veronezi', value: 'Imperial' },
            { label: 'ITB Professor Antonio Arantes Filho', value: 'Viana' }]}
        />
        <SquaredTextInput name="Curso" state={curso} setState={setCurso} />
        <SquaredTextInput name="Turma" state={turma} setState={setTurma} />
      </ScrollView>
    </>
  );
};


const MatchProfile = ({ navigation }) => {
  const { navigate } = navigation;

  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [curso, setCurso] = useState('');
  const [turma, setTurma] = useState('');

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity style={styles.back} onPress={() => navigate('Profile')}>
          <BackArrow width={30} height={30} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <Text>Genero</Text>
        <Select
          state={genero}
          setState={setGenero}
          items={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: '???', value: '???' }]}
        />
        <Text>Escola</Text>
        <Select
          state={escola}
          setState={setEscola}
          items={[
            { label: 'ITB Brasílio Flores de Azevedo', value: 'Belval' },
            { label: 'ITB Professor Munir José', value: 'Paulista' },
            { label: 'ITB Professora Maria Sylvia Chaluppe Mello', value: 'Engenho' },
            { label: 'ITB Professor Hércules Alves de Oliveira', value: 'Mutinga' },
            { label: 'ITB Professor Moacyr Domingos Sávio Veronezi', value: 'Imperial' },
            { label: 'ITB Professor Antonio Arantes Filho', value: 'Viana' }]}
        />
        <SquaredTextInput name="Curso" state={curso} setState={setCurso} />
        <SquaredTextInput name="Turma" state={turma} setState={setTurma} />
      </ScrollView>
    </>
  );
};

export default createBottomTabNavigator({
  Você: {
    screen: MyProfile,
    navigationOptions: {
      activeColor: '#000',
    },
  },
  Pretendente: MatchProfile,
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 25,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      backgroundColor: '#FD3477',
    },
    activeTintColor: '#fff',
    inactiveTintColor: '#000',
  },
});
