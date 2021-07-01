// Libs
import { put, call, takeLatest } from 'redux-saga/effects'

import API from 'services/apis'

// Constants
import { productActions } from './productSlice';

/**
 * Login request
 */
function* getProductsRequest():Generator<
  any, any, any
> {
  try {
    const response = yield call(() => API.get(`/products`))

    if (response.ok) {
      yield put(productActions.getProductsSuccess(response.data))

    } else {
      yield put(productActions.getProductsFailed(response.data))
    }
  } catch (errors) {
    yield put(productActions.getProductsFailed(errors))
  }
}

function* productsSaga():Generator<
  any, any, any
> {
  return [yield takeLatest(productActions.getProductsRequest.type, getProductsRequest)]
}

export default productsSaga
