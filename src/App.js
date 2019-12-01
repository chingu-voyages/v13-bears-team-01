import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home-page/HomePage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
