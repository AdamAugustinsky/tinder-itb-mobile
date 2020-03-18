import {
  KeyboardAvoidingView, Text, TextInput, StyleSheet, ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import globalStyles from '../../styles/entryStyle';
import BorderedTextInput from '../../components/BorderedTextInput';
import Select from '../../components/Select';
import Button from '../../components/Button';


const About = ({ navigation }) => {
  const { navigate } = navigation;

  const [name, setName] = useState('');

  const [gender, setGender] = useState('');
  const genders = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
  ];

  const [bio, setBio] = useState('');

  const styles = StyleSheet.create({
    bigInput: {
      width: '80%',
      height: 200,

      marginTop: 20,

      borderWidth: 1,
      borderColor: '#2d2d2d',
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
  });


  return (
    <ScrollView style={styles.scroll}>
      <KeyboardAvoidingView
        behavior="padding"
        style={[globalStyles.container, styles.container]}
      >
        <Logo style={globalStyles.logo} />
        <Text style={globalStyles.title}>Sobre Você</Text>

        <BorderedTextInput
          name="Digite seu nome"
          autoCorrect
          state={name}
          setState={setName}
          autoCapitalize="words"
        />

        <Select
          items={genders}
          placeHolder="Escolha seu gênero"
          setState={setGender}
          state={gender}
        />

        <TextInput
          multiline
          numberOfLines={40}
          placeholder="Fale sobre você..."
          onChangeText={setBio}
          value={bio}
          style={styles.bigInput}
        />

        <TouchableOpacity onPress={() => navigate('School')}>
          <Button text="Avançar" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default About;
