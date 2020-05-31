import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import ImageSlider from 'react-native-image-slider';
import { View } from 'react-native';
import {
  Container, Image, StyledBar, Info, Name, Age, Row,
  AlignedRow, Column, Value, Label, Divider,
} from './styles';

import calculateAge from '../../../utils/calculateAge';
import capitalize from '../../../utils/capitalize';

import BackButton from '../../../components/BackButton';


export default function TargetUser() {
  const { user } = useRoute().params;

  const navigation = useNavigation();

  const birthDate = new Date(user.birthdate);

  const images = user.images.length < 1
    ? ['http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png']
    : user.images;

  return (
    <Container>
      <StyledBar />
      <ImageSlider
        images={images}
        customSlide={({ index, item, style }) => (
          <View key={index} style={style}>
            <Image source={{ uri: item }} />
          </View>
        )}
      />
      <Info>
        <Row>
          <Name>{user.name}</Name>
          <Age>
            {calculateAge(birthDate.getMonth(), birthDate.getDate(),
              birthDate.getFullYear())}
          </Age>
        </Row>
        <AlignedRow>
          <Column>
            <Label>Curso</Label>
            <Value>
              {`${capitalize(user.course)} ${user.grade}${user.school_class} `
                + `${user.shift}`}
            </Value>
          </Column>
          <Column>
            <Label>Escola</Label>
            <Value>
              { `${capitalize(user.school_name)}` }
            </Value>
          </Column>
        </AlignedRow>
        <Divider />
        <Column>
          <Label>Descrição</Label>
          <Value>
            { user.bio }
          </Value>
        </Column>
        <Column style={{ marginTop: 8 }}>
          <Label>Gênero</Label>
          <Value>
            { `${capitalize(user.gender)}` }
          </Value>
        </Column>
      </Info>
      <BackButton onPressed={() => navigation.pop()} />
    </Container>
  );
}
