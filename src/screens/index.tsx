import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Switch, useHistory} from 'react-router-dom'
import { useSelector } from 'react-redux'
import ROUTES from '../constants/routes'
import Indicator from '../components/commons/Indicator'
import {Auth} from '../types'

// helpers
import API from '../services/apis'

const LoginScreen = lazy(() => import('./Login'))
const TodosScreen = lazy(() => import('./Todos'))

const Screens = () => {
  const authStore = useSelector((state: Auth) => state.auth)
  const history = useHistory()
  const { auth_token } = authStore

  useEffect(() => {
    if (auth_token) {
      window.onpopstate = (e) => {
        e.preventDefault()
        history.push(ROUTES.HOME)
      }
    } else {
      history.push(ROUTES.LOGIN)
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
        <Switch>
          <Route exact path={ROUTES.HOME} component={TodosScreen} />
          <Route path={ROUTES.LOGIN} component={LoginScreen} />
        </Switch>
      </Suspense>
  )
}

export default Screens
