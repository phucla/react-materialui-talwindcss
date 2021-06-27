import React, { Suspense, lazy, useEffect } from 'react'
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ROUTES from '../constants/routes'
import Indicator from '../components/commons/Indicator'
import { Auth } from '../types'
import DashboardLayout from 'components/layout/DashboardLayout'

// helpers
import API from '../services/apis'

const LoginScreen = lazy(() => import('./Login'))
const ProductScreen = lazy(() => import('./Products'))

const Screens = () => {
  const authStore = useSelector((state: Auth) => state.auth)
  const navigate = useNavigate()
  const { auth_token } = authStore

  useEffect(() => {
    if (auth_token) {
      window.onpopstate = (e) => {
        e.preventDefault()
        navigate(ROUTES.HOME)
      }
    } else {
      navigate(ROUTES.LOGIN)
    }

    // eslint-disable-next-line
  }, [auth_token])

  useEffect(() => {
    if (auth_token) {
      API.setHeader('Authorization', `Token ${auth_token}`)
    }

    // eslint-disable-next-line
  }, [auth_token])

  return (
    <Suspense fallback={<Indicator />}>
      <DashboardLayout>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />

          <Route path="/" element={<ProductScreen />} />
        </Routes>
      </DashboardLayout>
    </Suspense>
  )
}

export default Screens
