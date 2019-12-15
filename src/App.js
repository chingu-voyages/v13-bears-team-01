import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import CreateReminder from './pages/create-reminder-page/CreateReminder'
import EditReminder from './pages/edit-reminder-page/EditReminder'

const App = () => {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    fetch('/api/reminders')
      .then((response) => {
        response.json()
          .then((data) => {
            if (data.error) {
              console.error(data.error)
            } else {
              console.log('from fetch', data)
              setReminders(data)
            }
          })
      })
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/create'>
          <CreateReminder reminders={reminders} setReminders={setReminders} />
        </Route>
        <Route path='/edit/:id'>
          <EditReminder />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
