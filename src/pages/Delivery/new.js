import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiChevronLeft, FiCheck, FiImage } from 'react-icons/fi';

import { Container, HeaderRegister, Avatar, Form, FormGroup } from './styles';

export default function DeliveryNew() {
  const history = useHistory();

  function back() {
    history.goBack();
  }
  return (
    <Container>
      <HeaderRegister>
        <h1>Cadastro de entregadores</h1>
        <div>
          <button type="button" onClick={back}>
            <FiChevronLeft size={24} />
            voltar
          </button>
          <button type="button">
            <FiCheck size={24} />
            salvar
          </button>
        </div>
      </HeaderRegister>
      <Form>
        <Avatar>
          <label htmlFor="avatar">
            {/* <img
              src="https://api.adorable.io/avatars/120/abott@adorable.png"
              alt="avatar"
            /> */}
            <div className="notAvatar">
              <FiImage size={40} color="#DDDDDD" />
              Adicionar foto
            </div>
            <input id="avatar" type="file" accept="image/*" />
          </label>
        </Avatar>
        <FormGroup>
          <h4>Nome</h4>
          <input type="text" placeholder="Nome" />
        </FormGroup>
        <FormGroup>
          <h4>Email</h4>
          <input type="email" placeholder="exemplo@domain.com" />
        </FormGroup>
      </Form>
    </Container>
  );
}
