// Libs
import { combineReducers } from 'redux'
import authReducer from './auth'
import todosReducer from './todos'

const appReducers = combineReducers({
  auth: authReducer,
  user: todosReducer,
})

const rootReducers = (state, action) => {
  return appReducers(state, action)
}

export default rootReducers
