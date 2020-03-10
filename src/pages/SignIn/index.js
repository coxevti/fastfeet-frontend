import React from 'react';

import { Container } from './styles';
import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="Logo FastFeet" />
      <form>
        <div>
          <label htmlFor="email">
            seu e-mail
            <input type="email" placeholder="exemplo@email.com" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            sua senha
            <input type="password" placeholder="************" />
          </label>
        </div>
        <button type="submit">Entrar no sistema</button>
      </form>
    </Container>
  );
}
