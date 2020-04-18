import React, { useState, useEffect } from 'react';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import Select from 'react-select';
import cogoToast from 'cogo-toast';

import { FiChevronLeft, FiCheck } from 'react-icons/fi';

import { Container, HeaderRegister, Form, FormGroup } from './styles';

import api from '~/services/api';

export default function OrderEdit() {
  const [recipientId, setRecipientId] = useState('');
  const [deliverymanId, setDeliverymanId] = useState('');
  const [product, setProduct] = useState('');
  const [optionsRecipient, setOptionsRecipient] = useState([]);
  const [optionsDeliverer, setOptionsDeliverer] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  function back() {
    history.goBack();
  }

  useEffect(() => {
    (async () => {
      const deliverers = await api.get('/deliverers');
      const optDeliverer = deliverers.data.map(deliverer => ({
        value: deliverer.id,
        label: deliverer.name,
      }));
      const recipients = await api.get('/recipients');
      const optRecipient = recipients.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));
      setOptionsRecipient(optRecipient);
      setOptionsDeliverer(optDeliverer);
      setProduct(location.state.product);
      setRecipientId(
        optRecipient.filter(
          item => item.value === location.state.recipient_id
        )[0]
      );
      setDeliverymanId(
        optDeliverer.filter(
          item => item.value === location.state.deliveryman_id
        )[0]
      );
    })();
  }, [
    location.state.deliveryman_id,
    location.state.product,
    location.state.recipient_id,
  ]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.put(`/orders/${id}`, {
        recipient_id: recipientId.value,
        deliveryman_id: deliverymanId.value,
        product,
      });
      cogoToast.success('Encomenda editada com sucesso!');
    } catch (error) {
      if (error && error.response && error.response.status === 422) {
        error.response.data.fields.forEach(field => cogoToast.error(field));
      } else {
        cogoToast.error('Error ao editar encomenda, Tente novamente!');
      }
    }
  };

  return (
    <Container>
      <HeaderRegister>
        <h1>Edição de encomendas</h1>
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
            options={optionsRecipient}
            onChange={opt => setRecipientId(opt)}
            value={recipientId}
            placeholder="Selecione destinatário"
          />
        </FormGroup>
        <FormGroup>
          <h4>Entregador</h4>
          <Select
            options={optionsDeliverer}
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
