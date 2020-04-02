import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Header } from './styles';

import InputSearch from '~/components/InputSearch';
import Button from '~/components/Button';
import Action from '~/components/Action';
import Pagination from '~/components/Pagination';

export default function Recipient() {
  return (
    <Container>
      <Header>
        <h1>Gerenciando destinatários</h1>
        <div>
          <InputSearch />
          <Button Icon={<MdAdd size={24} />} Title="Cadastrar" to="/" />
        </div>
      </Header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
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
