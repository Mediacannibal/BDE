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
import UserManagement, { header_options } from './UserManagement';
import TestingChecklist from './Testing Checklist';
import BugList from './BugList';
import AddEditTest from './AddEditTest';
import HomeScreen from './HomeScreen';
import NewUserForm from './NewUserForm';
import AddEditTask from './AddEditTask';
import CreatePassword from './CreatePassword';
import Dashboard from './Dashboard';

const dashboard_screen = [
  { path: '/', component: HomeScreen, header: header_options },
  { path: '/Project', component: ProjectScreen, header: header_options },
  { path: '/Meeting', component: MeetingScreen, header: header_options },
  { path: '/TaskDetails', component: TaskDetails, header: header_options },
  { path: '/TaskList', component: TaskList, header: header_options },
  { path: '/TestingChecklist', component: TestingChecklist, header: header_options },
  { path: '/BugList', component: BugList, header: header_options },
  { path: '/AddEditBug', component: AddEditBug, header: header_options },
  { path: '/UserManagement', component: UserManagement, header: header_options },
  { path: '/AddEditTest', component: AddEditTest, header: header_options },
  { path: '/AddEditTask', component: AddEditTask, header: header_options },]

const fullpage_screen = [
  { path: '/Login', component: LoginScreen, header: header_options },
  { path: '/Calender', component: CalenderScreen, header: header_options },
  { path: '/NewUserForm', component: NewUserForm, header: header_options },
  { path: '/CreatePassword', component: CreatePassword, header: header_options }]


const App = () => {
  return (

    <Router>

      <Switch>

        {fullpage_screen.map((Data: any) =>
          <Route exact path={Data.path}>
            <Data.component />
          </Route>
        )}

        {dashboard_screen.map((Data: any) =>
          <Route exact path={Data.path}>
            <Dashboard screen={<Data.component />} screen_name={Data.path} header_options={header_options} />
          </Route>
        )}

      </Switch>

    </Router>
  )
}

export default App