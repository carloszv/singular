import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import PageLayout from 'components/foundations/PageLayout/PageLayout'
import Home from 'pages/Home'
import Signup from 'pages/Signup'
import Login from 'pages/Login'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <PageLayout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <span>Page not found</span>
          </Route>
        </Switch>
      </Router>
    </PageLayout>
  )
}
