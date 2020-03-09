/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, View,
} from 'react-native';

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
  header: {
    width: '100%',
    flexDirection: 'row',
  },
  pretendente: {
    width: '50%',
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  voce: {
    width: '50%',
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MyProfile = () => {
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
        <Text>Serie</Text>
        <Select
          state={serie}
          setState={setSerie}
          items={[
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
          ]}
        />
        <SquaredTextInput name="Sala" state={sala} setState={setSala} text="Digite a letra da sua Turma" maxLength={1} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const MatchProfile = () => {
  const [genero, setGenero] = useState();
  const [escola, setEscola] = useState();
  const [escolas, setEscolas] = useState([]);
  const [curso, setCurso] = useState();
  const [cursos, setCursos] = useState([]);

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
  );
};

const ProfileConfigs = ({ navigation }) => {
  const [currentScreen, setCurrentScreen] = useState(<MyProfile />);

  const changeCurrentScreen = (componentId) => {
    if (componentId === 1 && currentScreen !== <MyProfile />) {
      setCurrentScreen(<MyProfile />);
    } else if (componentId === 2 && currentScreen !== <MatchProfile />) {
      setCurrentScreen(<MatchProfile />);
    }
  };

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Profile')}
        >
          <BackArrow width={30} height={30} />
        </TouchableOpacity>
        <View style={styles.header}>
          <TouchableOpacity style={styles.voce} onPress={() => changeCurrentScreen(1)}>
            <Text style={{ fontSize: 20 }}>Você</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pretendente} onPress={() => changeCurrentScreen(2)}>
            <Text style={{ fontSize: 20 }}>Pretendente</Text>
          </TouchableOpacity>
        </View>
      </View>
      {currentScreen}
    </>
  );
};

export default ProfileConfigs;
