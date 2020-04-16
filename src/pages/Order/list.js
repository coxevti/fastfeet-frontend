import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';
import { Container, Header } from './styles';

import Button from '~/components/Button';
import InputSearch from '~/components/InputSearch';
import Action from '~/components/Action';
import Pagination from '~/components/Pagination';

import api from '~/services/api';

export default function OrderList() {
  const { url } = useRouteMatch();
  const [orders, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfResults, setNumOfResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await api.get('/orders', {
        params: { perPage, page: currentPage },
      });
      if (response) {
        setOrder(response.data.orders);
        setCurrentPage(response.data.currentPage);
        setNumOfResults(response.data.numOfResults);
        setPages(response.data.pages);
        setPerPage(response.data.perPage);
        setFrom(response.data.from);
        setTo(response.data.to);
      }
    })();
  }, [perPage, currentPage]);

  function handleStatus(value) {
    if (value.canceled_at) {
      return { text: 'Cancelada', type: 'cancelled' };
    }
    if (value.end_date) {
      return { text: 'Entregue', type: 'delivery' };
    }
    if (value.start_date) {
      return { text: 'Retirada', type: 'removed' };
    }
    return { text: 'Pendente', type: 'pending' };
  }

  return (
    <Container>
      <Header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <InputSearch />
          <Button
            Icon={<MdAdd size={24} />}
            Title="Cadastrar"
            to={`${url}/new`}
          />
        </div>
      </Header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td valign="top">#{order.id}</td>
              <td className="product">{order.product}</td>
              <td>{order.recipient.name}</td>
              <td>
                <div>
                  <img
                    src={`https://ui-avatars.com/api/?name=${order.deliveryman.name}&background=F4EFFC&color=A28FD0&rounded=true`}
                    alt="Logo"
                  />
                  {order.deliveryman.name}
                </div>
              </td>
              <td>{order.recipient.street}</td>
              <td>{order.recipient.state}</td>
              <td>
                <span className={`badge ${handleStatus(order).type}`}>
                  <span className="circle" /> {handleStatus(order).text}
                </span>
              </td>
              <td>
                <Action />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        funcPerPage={value => setPerPage(value)}
        funcCurrentPage={value => setCurrentPage(value)}
        currentPage={currentPage}
        pages={pages}
        numOfResults={numOfResults}
        perPage={perPage}
        from={from}
        to={to}
      />
    </Container>
  );
}
