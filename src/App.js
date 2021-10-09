import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import HomePage from './components/Pages/HomePage'

export default function App(){
  return(
    <div>
    <Router>
      <HomePage />
    </Router>
    </div>
  )
}

