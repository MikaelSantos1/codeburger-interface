import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoute from './privateRoutes'
function Rotas() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Register} />
        <PrivateRoute exact component={Home} path="/" />
      </Switch>
    </Router>
  )
}
export default Rotas
