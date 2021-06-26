// Libs
import { put, call, takeLatest } from 'redux-saga/effects'

import API from 'services/apis'

// Constants
import * as Actions from '../actions'

/**
 * Login request
 */
function* getProductsRequest():Generator<
  any, any, any
> {
  try {
    const response = yield call(() => API.get(`/products`))

    if (response.ok) {
      console.log(response)
      yield put({
        type: Actions.GET_PRODUCTS_SUCCESS,
        data: response.data,
      })
    } else {
      yield put({
        type: Actions.GET_PRODUCTS_FAILED,
        error: response && response.data,
      })
    }
  } catch (errors) {
    yield put({
      type: Actions.GET_PRODUCTS_FAILED,
      error: errors,
    })
  }
}

function* productsSaga():Generator<
  any, any, any
> {
  return [yield takeLatest(Actions.GET_PRODUCTS_REQUEST, getProductsRequest)]
}

export default productsSaga
