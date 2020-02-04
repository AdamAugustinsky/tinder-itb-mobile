/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import SquaredTextInput from '../components/SquaredTextInput';
import Select from '../components/Select';
import Button from '../components/Button';

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

  const handleCadastro = async () => {
    navigate('Home');
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
