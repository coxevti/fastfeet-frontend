import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Container, Header } from './styles';

import InputSearch from '~/components/InputSearch';
import Button from '~/components/Button';
import Action from '~/components/Action';
import Pagination from '~/components/Pagination';

export default function Delivery() {
  return (
    <Container>
      <Header>
        <h1>Gerenciando entregadores</h1>
        <div>
          <InputSearch />
          <Button Icon={<MdAdd size={24} />} Title="Cadastrar" to="/" />
        </div>
      </Header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0&rounded=true"
                alt="Logo"
              />
            </td>
            <td>Valdir</td>
            <td>valcox.russo@gmail.com</td>
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
