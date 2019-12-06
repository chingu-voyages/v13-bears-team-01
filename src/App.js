import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import CreateReminder from './pages/create-reminder-page/CreateReminder'
import EditReminder from './pages/edit-reminder-page/EditReminder'
const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <HomePage />
      </Route>
      <Route path='/create'>
        <CreateReminder />
      </Route>
      <Route path='/edit/:id'>
        <EditReminder />
      </Route>
    </Switch>
  </Router>
)

export default App
