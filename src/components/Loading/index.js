import React from 'react';
import PropTypes from 'prop-types';

import loadingIcon from '~/assets/loading.svg';
import { Container, Spinner, Text } from './styles';

const Loading = ({ show }) => {
  return (
    <Container show={show}>
      <Spinner src={loadingIcon} alt="carregando" />
      <Text>Carregando...</Text>
    </Container>
  );
};

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Loading;
