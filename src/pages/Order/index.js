import React from 'react';

import {
  MdAdd,
  MdMoreHoriz,
  MdRemoveRedEye,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';
import { Container, Header } from './styles';

import Button from '~/components/Button';
import InputSearch from '~/components/InputSearch';

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
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <td className="deliveryAvatar">
                <img
                  src="https://ui-avatars.com/api/?name=John+Doe&background=F4EFFC&color=A28FD0&rounded=true"
                  alt="Logo"
                />
                John Doe
              </td>
              <td>Campo Grande</td>
              <td>Mato Grosso do Sul</td>
              <td>
                <span className="badge delivery">
                  <span className="circle" /> ENTREGUE
                </span>
              </td>
              <td className="actions">
                <button type="button">
                  <MdMoreHoriz />
                </button>
                <div>
                  <ul>
                    <li>
                      <button type="button">
                        <MdRemoveRedEye size={18} className="view" />
                        Visualizar
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <MdModeEdit size={18} className="edit" />
                        Editar
                      </button>
                    </li>
                    <li>
                      <button type="button">
                        <MdDeleteForever size={18} className="delete" />
                        Excluir
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>#02</td>
              <td>Wolfgang Amadeus</td>
              <td className="deliveryAvatar">
                <img
                  src="https://ui-avatars.com/api/?name=Gaspar+Antunes&background=FCF4EE&color=CB946C&rounded=true"
                  alt="Logo"
                />
                Gaspar Antunes
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <span className="badge pending">
                  <span className="circle" /> PENDENTE
                </span>
              </td>
              <td>
                <MdMoreHoriz />
              </td>
            </tr>
            <tr>
              <td>#03</td>
              <td>Johann Sebastian Bach</td>
              <td className="deliveryAvatar">
                <img
                  src="https://ui-avatars.com/api/?name=Dai+Jiang&background=EBFBFA&color=83CEC9&rounded=true"
                  alt="Logo"
                />
                Dai Jiang
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <span className="badge removed">
                  <span className="circle" /> RETIRADA
                </span>
              </td>
              <td>
                <MdMoreHoriz />
              </td>
            </tr>
            <tr>
              <td>#04</td>
              <td>Frédéric Chopin</td>
              <td className="deliveryAvatar">
                <img
                  src="https://ui-avatars.com/api/?name=Tom+Hanson&background=FFEEF1&color=CC7584&rounded=true"
                  alt="Logo"
                />
                Tom Hanson
              </td>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <td>
                <span className="badge cancelled">
                  <span className="circle" /> CANCELADA
                </span>
              </td>
              <td>
                <MdMoreHoriz />
              </td>
            </tr>
          </tbody>
        </table>
      </Header>
    </Container>
  );
}
