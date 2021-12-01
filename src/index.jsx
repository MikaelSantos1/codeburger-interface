import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login/index'
import Register from './containers/Register'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/globalStyles'
ReactDOM.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <ToastContainer theme="colored" />
    <GlobalStyles />,
  </>,
  document.getElementById('root')
)
