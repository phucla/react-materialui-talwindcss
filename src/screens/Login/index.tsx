import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as Actions from '../../stores/actions'
import { Auth } from '../../types'
import ROUTES from '../../constants/routes'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authStore = useSelector((state: Auth) => state.auth)
  const { type } = authStore || {}
  useEffect(() => {
    if (type === Actions.LOGIN_SUCCESS) {
      navigate(ROUTES.HOME)
    }

    // eslint-disable-next-line
  }, [type])

  const handleLogin = () => {
    dispatch(
      Actions.loginRequest({
        username: 'username',
        password: 'password',
      })
    )
  }

  console.log('type', type)
  return (
    <div className="text-center pt-52">
      <p className="text-2xl">Login Screen</p>
      <button
        type="button"
        className="py-2 px-8 text-2xl cursor-pointer border-0"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}

export default Login
