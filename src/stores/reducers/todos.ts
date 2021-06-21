import * as Actions from '../actions/auth'

export const initialState = {
  type: '',
  isLoading: false,
  entry_code: '',
  error: '',
  isLoggedIn: false,
  auth_token: null,
  resetPasswordMessage: '',
  newAccount: {},
  breadcrumb: [],
  campaignId: '',
  campaignSlug: '',
  isCompleted: false,
}

const authReducer = (state = initialState, action) => {
  const { errors, type, data } = action
  const { auth_token } = data || {}

  switch (type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        error: initialState.error,
        isLoading: true,
        type,
      }

    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        type,
        isLoggedIn: true,
        isLoading: false,
        error: initialState.error,
        auth_token,
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
