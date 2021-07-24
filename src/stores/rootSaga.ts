// Libs
import { all } from 'redux-saga/effects'

// Sagas
import authSaga from 'screens/auth/authSaga'
import productsSaga from 'screens/product/productSaga'

export default function* rootSaga() {
  yield all([authSaga(), productsSaga()])
}
