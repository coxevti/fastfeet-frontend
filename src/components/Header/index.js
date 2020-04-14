import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.user.profile);
  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo FastFeet" />
          <FiMenu size={24} />
          <NavLink to="/orders" activeClassName="active">
            Encomendas
          </NavLink>
          <NavLink to="/deliverers" activeClassName="active">
            Entregadores
          </NavLink>
          <NavLink to="/recipients" activeClassName="active">
            Destinatários
          </NavLink>
          <NavLink to="/problems" activeClassName="active">
            Problemas
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <strong>{name}</strong>
            <button type="button" onClick={handleLogout}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
