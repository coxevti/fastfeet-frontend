import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Container, Input } from './styles';

const InputSearch = ({ onChange }) => {
  return (
    <Container>
      <MdSearch size={24} />
      <Input placeholder="Buscar por encomendas" onChange={onChange} />
    </Container>
  );
};

InputSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputSearch;
