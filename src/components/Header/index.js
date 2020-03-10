import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo FastFeet" />
          <Link to="/" className="active">
            Encomendas
          </Link>
          <Link to="/">Entregadores</Link>
          <Link to="/">Destinatários</Link>
          <Link to="/">Problemas</Link>
        </nav>
        <aside>
          <Profile>
            <strong>Admin FastFeet</strong>
            <Link to="/profile">sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
