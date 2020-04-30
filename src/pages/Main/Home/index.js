/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';


import {
  Container, Title, Background, Value, Body,
  StyledBar, Column, Label,
  Info, Name, Image, Row, Age, About, FabRow,
} from './styles';

import api from '../../../services/api';


import capitalize from '../../../utils/capitalize';
import FloatingActionButton from '../../../components/FloatingActionButton';

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await api.get('/users/5e9dca27f4ee9919c0803693');

        setUser(res.data);
      } catch (error) {
        Alert.alert('Erro!', capitalize(error.response.data.error));
      }
    }
    getUser();
  }, []);


  return (
    <Container>
      <Background />
      <StyledBar />
      <Body>
        <Title>Tinder ITB</Title>
        <Image
          source={{ uri: user ? user.images[0] : null }}
          resizeMode="cover"
        />
        <Info>
          <Row>
            <Row>
              <Name>{user ? user.name.split(' ')[0] : null}</Name>
              <Age>
                {user ? 2020 - new Date(user.birthdate).getFullYear() : null}
              </Age>
            </Row>
            <About />
          </Row>
          <Row>
            <Column>
              <Label>Curso</Label>
              <Value>
                {user ? `${capitalize(user.course)} ${user.grade}${user.school_class} `
                + `${user.period}` : null}
              </Value>
            </Column>
            <Column>
              <Label>Escola</Label>
              <Value>
                {user ? `${capitalize(user.school_name)}` : null}
              </Value>
            </Column>
          </Row>
        </Info>
        <FabRow>
          <FloatingActionButton type="like" />
          <FloatingActionButton type="dislike" />
        </FabRow>
      </Body>

    </Container>
  );
}
