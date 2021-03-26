import 'core-js/stable'
import React from 'react'
import 'regenerator-runtime/runtime'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import "./app.css";

import LoginScreen from './LoginScreen';
import CalenderScreen from 'components/CalenderScreen';
import ProjectScreen from './ProjectScreen';
import MeetingScreen from './MeetingScreen';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import AddEditBug from './AddEditBug';
import UserManagement from './UserManagement';
import TestingChecklist from './Testing Checklist';
import BugList from './BugList';
import AddEditTestItem from './AddEditTestItem';
import HomeScreen from './HomeScreen';
import NewUserForm from './NewUserForm';
import AddEditTask from './AddEditTask';
import CreatePassword from './CreatePassword';


const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <HomeScreen />
        </Route>

        <Route exact path='/Login'>
          <LoginScreen />
        </Route>

        <Route exact path='/Calender'>
          <CalenderScreen />
        </Route>

        <Route exact path='/Project'>
          <ProjectScreen />
        </Route>

        <Route exact path='/Meeting'>
          <MeetingScreen />
        </Route>

        <Route exact path='/TaskDetails'>
          <TaskDetails />
        </Route>

        <Route exact path='/TaskList'>
          <TaskList />
        </Route>

        <Route exact path='/TestingChecklist'>
          <TestingChecklist />
        </Route>

        <Route exact path='/BugList'>
          <BugList />
        </Route>

        <Route exact path='/AddEditBug'>
          <AddEditBug />
        </Route>

        <Route exact path='/UserManagement'>
          <UserManagement />
        </Route>

        <Route exact path='/AddEditTestItem'>
          <AddEditTestItem />
        </Route>

        <Route exact path='/NewUserForm'>
          <NewUserForm />
        </Route>

        <Route exact path='/AddEditTask'>
          <AddEditTask />
        </Route>

        <Route exact path='/CreatePassword'>
          <CreatePassword />
        </Route>

      </Switch>
    </Router>
  )
}

export default App