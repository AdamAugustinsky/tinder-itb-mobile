/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Select from '../components/Select';
import Button from '../components/Button';

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
  button: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  datepicker: {
    position: 'relative',
    width: 300,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
  },
});

const MatchTriagem = ({ navigation }) => {
  const { navigate } = navigation;

  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [escolas, setEscolas] = useState([]);
  const [serie, setSerie] = useState();

  const getprm = navigation.getParam;

  const handleCadastro = async () => {
    await api.post('/users', {
      nome: getprm('myNome'),
      genero: getprm('myGenero'),
      data_nascimento: getprm('myBirthDate'),
      bio: getprm('myBio'),
      email: getprm('myEmail'),
      contatos: {
        numero: getprm('myNumero'),
        twitter: getprm('myTwitter'),
        facebook: getprm('myFacebook'),
        instagram: getprm('myInstagram'),
      },
      ano: getprm('mySerie'),
      periodo: getprm('myTurno'),
      sala: getprm('mySala'),
      escola: getprm('myEscola'),
      curso: getprm('myCurso'),
      password: getprm('myPassword'),
      prefs: {
        genero,
        escola,
        serie,
      },
    });


    const response = await api.post('/sessions', {
      email: getprm('myEmail'),
      password: getprm('myPassword'),
    });

    navigate('Home', {
      // eslint-disable-next-line no-underscore-dangle
      myId: response.data.user.id,
      jwt: response.data.jwt,
    });
  };

  useEffect(() => {
    const getSchoolsFromApi = async () => {
      const schools = await api.get('/schools');
      const listOfSchools = schools.data.map((school) => (
        // eslint-disable-next-line no-underscore-dangle
        { label: school.nome, value: school._id }));
      setEscolas(listOfSchools);
    };

    getSchoolsFromApi();
  }, []);

  return (
    <>
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
              { label: 'Masculino', value: 'Masculino' },
              { label: 'Feminino', value: 'Feminino' }]}
          />
          <Text>Escola</Text>
          <Select
            state={escola}
            setState={setEscola}
            items={escolas}
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
          <Text>Para abrangir um publico maior, não preencha</Text>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => handleCadastro()}>
          <Button text="Finalizar" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};

export default MatchTriagem;
