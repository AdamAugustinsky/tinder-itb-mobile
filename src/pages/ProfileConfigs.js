/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BackArrow from '../assets/backArrow.svg';

import SquaredTextInput from '../components/SquaredTextInput';
import Select from '../components/Select';

import api from '../services/api';

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

  const [nome, setNome] = useState();
  const [genero, setGenero] = useState();
  const [escola, setEscola] = useState();
  const [escolas, setEscolas] = useState([]);
  const [curso, setCurso] = useState();
  const [cursos, setCursos] = useState([]);
  const [serie, setSerie] = useState();
  const [sala, setSala] = useState();

  const getSchoolsFromApi = async () => {
    const schools = await api.get('/schools');
    const listOfSchools = schools.data.map((school) => (
      // eslint-disable-next-line no-underscore-dangle
      { label: school.nome, value: school._id }));
    setEscolas(listOfSchools);
  };

  useEffect(() => {
    getSchoolsFromApi();
  }, []);

  const getCursosFromApi = async () => {
    const schools = await api.get(`/schools/${escola}`);
    const listOfCursos = schools.data.cursos.map((curs) => (
      { label: curs, value: curs }));
    setCursos(listOfCursos);
  };

  useEffect(() => {
    getCursosFromApi();
  }, [escola]);

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigate('Profile');
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
            items={escolas}
          />
          <Text style={styles.title}> Sua Turma</Text>
          <Text>Cursos</Text>
          <Select
            state={curso}
            setState={setCurso}
            items={cursos}
          />
          <SquaredTextInput name="Serie" state={serie} setState={setSerie} text="Digite a sua serie(1,2,3)" maxLength={1} />
          <SquaredTextInput name="Sala" state={sala} setState={setSala} text="Digite a letra da sua Turma" maxLength={1} />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};


const MatchProfile = ({ navigation }) => {
  const { navigate } = navigation;

  const [genero, setGenero] = useState();
  const [escola, setEscola] = useState();
  const [escolas, setEscolas] = useState([]);
  const [curso, setCurso] = useState();
  const [cursos, setCursos] = useState([]);
  const jwt = navigation.getParam('jwt');
  const myId = navigation.getParam('myId');

  const getSchoolsFromApi = async () => {
    const schools = await api.get('/schools');
    const listOfSchools = schools.data.map((school) => (
      // eslint-disable-next-line no-underscore-dangle
      { label: school.nome, value: school._id }));
    setEscolas(listOfSchools);
  };

  useEffect(() => {
    getSchoolsFromApi();
  }, []);

  const getCursosFromApi = async () => {
    const schools = await api.get(`/schools/${escola}`);
    const listOfCursos = schools.data.cursos.map((curs) => (
      { label: curs, value: curs }));
    setCursos(listOfCursos);
  };

  useEffect(() => {
    getCursosFromApi();
  }, [escola]);

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
            items={escolas}
          />
          <Text>Cursos</Text>
          <Select
            state={curso}
            setState={setCurso}
            items={cursos}
          />
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
