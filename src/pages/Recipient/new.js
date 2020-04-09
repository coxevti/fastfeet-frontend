import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiChevronLeft, FiCheck } from 'react-icons/fi';

import { Container, HeaderRegister, Form, FormGroup } from './styles';

export default function Recipient() {
  const history = useHistory();

  function back() {
    history.goBack();
  }
  return (
    <Container>
      <HeaderRegister>
        <h1>Cadastro de destinatário</h1>
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
        <FormGroup className="full-width">
          <span>
            <h4>Nome</h4>
            <input type="text" placeholder="Nome" />
          </span>
        </FormGroup>
        <FormGroup>
          <span>
            <h4>Rua</h4>
            <input type="text" placeholder="Rua" />
          </span>
        </FormGroup>
        <FormGroup>
          <span>
            <h4>Número</h4>
            <input type="text" placeholder="Número" />
          </span>
        </FormGroup>
        <FormGroup>
          <span>
            <h4>Complemento</h4>
            <input type="text" placeholder="Complemento" />
          </span>
        </FormGroup>
        <FormGroup>
          <span>
            <h4>Cidade</h4>
            <input type="text" placeholder="Cidade" />
          </span>
        </FormGroup>
        <FormGroup>
          <span>
            <h4>Estado</h4>
            <input type="text" placeholder="Estado" />
          </span>
        </FormGroup>
        <FormGroup>
          <span>
            <h4>CEP</h4>
            <input type="text" placeholder="CEP" />
          </span>
        </FormGroup>
      </Form>
    </Container>
  );
}
