import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import mainStore from 'stores'
import Screens from './screens'

const App = () => {
  return (
    <Router>
      <Provider store={mainStore.store}>
        <PersistGate persistor={mainStore.persistor}>
          <Screens />
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
