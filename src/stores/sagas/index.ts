// Libs
import { all } from 'redux-saga/effects'
import authSaga from 'stores/sagas/auth'
import productsSaga from 'stores/sagas/products'

export default function* rootSaga() {
  yield all([authSaga(), productsSaga()])
}
