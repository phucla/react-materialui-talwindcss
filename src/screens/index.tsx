import React, { Suspense, lazy, useEffect } from 'react'
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ROUTES from 'constants/routes'
import Indicator from 'components/commons/Indicator'
import DashboardLayout from 'components/layout/DashboardLayout'
import { selectToken } from 'screens/auth/authSlice'

const LoginScreen = lazy(() => import('./auth/pages/Login'))
const ProductScreen = lazy(() => import('./product/pages/Product'))

const Screens = () => {
  const navigate = useNavigate()
  const auth_token = useSelector(selectToken)
  useEffect(() => {
    if (auth_token) {
        navigate('/app/product')
    } else {
      navigate(ROUTES.LOGIN)
    }

    // eslint-disable-next-line
  }, [auth_token])

  return (
    <Suspense fallback={<Indicator />}>
      <DashboardLayout>
        <Routes>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/app/product">
            <ProductScreen />
          </Route>
        </Routes>
      </DashboardLayout>
    </Suspense>
  )
}

export default Screens
