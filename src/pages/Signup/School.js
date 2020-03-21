import {
  KeyboardAvoidingView, Text, BackHandler, Alert,
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
      style={globalStyles.container}
    >
      <Logo style={globalStyles.logo} />
      <Text style={globalStyles.title}>Sua Escola</Text>

      <BackButton onPressed={handleBackNavigation} />

      <Select
        items={schools}
        placeHolder="Escolha sua escola"
        setState={setSchool}
        state={school}
        isValid={isSchoolValid}
      />

      <Select
        items={courses}
        placeHolder="Escolha seu curso"
        setState={setCourse}
        state={course}
        enabled={enabled}
        isValid={isCourseValid}
      />

      <Select
        items={grades}
        placeHolder="Escolha o ano que você estuda"
        setState={setGrade}
        state={grade}
        isValid={isGradeValid}
      />

      <Select
        items={classes}
        placeHolder="Escolha a sala que você estuda"
        setState={setSchoolClass}
        state={schoolClass}
        isValid={isSchoolClassValid}
      />

      <Button text="Avançar" onPressed={handleNavigation} />
    </KeyboardAvoidingView>
  ) : null;
};

export default SchoolPage;
