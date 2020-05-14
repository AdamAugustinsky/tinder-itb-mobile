import React from 'react';
import { FlatList } from 'react-native';
import {
  Container, View, Image, Info, Row, Name, Age, About,
} from './styles';

export function MatchCard({ user }) {
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

  const birthDate = new Date(user.birthdate);

  return (
    <View>
      <Image source={{ uri: user.images[0] }} resizeMode="cover" />
      <Info>
        <Row>
          <Row>
            <Name>{ user.name.split(' ')[0] }</Name>
            <Age>
              {calculateAge(birthDate.getMonth(), birthDate.getDate(),
                birthDate.getFullYear())}
            </Age>
          </Row>
          <About />
        </Row>
      </Info>
    </View>
  );
}

export default function MatchList({ user }) {
  let index = 0;

  return (
    <Container>
      <FlatList
        horizontal
        data={[user, user, user, user, user, user, user, user]}
        renderItem={() => <MatchCard user={user} />}
        keyExtractor={() => {
          index += 1;

          return String(index);
        }}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
