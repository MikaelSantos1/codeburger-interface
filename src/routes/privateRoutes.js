import React from 'react'
import { Navigate } from 'react-router-dom'

import PropTypes from 'prop-types'
function PrivateRoute({ children, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}
export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
