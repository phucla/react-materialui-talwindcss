// Libs
import { all } from 'redux-saga/effects'

// Sagas
import authSaga from 'screens/auth/authSaga'
import productsSaga from 'screens/product/productSaga'
import todosSaga from 'screens/todos/todosSaga'

export default function* rootSaga() {
  yield all([authSaga(), productsSaga(), todosSaga()])
}
