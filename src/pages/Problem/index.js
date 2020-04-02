import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Header } from './styles';

import InputSearch from '~/components/InputSearch';
import Button from '~/components/Button';
import Action from '~/components/Action';
import Pagination from '~/components/Pagination';

export default function Problem() {
  return (
    <Container>
      <Header>
        <h1>Problemas na entrega</h1>
        <div>
          <InputSearch />
          <Button Icon={<MdAdd size={24} />} Title="Cadastrar" to="/" />
        </div>
      </Header>
      <table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI
            </td>
            <td className="actions">
              <Action />
            </td>
          </tr>
          <tr>
            <td valign="top">#02</td>
            <td>Destinatário ausente</td>
            <td className="actions">
              <Action />
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </Container>
  );
}
