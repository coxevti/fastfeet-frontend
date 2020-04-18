import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Badge, ActionList } from './styles';

const Action = ({ onClick, onView, editStore }) => {
  const { url } = useRouteMatch();
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
            <Link
              to={{ pathname: `${url}/edit/${editStore.id}`, state: editStore }}
            >
              <MdModeEdit size={18} className="edit" />
              Editar
            </Link>
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
  editStore: PropTypes.shape({
    id: PropTypes.number,
    deliveryman_id: PropTypes.number,
    recipient_id: PropTypes.number,
    product: PropTypes.string,
  }).isRequired,
};

export default Action;
