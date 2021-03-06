import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import { format, parseISO } from 'date-fns';

import { MdAdd } from 'react-icons/md';
import { Container, Header, Box } from './styles';

import Button from '~/components/Button';
import InputSearch from '~/components/InputSearch';
import Action from '~/components/Action';
import Pagination from '~/components/Pagination';
import Modal from '~/components/Modal';

import api from '~/services/api';

export default function OrderList() {
  const { url } = useRouteMatch();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [orders, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfResults, setNumOfResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [search, setSearch] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState({});

  useEffect(() => {
    (async () => {
      const response = await api.get('/orders', {
        params: { perPage, page: currentPage, q: search },
      });
      if (response) {
        const ordersResponse = response.data.orders.map(order => {
          order.start_date = order.start_date
            ? format(parseISO(order.start_date), 'dd/MM/yyyy')
            : null;
          order.end_date = order.end_date
            ? format(parseISO(order.end_date), 'dd/MM/yyyy')
            : null;
          return order;
        });
        setOrder(ordersResponse);
        setCurrentPage(response.data.currentPage);
        setNumOfResults(response.data.numOfResults);
        setPages(response.data.pages);
        setPerPage(response.data.perPage);
        setFrom(response.data.from);
        setTo(response.data.to);
      }
    })();
  }, [perPage, currentPage, search]);

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

  function handleSearch(e) {
    setSearch(null);
    setCurrentPage(1);
    if (e.target.value.length < 3) return;
    setSearch(e.target.value);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/orders/${id}`);
      setOrder(orders.filter(order => order.id !== id));
      cogoToast.success('Encomenda excluida com sucesso!');
    } catch (error) {
      cogoToast.error('Error ao excluir encomenda');
    }
  }

  function handleViewOrder(order) {
    setSelectedOrder(order);
    setIsVisibleModal(true);
  }

  return (
    <Container>
      {isVisibleModal ? (
        <Modal onClose={() => setIsVisibleModal(false)}>
          <Box>
            <h2>Informações da encomenda</h2>
            <p>
              {selectedOrder.recipient.street}, {selectedOrder.recipient.number}
            </p>
            <p>
              {selectedOrder.recipient.city} - {selectedOrder.recipient.state}
            </p>
            <p>{selectedOrder.recipient.cep}</p>
          </Box>
          <Box>
            <h2>Datas</h2>
            <p>
              <span>Retirada</span>: {selectedOrder.start_date || '----'}
            </p>
            <p>
              <span>Entrega</span>: {selectedOrder.end_date || '----'}
            </p>
          </Box>
          <Box>
            <h2>Assinatura do destinatário</h2>
            <div>
              {selectedOrder.signature ? (
                <img
                  src={selectedOrder.signature.url}
                  alt="Assinatura do destinatário"
                />
              ) : null}
            </div>
          </Box>
        </Modal>
      ) : null}
      <Header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <InputSearch onChange={handleSearch} />
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
                <Action
                  onClick={() => handleDelete(order.id)}
                  onView={() => handleViewOrder(order)}
                  editStore={order}
                />
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
