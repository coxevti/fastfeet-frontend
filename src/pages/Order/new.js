import React from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import { FiChevronLeft, FiCheck } from 'react-icons/fi';

import { Container, HeaderRegister, Form, FormGroup } from './styles';

export default function OrderNew() {
  const history = useHistory();

  function back() {
    history.goBack();
  }
  return (
    <Container>
      <HeaderRegister>
        <h1>Cadastro de encomendas</h1>
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
        <FormGroup>
          <h4>Destinatário</h4>
          <Select id="recipient" placeholder="Selecione destinatário" />
        </FormGroup>
        <FormGroup>
          <h4>Entregador</h4>
          <Select placeholder="Selecione entregador" />
        </FormGroup>
        <FormGroup className="full-width">
          <span>
            <h4>Nome do produto</h4>
            <input type="text" placeholder="Nome do produto" />
          </span>
        </FormGroup>
      </Form>
    </Container>
  );
}
