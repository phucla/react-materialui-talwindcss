// Libs
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from '@reduxjs/toolkit';

// Persist store
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Sagas
import rootSaga from './rootSaga'

// Reducers
import authReducer from 'screens/auth/authSlice'
import productReducer from 'screens/product/productSlice';
import authMiddleware from '../middleware'

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
//   }
// }

// const composeEnhancers =
//   (process.env.NODE_ENV !== 'production' &&
//     typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose

// Saga Middleware
const sagaMiddleware = createSagaMiddleware({})

const middlewares = [sagaMiddleware, authMiddleware]

const store = createStore(
  persistReducer(persistConfig, rootReducers),
  compose(applyMiddleware(...middlewares))
)

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default { store, persistor }
