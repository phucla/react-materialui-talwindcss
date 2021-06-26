// Libs
import { combineReducers } from 'redux'
import authReducer from './auth'
import productsReducer from './products'

const appReducers = combineReducers({
  auth: authReducer,
  product: productsReducer,
})

const rootReducers = (state: any, action: any) => {
  return appReducers(state, action)
}

export default rootReducers
