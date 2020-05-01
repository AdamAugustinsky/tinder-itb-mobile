import React, { useEffect, useState } from 'react';

import {
  Image, Info, Row, Name, Age, About, Column, Label, Value,
} from './styles';

import capitalize from '../../utils/capitalize';

export default function TargetCard({ user }) {
  const [matchAge, setMatchAge] = useState(0);

  const calculateAge = (birthMonth, birthDay, birthYear) => {
    const todayDate = new Date();
    const todayYear = todayDate.getFullYear();
    const todayMonth = todayDate.getMonth();
    const todayDay = todayDate.getDate();
    let age = todayYear - birthYear;

    if (todayMonth < (birthMonth - 1)) {
      age -= 1;
    }
    if (((birthMonth - 1) === todayMonth) && (todayDay < birthDay)) {
      age -= 1;
    }
    return age;
  };

  useEffect(() => {
    if (user) {
      const birthDate = new Date(user.birthdate);
      setMatchAge(calculateAge(birthDate.getMonth(), birthDate.getDate(),
        birthDate.getFullYear()));
    }
  }, [user]);

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
              {matchAge}
            </Age>
          </Row>
          <About />
        </Row>
        <Row>
          <Column>
            <Label>Curso</Label>
            <Value>
              { `${capitalize(user.course)} ${user.grade}${user.school_class} `
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
