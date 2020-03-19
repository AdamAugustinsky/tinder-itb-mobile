import {
  KeyboardAvoidingView, Text, TextInput, StyleSheet, ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import Logo from '../../assets/logo.svg';
import globalStyles from '../../styles/entryStyle';
import BorderedTextInput from '../../components/BorderedTextInput';
import Select from '../../components/Select';
import Button from '../../components/Button';


const About = ({ navigation }) => {
  const { navigate } = navigation;

  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  const [gender, setGender] = useState('');
  const genders = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
  ];
  const [isGenderValid, setIsGenderValid] = useState(true);

  const [date, setDate] = useState('');
  const [isDateValid, setIsDateValid] = useState(true);

  const [bio, setBio] = useState('');
  const [isBioValid, setIsBioValid] = useState(true);

  const styles = StyleSheet.create({
    bigInput: {
      width: '80%',
      height: 200,

      marginTop: 20,

      borderWidth: 1,
      borderColor: isBioValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,

      paddingLeft: 20,
      paddingTop: 16,
      textAlignVertical: 'top',
    },
    scroll: {
      flex: 1,
    },
    container: {
      marginTop: 80,
      marginBottom: 20,
    },
    inputField: {
      position: 'relative',
      width: '80%',
      height: 46,
      marginTop: 15,

      borderWidth: 1,
      borderColor: isDateValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,

      paddingLeft: 16,
    },
  });

  function checkIsDateValid(value, title) {
    if (value === '') {
      setIsDateValid(false);
      setDate('');
      return Alert.alert(title, 'Digite sua data de nascimento');
    }

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(new Date(`${value.substring(3, 5)}/${value.substring(0, 2)}/${value.substring(6)}`)
      .getTime())
    || value.length !== 10) {
      setIsDateValid(false);
      setDate('');
      return Alert.alert(title, 'Data de nascimento inválida');
    }

    const today = new Date().getFullYear();
    const birthdate = parseInt(`${value.substring(6)}`, 10);

    if (today <= birthdate + 12 || today > birthdate + 25) {
      setIsDateValid(false);
      setDate('');
      return Alert.alert(title, 'Idade inválida');
    }

    setIsDateValid(true);

    return `${value.substring(6)}-${value.substring(3, 5)}-${value.substring(0, 2)}`;
  }

  const handleNavigation = () => {
    const title = 'Erro de validação';

    if (!name || name.trim().split(' ').length < 2) {
      setIsNameValid(false);
      setName('');
      return Alert.alert(title,
        'Digite seu nome completo');
    }
    setIsNameValid(true);

    if (!gender) {
      setIsGenderValid(false);
      return Alert.alert(title, 'Escolha seu gênero');
    }
    setIsGenderValid(true);

    checkIsDateValid(date, title);

    if (!bio) {
      setIsBioValid(false);
      return Alert.alert(title, 'Digite sua descrição');
    }

    return navigate('School');
  };


  return (
    <ScrollView style={styles.scroll}>
      <KeyboardAvoidingView
        behavior="padding"
        style={[globalStyles.container, styles.container]}
      >
        <Logo style={globalStyles.logo} />
        <Text style={globalStyles.title}>Sobre Você</Text>

        <BorderedTextInput
          name="Digite seu nome completo"
          autoCorrect
          state={name}
          setState={setName}
          autoCapitalize="words"
          isValid={isNameValid}
        />

        <Select
          items={genders}
          placeHolder="Escolha seu gênero"
          setState={setGender}
          state={gender}
          isValid={isGenderValid}
        />

        <TextInputMask
          style={styles.inputField}
          onChangeText={setDate}
          value={date}
          type="datetime"
          options={{
            format: 'DD/MM/YYYY',
          }}
          placeholder="Digite sua data de nascimento"
          placeholderTextColor={isDateValid ? '#c0c0c0' : '#EF173E'}

        />

        <TextInput
          multiline
          numberOfLines={40}
          placeholder="Fale sobre você..."
          onChangeText={setBio}
          value={bio}
          style={styles.bigInput}
          placeholderTextColor={isBioValid ? '#c0c0c0' : '#EF173E'}
        />

        <TouchableOpacity onPress={handleNavigation}>
          <Button text="Avançar" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default About;
