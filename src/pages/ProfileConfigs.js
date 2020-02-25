/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BackArrow from '../assets/backArrow.svg';

import SquaredTextInput from '../components/SquaredTextInput';
import Select from '../components/Select';


const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignSelf: 'center',
    marginBottom: 50,
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
  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});

const MyProfile = ({ navigation }) => {
  const { navigate } = navigation;

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [curso, setCurso] = useState('');
  const [serie, setSerie] = useState();
  const [sala, setSala] = useState('');
  const jwt = navigation.getParam('jwt');
  const myId = navigation.getParam('myId');

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            console.log(jwt);
            console.log(myId);

            navigate('Profile', { jwt, myId });
          }}
        >
          <BackArrow width={30} height={30} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >

        <ScrollView style={styles.container}>
          <Text style={styles.title}> Você</Text>
          <SquaredTextInput name="Nome" state={nome} setState={setNome} text="Digite o seu Nome" />
          <SquaredTextInput name="Idade" state={idade} setState={setIdade} text="Digite a sua Idade" />
          <Text>Genero</Text>
          <Select
            state={genero}
            setState={setGenero}
            items={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' }]}
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
          <Text style={styles.title}> Sua Turma</Text>
          <SquaredTextInput name="Curso" state={curso} setState={setCurso} text="Digite o seu curso" />
          <SquaredTextInput name="Serie" state={serie} setState={setSerie} text="Digite a sua serie(1,2,3)" maxLength={1} />
          <SquaredTextInput name="Sala" state={sala} setState={setSala} text="Digite a letra da sua Turma" maxLength={1} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};


const MatchProfile = ({ navigation }) => {
  const { navigate } = navigation;

  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [curso, setCurso] = useState('');
  const [serie, setSerie] = useState();
  const jwt = navigation.getParam('jwt');
  const myId = navigation.getParam('myId');

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigate('Profile', { jwt, myId })}
        >
          <BackArrow width={30} height={30} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >

        <ScrollView style={styles.container}>
          <Text>Genero</Text>
          <Select
            state={genero}
            setState={setGenero}
            items={[
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' }]}
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
          <SquaredTextInput name="Curso" state={curso} setState={setCurso} text="Digite o Curso dos pretendentes" />
          <SquaredTextInput name="Serie" state={serie} setState={setSerie} text="Digite a Serie dos pretendentes(1,2,3)" maxLength={1} />
          <Text>Para abrangir um publico maior, não preencha</Text>
        </ScrollView>
      </KeyboardAvoidingView>
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
