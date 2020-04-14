import React from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import cogoToast from 'cogo-toast';
import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';

import Input from '~/components/Input';
import Loading from '~/components/Loading';

import { Container } from './styles';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email não é valido')
          .required('Email é obrigatório'),
        password: Yup.string()
          .min(6, 'Senha deve ter no mínimo 6 carateres')
          .required('Senha é obrigatório'),
      });
      await schema.validate(data, { abortEarly: false });
      dispatch(signInRequest(data.email, data.password));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.errors.forEach(err =>
          cogoToast.error(err, { position: 'top-right' })
        );
      }
    }
  }
  return (
    <Container>
      <Loading show={loading} />
      <img src={logo} alt="Logo FastFeet" />
      <Form
        onSubmit={handleSubmit}
        initialData={{ email: 'admin@fastfeet.com' }}
      >
        <div>
          <label htmlFor="email">
            seu e-mail
            <Input type="email" name="email" placeholder="exemplo@email.com" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            sua senha
            <Input type="password" name="password" placeholder="************" />
          </label>
        </div>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
