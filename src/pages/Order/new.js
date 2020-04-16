import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select/async';
import cogoToast from 'cogo-toast';

import { FiChevronLeft, FiCheck } from 'react-icons/fi';

import { Container, HeaderRegister, Form, FormGroup } from './styles';

import api from '~/services/api';

export default function OrderNew() {
  const [recipientId, setRecipientId] = useState('');
  const [deliverymanId, setDeliverymanId] = useState('');
  const [product, setProduct] = useState('');
  const history = useHistory();

  function back() {
    history.goBack();
  }

  const optionsRecipient = () =>
    api.get('/recipients').then(response => {
      const data = response.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));
      return data;
    });

  const optionsDeliverer = () =>
    api.get('/deliverers').then(response =>
      response.data.map(deliverer => ({
        value: deliverer.id,
        label: deliverer.name,
      }))
    );

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/orders', {
        recipient_id: recipientId.value,
        deliveryman_id: deliverymanId.value,
        product,
      });
      setProduct('');
      setRecipientId('');
      setDeliverymanId('');
      cogoToast.success('Encomenda cadastrada com sucesso!');
    } catch (error) {
      if (error && error.response && error.response.status === 422) {
        error.response.data.fields.forEach(field => cogoToast.error(field));
      } else {
        cogoToast.error('Error ao cadastrar encomenda, Tente novamente!');
      }
    }
  };

  return (
    <Container>
      <HeaderRegister>
        <h1>Cadastro de encomendas</h1>
        <div>
          <button type="button" onClick={back}>
            <FiChevronLeft size={24} />
            voltar
          </button>
          <button type="button" onClick={handleSubmit}>
            <FiCheck size={24} />
            salvar
          </button>
        </div>
      </HeaderRegister>
      <Form>
        <FormGroup>
          <h4>Destinatário</h4>
          <Select
            id="recipient"
            cacheOptions
            defaultOptions
            loadOptions={optionsRecipient}
            onChange={opt => setRecipientId(opt)}
            value={recipientId}
            placeholder="Selecione destinatário"
          />
        </FormGroup>
        <FormGroup>
          <h4>Entregador</h4>
          <Select
            cacheOptions
            defaultOptions
            loadOptions={optionsDeliverer}
            onChange={opt => setDeliverymanId(opt)}
            value={deliverymanId}
            placeholder="Selecione entregador"
          />
        </FormGroup>
        <FormGroup className="full-width">
          <span>
            <h4>Nome do produto</h4>
            <input
              type="text"
              placeholder="Nome do produto"
              onChange={e => setProduct(e.target.value)}
              value={product}
            />
          </span>
        </FormGroup>
      </Form>
    </Container>
  );
}
