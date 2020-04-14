import { all, takeLatest, put, call } from 'redux-saga/effects';
import cogoToast from 'cogo-toast';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    yield put(signInSuccess(token, user));
    history.push('/orders');
    cogoToast.success(`Bem-vindo de volta ${user.name} :)`);
  } catch (error) {
    cogoToast.error(error.response.data.message);
    yield put(signFailure());
  }
}

function signOut() {
  history.push('/');
}
export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
