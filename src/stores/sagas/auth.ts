// Libs
import { put, call, takeLatest } from 'redux-saga/effects'

import API from 'services/apis'

// Constants
import * as Actions from '../actions'

/**
 * Login request
 */
function* loginRequest() {
  try {
    const response = yield call(() => API.get(`/profile/1`))

    if (response.ok) {
      yield put({
        type: Actions.LOGIN_SUCCESS,
        data: response.data,
      })
    } else {
      yield put({
        type: Actions.LOGIN_FAILED,
        errors: response && response.data,
      })
    }
  } catch (errors) {
    yield put({
      type: Actions.LOGIN_FAILED,
      errors,
    })
  }
}

function* authSaga() {
  return [yield takeLatest(Actions.LOGIN_REQUEST, loginRequest)]
}

export default authSaga
