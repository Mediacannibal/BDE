import 'core-js/stable'
import React from 'react'
import 'regenerator-runtime/runtime'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import "./app.css";

import LoginScreen from './LoginScreen';
import CalenderScreen from 'components/CalenderScreen';
import ProjectScreen from './ProjectScreen';
import TaskScreen from './TaskScreen';


const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <LoginScreen />
        </Route>

        <Route exact path='/CalenderScreen'>
          <CalenderScreen />
        </Route>

        <Route exact path='/ProjectScreen'>
          <ProjectScreen />
        </Route>

        <Route exact path='/TaskScreen'>
          <TaskScreen />
        </Route>

      </Switch>
    </Router>
  )
}

export default App