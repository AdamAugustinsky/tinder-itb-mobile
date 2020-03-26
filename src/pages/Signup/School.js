import {
  KeyboardAvoidingView, Text, BackHandler, Alert, ScrollView, ActivityIndicator, View,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import globalStyles from '../../styles/entryStyle';
import Select from '../../components/Select';
import api from '../../services/api';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

const SchoolPage = ({ navigation }) => {
  const { navigate } = navigation;

  const user = navigation.getParam('user');

  const [school, setSchool] = useState(user.school);
  const [schools, setSchools] = useState([]);
  const [isSchoolValid, setIsSchoolValid] = useState(true);

  const [course, setCourse] = useState(user.course);
  const [courses, setCourses] = useState([]);
  const [enabled, setEnabled] = useState(!!user.course);
  const [isCourseValid, setIsCourseValid] = useState(true);

  const [grade, setGrade] = useState(user.grade);
  const grades = [
    { label: '1º Ano', value: '1' },
    { label: '2º Ano', value: '2' },
    { label: '3º Ano', value: '3' },
  ];
  const [isGradeValid, setIsGradeValid] = useState(true);

  const [period, setPeriod] = useState(user.period);
  const periods = [
    { label: 'Manhã', value: 'MANHÃ' },
    { label: 'Tarde', value: 'TARDE' },
    { label: 'Noite', value: 'NOITE' },
  ];
  const [isPeriodValid, setIsPeriodValid] = useState(true);

  const [schoolClass, setSchoolClass] = useState(user.schoolClass);
  const classes = [
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'C', value: 'C' },
    { label: 'D', value: 'D' },
    { label: 'E', value: 'E' },
    { label: 'F', value: 'F' },
    { label: 'G', value: 'G' },
    { label: 'H', value: 'H' },
    { label: 'I', value: 'I' },
    { label: 'J', value: 'J' },
  ];
  const [isSchoolClassValid, setIsSchoolClassValid] = useState(true);

  const [isReady, setIsReady] = useState(false);


  const handleNavigation = () => {
    const title = 'Erro de Validação!';

    if (!school) {
      setIsSchoolValid(false);
      return Alert.alert(title, 'Escolha sua escola');
    }
    setIsSchoolValid(true);
    user.school = school;

    if (!course) {
      setIsCourseValid(false);
      return Alert.alert(title, 'Escolha seu curso');
    }
    setIsCourseValid(true);
    user.course = course;

    if (!grade) {
      setIsGradeValid(false);
      return Alert.alert(title, 'Escolha sua ano');
    }
    setIsGradeValid(true);
    user.grade = grade;

    if (!schoolClass) {
      setIsSchoolClassValid(false);
      return Alert.alert(title, 'Escolha sua escola');
    }
    setIsSchoolClassValid(true);
    user.schoolClass = schoolClass;

    if (!period) {
      setIsPeriodValid(false);
      return Alert.alert(title, 'Escolha seu período');
    }
    setIsPeriodValid(true);
    user.period = period;

    return navigate('Contacts', { user });
  };

  const handleBackNavigation = () => navigate('About', { user });

  BackHandler.addEventListener('hardwareBackPress', () => {
    handleBackNavigation();
    return true;
  });

  useEffect(() => {
    async function getSchools() {
      const res = await api.get('/schools');

      setSchools(res.data.map((item) => ({
        label: item.local.toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '),
        // eslint-disable-next-line no-underscore-dangle
        value: item._id,
        courses: item.cursos,
      })));

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
      if (!school) return setEnabled(false);

      schools.forEach((value) => {
        if (value.value === school) {
          setCourses(value.courses.map((item) => ({
            label: item.toLowerCase()
              .split(' ')
              .map((word) => {
                if (word.length <= 4) return word;
                return word.charAt(0).toUpperCase() + word.substring(1);
              })
              .join(' '),
            value: item,
          })));
        }
      });

      return setEnabled(true);
    }

    getCourses();
  }, [school]);


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
        <Text style={globalStyles.title}>Sua Escola</Text>

        <BackButton onPressed={handleBackNavigation} />

        <Select
          title="Escola"
          items={schools}
          placeHolder="Escolha sua escola"
          setState={setSchool}
          state={school}
          isValid={isSchoolValid}
        />

        <Select
          title="Curso"
          items={courses}
          placeHolder="Escolha seu curso"
          setState={setCourse}
          state={course}
          enabled={enabled}
          isValid={isCourseValid}
        />

        <Select
          title="Ano"
          items={grades}
          placeHolder="Escolha o ano que você estuda"
          setState={setGrade}
          state={grade}
          isValid={isGradeValid}
        />

        <Select
          title="Sala"
          items={classes}
          placeHolder="Escolha a sala que você estuda"
          setState={setSchoolClass}
          state={schoolClass}
          isValid={isSchoolClassValid}
        />

        <Select
          title="Período"
          items={periods}
          placeHolder="Escolha o período que você estuda"
          setState={setPeriod}
          state={period}
          isValid={isPeriodValid}
        />

        <Button text="Avançar" onPressed={handleNavigation} />
      </ScrollView>
    </KeyboardAvoidingView>
  ) : (
    <View style={globalStyles.container}>
      <ActivityIndicator size="100%" color="#FF6A9B" />
    </View>
  );
};

export default SchoolPage;
