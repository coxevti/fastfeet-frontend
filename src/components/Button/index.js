import React from 'react';

import { Container, Text } from './styles';

export default function Button({ Icon, Title, Color, to }) {
  return (
    <Container color={Color} to={to}>
      {Icon}
      <Text>{Title}</Text>
    </Container>
  );
}
