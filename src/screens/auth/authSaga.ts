// Libs
import { put, call, takeLatest } from 'redux-saga/effects'

import API from 'services/apis'
import { push } from 'connected-react-router'

// Constants
import { authActions } from './authSlice';

/**
 * Login request
 */
function* loginRequest(): Generator<
  any, any, any
> {
  try {
    const response = yield call(() => API.get(`/profile/1`))

    if (response.ok) {
      yield put(
      authActions.loginSuccess(response.data)
      )
      yield put(push('/app/product'));
    } else {
      yield put(authActions.loginFailed(response.data))
    }
  } catch (errors) {
    yield put(authActions.loginFailed(errors))
  }
}

function* authSaga():Generator<
  any, any, any
> {
  return [yield takeLatest(authActions.loginRequest.type, loginRequest)]
}

export default authSaga
