/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import SquaredTextInput from '../components/SquaredTextInput';
import Select from '../components/Select';
import Button from '../components/Button';


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
  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  datepicker: {
    position: 'relative',
    width: 300,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
  },
});

const MyTriagem = ({ navigation }) => {
  const { navigate } = navigation;

  const [nome, setNome] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [curso, setCurso] = useState('');
  const [serie, setSerie] = useState();
  const [sala, setSala] = useState('');

  useEffect(() => {
    setNome(JSON.stringify(navigation.getParam('name')));
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.container}>
          <Text style={styles.title}> Você</Text>
          <SquaredTextInput name="Nome" state={nome} setState={setNome} text="Digite o seu Nome" />
          <Text>
            Data de Nascimento
          </Text>
          <DatePicker
            style={styles.datepicker}
            format="YYYY/MM/DD"
            date={birthDate}
            onDateChange={setBirthDate}
          />
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('MatchTriagem', {
            myNome: nome,
            myEmail: JSON.stringify(navigation.getParam('email')),
            myBirthDate: birthDate,
            myGenero: genero,
            myEscola: escola,
            myCurso: curso,
            mySerie: serie,
            mySala: sala,
          })}
        >
          <Button text="Proximo" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};
export default MyTriagem;
