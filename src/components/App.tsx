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
import AddEditTest from './AddEditTest';
import HomeScreen from './HomeScreen';
import NewUserForm from './NewUserForm';
import AddEditTask from './AddEditTask';
import CreatePassword from './CreatePassword';
import Header from './common/Header';


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
        <Header page={<ProjectScreen />} page_name="Project"/>
        </Route>

        <Route exact path='/Meeting'>
          <Header page={<MeetingScreen />} page_name="Meetings" />
        </Route>

        <Route exact path='/TaskDetails'>
        <Header page={<TaskDetails />} page_name="Task Details" />
        </Route>

        <Route exact path='/TaskList'>
          <Header page={<TaskList />} page_name="Task List" />
        </Route>

        <Route exact path='/TestingChecklist'>
          <Header page={<TestingChecklist />} page_name="Testing Checklist" />
        </Route>

        <Route exact path='/BugList'>
          <Header page={<BugList />} page_name="Bug Log" />
        </Route>

        <Route exact path='/AddEditBug'>
          <AddEditBug />
        </Route>

        <Route exact path='/UserManagement'>
          <Header page={<UserManagement />} page_name="User Management" />
        </Route>

        <Route exact path='/AddEditTest'>
          <AddEditTest />
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