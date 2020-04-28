/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';


import {
  Container, Title, Background,
  StyledBar, Group,
  Info, Name, Image, Row, Age, About,
} from './styles';

import api from '../../../services/api';


import capitalize from '../../../utils/capitalize';

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
    <>
      <Background />
      <StyledBar />
      <Container>
        <Title>Tinder ITB</Title>
        <Image
          source={{ uri: user ? user.images[0] : null }}
          resizeMode="cover"
        />
        <Info>
          <Row>
            <Group>
              <Name>{user ? user.name.split(' ')[0] : null}</Name>
              <Age>
                {user ? 2020 - new Date(user.birthdate).getFullYear() : null}
              </Age>
            </Group>
            <About />
          </Row>
        </Info>
      </Container>

    </>
  );
}
