import React, {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css';

function App() {

  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}></Route>
      <Route exact path='/' component={Login}></Route>
    </Switch> 
  );
}

export default App;
