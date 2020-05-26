import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container, View, Image, Info, Row, Name, Age, About, FabColumn,
} from './styles';
import calculateAge from '../../utils/calculateAge';
import BackButton from '../BackButton';
import CardButton from '../CardButton';

export function MatchCard({ user }) {
  const birthDate = new Date(user.birthdate);

  const { navigate } = useNavigation();

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
          <TouchableOpacity onPress={() => navigate('TargetUser', {
            user,
          })}
          >
            <About />
          </TouchableOpacity>
        </Row>
      </Info>
      <FabColumn>
        <CardButton text="Ver contatos" />
        <BackButton text="Excluir" />
      </FabColumn>
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
        renderItem={() => (

          <MatchCard user={user} />

        )}
        keyExtractor={() => {
          index += 1;

          return String(index);
        }}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  );
}
