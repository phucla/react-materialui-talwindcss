// helpers
import API from '../services/apis'
import * as Actions from '../stores/actions'

const authMiddleware = () => (next) => (action) => {
  const { type } = action
  // add token to API header when user sign in success
  if (type === Actions.LOGIN_SUCCESS || type === Actions.SIGNUP_SUCCESS) {
    // set token on header api
    API.setHeader('Authorization', `Token ${action.data.auth_token}`)
  } else if (type === Actions.LOGOUT) {
    // remove token on API header
    delete API.headers.Authorization
  }
  next(action)
}

export default authMiddleware
