/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

const Modal = ({ onClose, children }) => {
  return (
    <Container>
      <Content>
        <button type="button" onClick={onClose} />
        {children}
      </Content>
    </Container>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
