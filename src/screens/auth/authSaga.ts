// Libs
import { put, call, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { api, StatusCode } from 'services/apis'
import { push } from 'connected-react-router'
import { User } from 'types'

// Constants
import { authActions } from './authSlice';

/**
 * Login request
 */
function* loginRequest():Generator<
any, any, AxiosResponse<User| string>
>{
  try {
    const response: AxiosResponse<User | string> = yield call(() => api.get<User>('/profile/1'))

    if (response.status === StatusCode.Success) {
      yield put(
      authActions.loginSuccess(response.data as User)
      )
      yield put(push('/app/product'));
    } else {
      yield put(authActions.loginFailed(response.data as string))
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
