import React from 'react';

import loadingIcon from '~/assets/loading.svg';
import { Container, Spinner, Text } from './styles';

export default function Loading() {
  return (
    <Container>
      <Spinner src={loadingIcon} alt="carregando" />
      <Text>Carregando...</Text>
    </Container>
  );
}
