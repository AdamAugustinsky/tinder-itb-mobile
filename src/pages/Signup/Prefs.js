import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView, Text, StyleSheet, BackHandler, AsyncStorage, Alert, ScrollView,
} from 'react-native';
import Logo from '../../assets/logo.svg';
import globalStyles from '../../styles/entryStyle';
import Select from '../../components/Select';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import api from '../../services/api';

const Prefs = ({ navigation }) => {
  const { navigate } = navigation;

  const user = navigation.getParam('user');

  const [school, setSchool] = useState(user.prefs.school);
  const [schools, setSchools] = useState([]);
  const [isReady, setIsReady] = useState(false);

  const [course, setCourse] = useState(user.prefs.course);
  const [courses, setCourses] = useState([]);
  const [enabled, setEnabled] = useState(!!user.prefs.course);

  const [grade, setGrade] = useState(user.prefs.grade);
  const grades = [
    { label: '1º Ano', value: '1' },
    { label: '2º Ano', value: '2' },
    { label: '3º Ano', value: '3' },
    { label: 'Todos', value: 'all' },
  ];

  const [gender, setGender] = useState(user.prefs.gender);
  const genders = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Todos', value: 'all' },
  ];

  const styles = StyleSheet.create({
    text: {
      color: '#a0a0a0',
      fontSize: 12,
      marginTop: 12,
      paddingHorizontal: 32,
      textAlign: 'center',
    },
  });

  useEffect(() => {
    async function getSchools() {
      const res = await api.get('/schools');

      const newSchools = res.data.map((item) => ({
        label: item.local.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '),
        // eslint-disable-next-line no-underscore-dangle
        value: item._id,
        courses: item.cursos,
      }));

      setSchools([...newSchools, { label: 'Todas', value: 'all' }]);

      setIsReady(true);

      if (course) {
        const newSchool = school;
        setSchool('');
        setSchool(newSchool);
      }
    }

    getSchools();
  }, []);

  useEffect(() => {
    function getCourses() {
      if (school === 'all' || !school) {
        setCourse('');
        return setEnabled(false);
      }

      schools.forEach((value) => {
        if (value.value === school) {
          const newCourses = value.courses.map((item) => ({
            label: item.toLowerCase()
              .split(' ')
              .map((word) => {
                if (word.length <= 4) return word;
                return word.charAt(0).toUpperCase() + word.substring(1);
              })
              .join(' '),
            value: item,
          }));

          setCourses([...newCourses, { label: 'Todos', value: 'all' }]);
        }
      });

      return setEnabled(true);
    }

    getCourses();
  }, [school]);

  const handleBackNavigation = () => navigate('Contacts', { user });

  BackHandler.addEventListener('hardwareBackPress', () => {
    handleBackNavigation();
    return true;
  });

  const handleNavigation = async () => {
    let response;

    if (school && school !== 'all') {
      user.prefs.school = school;
    } else user.prefs.school = undefined;
    if (gender && gender !== 'all') {
      user.prefs.gender = gender;
    } else user.prefs.gender = undefined;
    if (course && course !== 'all') {
      user.prefs.course = course;
    } else user.prefs.course = undefined;
    if (grade && grade !== 'all') {
      user.prefs.grade = grade;
    } else user.prefs.grade = undefined;

    try {
      response = await api.post('/profile', user.getUser());
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n${error.response.data.error}`);
    }

    try {
      response = await api.post('/sessions', {
        email: user.email,
        password: user.password,
      });
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }

    try {
      await AsyncStorage.setItem('email', user.email);
      await AsyncStorage.setItem('password', user.password);
      await AsyncStorage.setItem('jwt', response.data.jwt);
      await AsyncStorage.setItem('userId', response.data.user.id);
    } catch (error) {
      return Alert.alert('Falha', 'Erro ao salvar dados no dispositivo');
    }


    return navigate('Home');
  };

  return isReady ? (
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

        <Text style={[globalStyles.title, { marginBottom: 0 }]}>Preferências</Text>

        <BackButton onPressed={handleBackNavigation} />

        <Text style={styles.text}>Todos os valores são opcionais</Text>

        <Select
          title="Gênero"
          items={genders}
          placeHolder="Escolha o gênero"
          setState={setGender}
          state={gender}
        />

        <Select
          title="Escola"
          items={schools}
          placeHolder="Escolha a escola"
          setState={setSchool}
          state={school}
        />

        <Select
          title="Curso"
          items={courses}
          placeHolder="Escolha o curso"
          setState={setCourse}
          state={course}
          enabled={enabled}
        />
        <Select
          title="Ano"
          items={grades}
          placeHolder="Escolha o ano"
          setState={setGrade}
          state={grade}
        />

        <Button text="Cadastrar!" onPressed={handleNavigation} />


      </ScrollView>
    </KeyboardAvoidingView>
  ) : null;
};

export default Prefs;
