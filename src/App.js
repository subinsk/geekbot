import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage'
import NewUser from './components/Pages/NewUser'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/callbacks/newuser' component={NewUser} />
      </Switch>
    </Router>
  )
}

