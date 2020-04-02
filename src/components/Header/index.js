import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo FastFeet" />
          <FiMenu size={24} />
          <NavLink exact to="/orders" activeClassName="active">
            Encomendas
          </NavLink>
          <NavLink exact to="/deliverers" activeClassName="active">
            Entregadores
          </NavLink>
          <NavLink exact to="/recipients" activeClassName="active">
            Destinatários
          </NavLink>
          <NavLink exact to="/problems" activeClassName="active">
            Problemas
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <strong>Admin FastFeet</strong>
            <NavLink to="/profile">sair do sistema</NavLink>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
