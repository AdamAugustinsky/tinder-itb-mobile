import React, { useState } from 'react';


import {
  KeyboardAvoidingView, Text, StyleSheet, BackHandler, Alert, ScrollView,
} from 'react-native';
import Logo from '../../assets/logo.svg';
import globalStyles from '../../styles/entryStyle';
import BorderedTextInput from '../../components/BorderedTextInput';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

const Contacts = ({ navigation }) => {
  const { navigate } = navigation;
  const user = navigation.getParam('user');

  const [instagram, setInstagram] = useState(user.instagram);
  const [isInstagramValid, setIsInstagramValid] = useState(true);

  const [number, setNumber] = useState(user.number);
  const [isNumberValid, setIsNumberValid] = useState(true);

  const [facebook, setFacebook] = useState(user.facebook);
  const [isFacebookValid, setIsFacebookValid] = useState(true);

  const [twitter, setTwitter] = useState(user.twitter);
  const [isTwitterValid, setIsTwitterValid] = useState(true);

  const styles = StyleSheet.create({
    text: {
      color: '#a0a0a0',
      fontSize: 12,
      marginTop: 12,
      paddingHorizontal: 32,
      textAlign: 'center',
    },
    button: {
      margin: 12,
    },
  });

  const handelNavigation = () => {
    const title = 'Erro de validação!';

    if (!instagram && !facebook && !twitter && !number) {
      return Alert.alert(title, 'Digite pelo menos um campo para continuar');
    }

    if (instagram) {
      if (instagram.split(' ').length > 1) {
        setIsInstagramValid(false);
        return Alert.alert(title, 'Nome de usuário do Instagram incorreto');
      }
    }
    setIsInstagramValid(true);
    user.instagram = instagram;

    if (facebook) {
      if (facebook.split(' ').length > 1) {
        setIsFacebookValid(false);
        return Alert.alert(title, 'Nome de usuário do Facebook incorreto');
      }
    }
    setIsFacebookValid(true);
    user.facebook = facebook;

    if (twitter) {
      if (twitter.split(' ').length > 1 || twitter[0] !== '@') {
        setIsTwitterValid(false);
        return Alert.alert(title, 'Nome de usuário do Twitter incorreto');
      }
    }
    setIsTwitterValid(true);
    user.twitter = twitter;

    if (number) {
      if (number.length < 9) {
        setIsNumberValid(false);
        return Alert.alert(title, 'Número incorreto, digite apenas o número do telefone, sem DDD');
      } if (number.length > 9 && number.split(' ').join('').substring(0, 5) !== '55119') {
        setIsNumberValid(false);
        return Alert.alert(title, 'Número incorreto, digite apenas o número do telefone, sem DDD');
      }

      if (number.length !== 9) {
        user.DBnumber = number.split(' ').join('');
      } else {
        user.DBnumber = `5511${number}`;
      }
    }
    setIsNumberValid(true);
    user.number = number;

    return true;
  };


  const handleBackNavigation = () => navigate('School', { user });

  BackHandler.addEventListener('hardwareBackPress', () => {
    handleBackNavigation();
    return true;
  });

  return (
    <KeyboardAvoidingView
      behavior="padding"
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
        <Logo style={globalStyles.logo} />
        <Text style={[globalStyles.title, { marginBottom: 0 }]}>Seus Contatos</Text>
        <BackButton onPressed={handleBackNavigation} />
        <Text style={styles.text}>Complete pelo menos um para continuar</Text>

        <BorderedTextInput
          state={instagram}
          setState={setInstagram}
          name="Digite seu nome de usuário do Instagram"
          isValid={isInstagramValid}
        />

        <BorderedTextInput
          state={facebook}
          setState={setFacebook}
          name="Digite seu nome de usuário do Facebook"
          isValid={isFacebookValid}
        />

        <BorderedTextInput
          state={twitter}
          setState={setTwitter}
          name="Digite seu @ do Twitter"
          isValid={isTwitterValid}
        />

        <BorderedTextInput
          state={number}
          setState={setNumber}
          name="Digite seu número"
          isValid={isNumberValid}
          keyboardType="numeric"
        />
        <Text
          style={styles.text}
        >
      Usaremos apenas para mostrar seus contatos para os seus matchs
        </Text>

        <Button text="Avançar" style={styles.button} onPressed={handelNavigation} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Contacts;
