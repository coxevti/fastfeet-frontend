import React from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container, PerPage, Detail, Navigation } from './styles';

export default function Pagination() {
  return (
    <Container>
      <PerPage>
        <option value="10">10 itens por página</option>
        <option value="15">15 itens por página</option>
      </PerPage>
      <Detail>Mostrando 1 à 10 de 618 registros.</Detail>
      <Navigation>
        <button type="button">
          <FiArrowLeft size={24} />
        </button>
        <button type="button">
          <FiArrowRight size={24} />
        </button>
      </Navigation>
    </Container>
  );
}
