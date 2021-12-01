import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
ReactDOM.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer theme="colored" />
    <GlobalStyles />,
  </>,
  document.getElementById('root')
)
