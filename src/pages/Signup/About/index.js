import {
  KeyboardAvoidingView, Text, TextInput, StyleSheet, ScrollView,
  Alert, View, Image,
} from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import logo from '../../../assets/logo/logo.png';

import globalStyles from '../../../styles/globalStyles';

import Input from '../../../components/TextInput';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import BackButton from '../../../components/BackButton';
import DateButton from '../../../components/DateButton';

import formattedDate from './utils/formattedDate';

export default function About() {
  const navigation = useNavigation();

  const { params } = useRoute();

  const { user } = params;

  const [name, setName] = useState(user.name);
  const [isNameValid, setIsNameValid] = useState(true);

  const [gender, setGender] = useState(user.gender);
  const genders = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
  ];
  const [isGenderValid, setIsGenderValid] = useState(true);

  const [date, setDate] = useState(user.inputBirthdate ? user.inputBirthdate : new Date());
  const [isDateValid, setIsDateValid] = useState(true);
  const [bio, setBio] = useState(user.bio);
  const [isBioValid, setIsBioValid] = useState(true);

  const styles = StyleSheet.create({
    bigInput: {
      width: '80%',
      height: 200,

      marginTop: 4,

      borderWidth: 1,
      borderColor: isBioValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,

      paddingHorizontal: 20,
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
    view: {
      width: '100%',
      alignItems: 'center',
    },
    title: {
      alignSelf: 'flex-start',
      paddingLeft: '12%',
      fontSize: 14,
      color: isBioValid ? '#2d2d2d' : '#EF173E',
      marginTop: 12,
    },
  });

  function checkIsDateValid(value, title) {
    if (value === new Date()) {
      setIsDateValid(false);
      return Alert.alert(title, 'Digite sua data de nascimento');
    }


    // eslint-disable-next-line no-restricted-globals
    if (isNaN(new Date(value)
      .getTime())
    ) {
      setIsDateValid(false);
      setDate(new Date());
      return Alert.alert(title, 'Data de nascimento inválida');
    }

    const today = new Date().getFullYear();
    const birthdate = new Date(value).getFullYear();

    if (today <= birthdate + 12 || today > birthdate + 25) {
      setIsDateValid(false);
      setDate(new Date());
      return Alert.alert(title, 'Idade inválida');
    }

    setIsDateValid(true);


    return formattedDate(value);
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
    user.name = name;

    if (!gender) {
      setIsGenderValid(false);
      return Alert.alert(title, 'Escolha seu gênero');
    }
    setIsGenderValid(true);
    user.gender = gender;

    const DbDate = checkIsDateValid(date, title);

    if (!DbDate) return false;
    user.birthdate = DbDate;
    user.inputBirthdate = date;

    if (!bio) {
      setIsBioValid(false);
      return Alert.alert(title, 'Digite sua descrição');
    }
    user.bio = bio;

    return navigation.navigate('School', { user });
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{
        width: '100%', flex: 1,
      }}
    >
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{
          width: '100%', alignItems: 'center', paddingBottom: 30, paddingTop: 80,
        }}
      >
        <Image style={globalStyles.logo} source={logo} />
        <Text style={globalStyles.title}>Sobre Você</Text>

        <BackButton onPressed={() => navigation.navigate('Private', { user })} />

        <Input
          name="Nome"
          placeholder="Digite seu nome completo"
          autoCorrect
          state={name}
          setState={setName}
          autoCapitalize="words"
          isValid={isNameValid}
        />

        <Select
          title="Gênero"
          items={genders}
          placeHolder="Escolha seu gênero"
          setState={setGender}
          state={gender}
          isValid={isGenderValid}
        />


        <DateButton
          setState={setDate}
          state={date}
          isValid={isDateValid}
        />

        <View style={styles.view}>
          <Text style={styles.title}>Descrição</Text>
          <TextInput
            multiline
            numberOfLines={40}
            placeholder="Fale sobre você..."
            onChangeText={setBio}
            value={bio}
            style={styles.bigInput}
            placeholderTextColor={isBioValid ? '#c0c0c0' : '#EF173E'}
          />
        </View>

        <Button text="Avançar" onPressed={handleNavigation} />

      </ScrollView>
    </KeyboardAvoidingView>
  );
}
