/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  ScrollView, KeyboardAvoidingView, Text, StyleSheet, TouchableOpacity, TextInput, Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import SquaredTextInput from '../components/SquaredTextInput';
import Select from '../components/Select';
import Button from '../components/Button';

import api from '../services/api';

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
    justifyContent: 'center',
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

  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const [nome, setNome] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [genero, setGenero] = useState('');
  const [escola, setEscola] = useState('');
  const [escolas, setEscolas] = useState([]);
  const [curso, setCurso] = useState('');
  const [cursos, setCursos] = useState([]);
  const [serie, setSerie] = useState();
  const [sala, setSala] = useState('');
  const [bio, setBio] = useState('');
  const [turno, setTurno] = useState('');
  const [showMe, setShowMe] = useState(true);


  const [numero, setNumero] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');

  const showPicker = () => {
    setIsPickerVisible(true);
  };

  const hidePicker = () => {
    setIsPickerVisible(false);
  };

  const parseData = (date) => `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

  const handleConfirm = (date) => {
    hidePicker();
    setBirthDate(parseData(date));
  };

  const handleCheck = () => {
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
      myPassword: navigation.getParam('password'),
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
  };

  useEffect(() => {
    setNome(navigation.getParam('name'));

    const getSchoolsFromApi = async () => {
      const schools = await api.get('/schools');
      const listOfSchools = schools.data.map((school) => (
        { label: school.nome, value: school._id }));
      setEscolas(listOfSchools);
    };

    getSchoolsFromApi();
  }, []);

  useEffect(() => {
    const getCursosFromApi = async () => {
      const schools = await api.get(`/schools/${escola}`);
      const listOfCursos = schools.data.cursos.map((curs) => (
        { label: curs, value: curs }));
      setCursos(listOfCursos);
    };

    getCursosFromApi();
  }, [escola]);

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
          <TouchableOpacity onPress={showPicker} style={styles.inputField}>
            <Text style={{ alignSelf: 'center' }}>{birthDate ? `${birthDate}` : 'Clique para colocar a data de nascimento'}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isPickerVisible}
            style={styles.datepicker}
            value={birthDate}
            onConfirm={handleConfirm}
            onCancel={hidePicker}
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
            items={escolas}
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
