/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import SquaredTextInput from '../components/SquaredTextInput';
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
  const [curso, setCurso] = useState('');
  const [serie, setSerie] = useState();

  const getprm = navigation.getParam;

  const handleCadastro = async () => {
    const response = await api.post('/users', {
      nome: getprm('myNome'),
      password: getprm('myPassword'),
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
      show_me: getprm('show_me'),
      escola: getprm('myEscola'),
      curso: getprm('myCurso'),
    });

    navigate('Home', {
      _id: response.data,
    });
  };

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
            items={[
              { label: 'ITB Brasílio Flores de Azevedo(Belval)', value: 'ITB BRASÍLIO FLORES DE AZEVEDO' },
              { label: 'ITB Professor Munir José(Paulista)', value: 'ITB PROF.º MUNIR JOSÉ' },
              { label: 'ITB Professora Maria Sylvia Chaluppe Mello(Engenho)', value: 'ITB PROF.ª MARIA SYLVIA CHALUPPE MELLO' },
              { label: 'ITB Professor Hércules Alves de Oliveira(Mutinga)', value: 'ITB PROF.º HERCULES ALVES DE OLIVEIRA' },
              { label: 'ITB Professor Moacyr Domingos Sávio Veronezi(Imperial)', value: 'ITB PROF.º MOACYR DOMINGOS SAVIO VERONEZI' },
              { label: 'ITB Professor Antonio Arantes Filho(Viana)', value: 'ITB PROF.º ANTONIO ARANTES FILHO' }]}
          />
          <SquaredTextInput name="Curso" state={curso} setState={setCurso} text="Digite o Curso dos pretendentes" />
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
