import * as Actions from '../actions/auth'

export const initialState = {
  type: '',
  isLoading: false,
  auth_token: '',
}

const authReducer = (state = initialState, action) => {
  const { errors, type, data } = action
  const { token } = data || {}

  switch (type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        type,
      }

    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        type,
        isLoading: false,
        auth_token: token,
      }

    case Actions.LOGIN_FAILED:
      return {
        ...state,
        type,
        isLoading: false,
        error: errors,
      }

    case Actions.LOGOUT:
      return {
        ...state,
        type,
        auth_token: initialState.auth_token,
        isLoggedIn: false,
      }

    default:
      return state
  }
}

export default authReducer
