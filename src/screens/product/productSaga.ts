// Libs
import { put, call, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { api, StatusCode } from 'services/apis'

// Constants
import { productActions } from './productSlice';
import { Product } from 'types'

/**
 * Login request
 */
function* getProductsRequest():Generator<
  any, any, AxiosResponse<Product[] | string>
> {
  try {
    const response: AxiosResponse<Product[] | string> = yield call(() => api.get<Product[]>(`/products`))

    if (response.status === StatusCode.Success) {
      yield put(productActions.getProductsSuccess(response.data as Product[]))

    } else {
      yield put(productActions.getProductsFailed(response.data as string))
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
