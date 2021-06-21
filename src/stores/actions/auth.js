export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED'
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILED = 'SIGNUP_FAILED'
export const VERIFY_ENTRY_CODE_REQUEST = 'VERIFY_ENTRY_CODE_REQUEST'
export const VERIFY_ENTRY_CODE_SUCCESS = 'VERIFY_ENTRY_CODE_SUCCESS'
export const VERIFY_ENTRY_CODE_FAILED = 'VERIFY_ENTRY_CODE_FAILED'
export const RESET_TYPE = 'RESET_TYPE'
export const HANDLE_CREATE_NEW_ACCOUNT = 'HANDLE_CREATE_NEW_ACCOUNT'

/**
 * Create new account
 * @param {Object} data
 */
export const handleCreateNewAccount = (data) => ({
  type: HANDLE_CREATE_NEW_ACCOUNT,
  payload: data,
})

/**
 * Reset Type
 */
export const resetType = () => ({
  type: RESET_TYPE,
})

/**
 * Verify entry code request
 * @param {Object} data
 */
export const verifyEntryCodeRequest = (data) => ({
  type: VERIFY_ENTRY_CODE_REQUEST,
  payload: data,
})

/**
 * Signup request
 * @param {Object} data
 */
export const signupRequest = (data) => ({
  type: SIGNUP_REQUEST,
  payload: data,
})

/**
 * Login request
 * @param {Object} data
 * {
 *   "email": "admin@gmail.com",
 *   "password": "123456789",
 *   "is_admin": true,
 *  }
 */
export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  payload: data,
})

/**
 * User logout
 */
export const userLogout = () => ({
  type: LOGOUT,
})

/**
 * Reset password request
 * @param {Object} data
 * {
 *  "new_password": "abcd@1234",
 *  "confirm_password": "abcd@1234",
 *  "uidb64": "uidb64",
 *  "token": "token"
 *  }
 */
export const resetPasswordRequest = (data) => ({
  type: RESET_PASSWORD_REQUEST,
  payload: data,
})

/**
 * Forgot password
 */
export const forgotPasswordRequest = (data) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: data,
})
