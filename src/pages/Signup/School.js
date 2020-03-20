import {
  KeyboardAvoidingView, Text, BackHandler,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import globalStyles from '../../styles/entryStyle';
import Select from '../../components/Select';
import api from '../../services/api';
import BackButton from '../../components/BackButton';

const SchoolPage = ({ navigation }) => {
  const { navigate } = navigation;

  const user = navigation.getParam('user');

  const [school, setSchool] = useState(user.school);
  const [schools, setSchools] = useState([]);

  const [course, setCourse] = useState(user.course);
  const [courses, setCourses] = useState([]);
  const [enabled, setEnabled] = useState(false);

  const [grade, setGrade] = useState(user.grade);
  const grades = [
    { label: '1º Ano', value: '1' },
    { label: '2º Ano', value: '2' },
    { label: '3º Ano', value: '3' },
  ];

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
  ];

  const [isReady, setIsReady] = useState(false);


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
      />

      <Select
        items={courses}
        placeHolder="Escolha seu curso"
        setState={setCourse}
        state={course}
        enabled={enabled}
      />

      <Select
        items={grades}
        placeHolder="Escolha o ano que você estuda"
        setState={setGrade}
        state={grade}
      />

      <Select
        items={classes}
        placeHolder="Escolha a sala que você estuda"
        setState={setSchoolClass}
        state={schoolClass}
      />
    </KeyboardAvoidingView>
  ) : null;
};

export default SchoolPage;
