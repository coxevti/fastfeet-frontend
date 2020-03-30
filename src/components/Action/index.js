import React, { useState } from 'react';

import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Badge, ActionList } from './styles';

export default function Action() {
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
            <button type="button">
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
            <button type="button">
              <MdDeleteForever size={18} className="delete" />
              Excluir
            </button>
          </li>
        </ul>
      </ActionList>
    </Container>
  );
}
