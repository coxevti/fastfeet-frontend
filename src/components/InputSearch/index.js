import React from 'react';

import { MdSearch } from 'react-icons/md';
import { Container, Input } from './styles';

export default function InputSearch() {
  return (
    <Container>
      <MdSearch size={24} />
      <Input placeholder="Buscar por encomendas" />
    </Container>
  );
}
