import React from 'react';
import { Text, FlatList } from 'react-native';
import {
  Container, View,
} from './styles';

export function MatchCard({ user }) {
  return (
    <View>
      <Text>
        {JSON.stringify(user)}
      </Text>

    </View>
  );
}

export default function MatchList({ user }) {
  let index = 0;

  return (
    <Container>
      <FlatList
        horizontal
        data={[user, user, user, user, user, user, user, user, user, user, user, user, user, user]}
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
