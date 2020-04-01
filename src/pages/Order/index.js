import React from 'react';

import { MdAdd } from 'react-icons/md';
import { Container, Header } from './styles';

import Button from '~/components/Button';
import InputSearch from '~/components/InputSearch';
import Action from '~/components/Action';
import Pagination from '~/components/Pagination';

export default function Order() {
  return (
    <Container>
      <Header>
        <h1>Gerenciando encomendas</h1>
        <div>
          <InputSearch />
          <Button Icon={<MdAdd size={24} />} Title="Cadastrar" to="/" />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td valign="top">#01</td>
              <td>Ludwig van Beethoven</td>
              <td>
                <div>
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0&rounded=true"
                    alt="Logo"
                  />
                  John Doe
                </div>
              </td>
              <td>Campo Grande</td>
              <td>Mato Grosso do Sul</td>
              <td>
                <span className="badge delivery">
                  <span className="circle" /> ENTREGUE
                </span>
              </td>
              <td className="actions">
                <Action />
              </td>
            </tr>
            <tr>
              <td>#02</td>
              <td>Wolfgang Amadeus</td>
              <td className="deliveryAvatar">
                <div>
                  <img
                    src="https://ui-avatars.com/api/?name=Gaspar+Antunes&background=FCF4EE&color=CB946C&rounded=true"
                    alt="Logo"
                  />
                  Gaspar Antunes
                </div>
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <span className="badge pending">
                  <span className="circle" /> PENDENTE
                </span>
              </td>
              <td className="actions">
                <Action />
              </td>
            </tr>
            <tr>
              <td>#03</td>
              <td>Johann Sebastian Bach</td>
              <td className="deliveryAvatar">
                <div>
                  <img
                    src="https://ui-avatars.com/api/?name=Dai+Jiang&background=EBFBFA&color=83CEC9&rounded=true"
                    alt="Logo"
                  />
                  Dai Jiang
                </div>
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <span className="badge removed">
                  <span className="circle" /> RETIRADA
                </span>
              </td>
              <td className="actions">
                <Action />
              </td>
            </tr>
            <tr>
              <td>#04</td>
              <td>Frédéric Chopin</td>
              <td className="deliveryAvatar">
                <div>
                  <img
                    src="https://ui-avatars.com/api/?name=Tom+Hanson&background=FFEEF1&color=CC7584&rounded=true"
                    alt="Logo"
                  />
                  Tom Hanson
                </div>
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <span className="badge cancelled">
                  <span className="circle" /> CANCELADA
                </span>
              </td>
              <td className="actions">
                <Action />
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </Header>
    </Container>
  );
}
