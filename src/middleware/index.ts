// helpers
import API from 'services/apis'
import { authActions} from 'screens/auth/authSlice'

const authMiddleware = () => (next: any) => (action:any) => {
  const { type } = action
  // add token to API header when user sign in success
  if (type === authActions.loginSuccess.type) {
    // set token on header api
    API.setHeader('Authorization', `Token ${action.payload.auth_token}`)
  } else if (type === authActions.logout.type) {
    // remove token on API header
    delete API.headers.Authorization
  }
  next(action)
}

export default authMiddleware
