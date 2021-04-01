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
import UserManagement, { header_options } from './UserManagement';
import TestingChecklist from './Testing Checklist';
import BugList from './BugList';
import HomeScreen from './HomeScreen';
import Dashboard from './Dashboard';
import AddEditTest from './Forms/AddEditTest';
import AddEditBug from './Forms/AddEditBug';
import AddEditTask from './Forms/AddEditTask';
import NewUserForm from './Forms/NewUserForm';
import UserProfile from './UserMenuItems/UserProfile';
import UserSettings from './UserMenuItems/UserSettings';
import ChatProject from './ChatProject';
import AddEditProject from './Forms/AddEditProject';

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
  { path: '/AddEditTask', component: AddEditTask, header: header_options },
  { path: '/AddEditBug', component: AddEditBug, header: header_options },
  { path: '/AddEditProject', component: AddEditProject, header: header_options },
  { path: '/UserProfile', component: UserProfile, header: header_options },
  { path: '/UserSettings', component: UserSettings, header: header_options },
  { path: '/ChatProject', component: ChatProject, header: header_options },
]

const fullpage_screen = [
  { path: '/Login', component: LoginScreen, header: header_options },
  { path: '/Calender', component: CalenderScreen, header: header_options },
  { path: '/NewUserForm', component: NewUserForm, header: header_options },
]


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