import React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {
  Image, Info, Row, Name, Age, About, Column, Label, Value,
} from './styles';

import capitalize from '../../utils/capitalize';
import calculateAge from '../../utils/calculateAge';

export default function TargetCard({ user }) {
  const birthDate = new Date(user.birthdate);
  const { navigate } = useNavigation();

  return (
    <>
      <Image
        source={{ uri: user.images[0] ? user.images[0] : 'http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png' }}
        resizeMode="cover"
      />
      <Info>
        <Row>
          <Row>
            <Name>{ user.name.split(' ')[0] }</Name>
            <Age>
              {calculateAge(birthDate.getMonth(), birthDate.getDate(),
                birthDate.getFullYear())}
            </Age>
          </Row>
          <TouchableOpacity onPress={() => navigate('TargetUser', { user })}>
            <About />
          </TouchableOpacity>
        </Row>
        <Row>
          <Column>
            <Label>Curso</Label>
            <Value>
              {`${capitalize(user.course)} ${user.grade}${user.school_class} `
                + `${user.period}`}
            </Value>
          </Column>
          <Column>
            <Label>Escola</Label>
            <Value>
              { `${capitalize(user.school_name)}` }
            </Value>
          </Column>
        </Row>
      </Info>
    </>
  );
}
