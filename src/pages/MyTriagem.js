/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput, Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  inputArea: {
    position: 'relative',
    width: 300,
    height: 160,
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
  const [bio, setBio] = useState('');
  const [turno, setTurno] = useState('');
  const [showMe, setShowMe] = useState(true);
  const [numero, setNumero] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');

  useEffect(() => {
    setNome(navigation.getParam('name'));
  }, []);

  function handleCheck() {
    if (!nome) {
      Alert.alert('', 'Digite o nome');
      return false;
    } if (!bio) {
      Alert.alert('', 'Digite a sua descrição');
      return false;
    } if (!genero) {
      Alert.alert('', 'Digite o genero');
      return false;
    } if (!escola) {
      Alert.alert('', 'Digite o escola');
      return false;
    } if (!turno) {
      Alert.alert('', 'Digite o turno');
      return false;
    } if (!numero && !instagram && !twitter && !facebook) {
      Alert.alert('', 'Digite alguma rede social');
      return false;
    } if (!curso) {
      Alert.alert('', 'Digite o curso');
      return false;
    } if (!serie) {
      Alert.alert('', 'Digite o serie');
      return false;
    } if (!sala) {
      Alert.alert('', 'Digite a letra da sua sala');
      return false;
    }
    return navigate('MatchTriagem', {
      myNome: nome,
      myBio: bio,
      myEmail: navigation.getParam('email'),
      myBirthDate: birthDate,
      myGenero: genero,
      myEscola: escola,
      myCurso: curso,
      mySerie: serie,
      mySala: sala,
      myTurno: turno,
      myInstagram: instagram,
      myTwitter: twitter,
      myFacebook: facebook,
      myNumero: numero,
      show_me: showMe,
    });
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.container}>
          <Text style={styles.title}> Você</Text>
          <SquaredTextInput name="Nome" state={nome} setState={setNome} text="Digite o seu Nome" />
          <Text>Descrição</Text>
          <TextInput
            style={styles.inputArea}
            placeholder="     Descrição"
            multiline
            numberOfLines={40}
            onChangeText={setBio}
            value={bio}
          />
          <Text>
            Data de Nascimento
          </Text>
          <DateTimePicker
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
          <Text>Turno</Text>
          <Select
            state={turno}
            setState={setTurno}
            items={[
              { label: 'Manhã', value: 'Manhã' },
              { label: 'Tarde', value: 'Tarde' },
              { label: 'Noite', value: 'Noite' }]}
          />
          <Text>Me Mostrar no Tinder</Text>
          <Select
            state={showMe}
            setState={setShowMe}
            placeholder="Sim"
            items={[
              { label: 'Sim', value: true },
              { label: 'Não', value: false },
            ]}
          />
          <SquaredTextInput name="Instagram" state={instagram} setState={setInstagram} text="Digite o seu user do instagram" />
          <SquaredTextInput name="Facebook" state={facebook} setState={setFacebook} text="Digite o seu user do facebook" />
          <SquaredTextInput name="Twitter" state={twitter} setState={setTwitter} text="Digite o seu user do Twitter" />
          <SquaredTextInput name="Whatsapp" state={numero} setState={setNumero} text="Digite o seu numero do whatsapp" />
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
          onPress={() => handleCheck()}
        >
          <Button text="Proximo" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
};
export default MyTriagem;
