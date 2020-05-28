import React from 'react';


import { ActivityIndicator, Container, Text } from './styles';

export function Spinner() {
  return <ActivityIndicator />;
}


export default function LoadingSpinnerPage() {
  return (
    <Container>
      <Spinner />
      <Text>Carregando...</Text>
    </Container>
  );
}
