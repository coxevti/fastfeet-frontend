import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Badge, ActionList } from './styles';

const Action = ({ onClick, onView }) => {
  const [actionVisible, setActionVisible] = useState(false);

  function handleToggleAction() {
    setActionVisible(!actionVisible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleAction}>
        <MdMoreHoriz />
      </Badge>
      <ActionList visible={actionVisible} onMouseLeave={handleToggleAction}>
        <ul>
          <li>
            <button type="button" onClick={onView}>
              <MdRemoveRedEye size={18} className="view" />
              Visualizar
            </button>
          </li>
          <li>
            <button type="button">
              <MdModeEdit size={18} className="edit" />
              Editar
            </button>
          </li>
          <li>
            <button type="button" onClick={onClick}>
              <MdDeleteForever size={18} className="delete" />
              Excluir
            </button>
          </li>
        </ul>
      </ActionList>
    </Container>
  );
};

Action.propTypes = {
  onClick: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default Action;
