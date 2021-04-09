import 'core-js/stable'
import React, { useState } from 'react'
import 'regenerator-runtime/runtime'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import "./app.css";

import LoginScreen from './LoginScreen';
import ProjectScreen from './ProjectScreen';
import MeetingScreen from './MeetingScreen'; 
import Meetingvideo from './MeetingScreen/Meetingvideo'; 
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import UserManagement from './UserManagement';
import TestingChecklist from './Testing Checklist';
import BugList from './BugList';
import HomeScreen from './HomeScreen';
import Dashboard from './Dashboard';
import UserProfile from './UserMenuItems/UserProfile';
import UserSettings from './UserMenuItems/UserSettings';
import ChatProject from './ChatProject';
import NewUserForm from './Forms/NewUserForm';
import TestSelectionForm from './Forms/TestSelection/TestSelectionForm';

const dashboard_screen = [
  { path: '/Home', component: HomeScreen },
  { path: '/Project', component: ProjectScreen },
  { path: '/Meeting', component: MeetingScreen },
  { path: '/TaskDetails', component: TaskDetails },
  { path: '/TaskList', component: TaskList },
  { path: '/TestingChecklist', component: TestingChecklist },
  { path: '/BugList', component: BugList },
  { path: '/UserManagement', component: UserManagement },
  { path: '/UserProfile', component: UserProfile },
  { path: '/UserSettings', component: UserSettings },
  { path: '/ChatProject', component: ChatProject },
  { path: '/NewUserForm', component: NewUserForm },
  { path: '/TestSelectionForm', component: TestSelectionForm },
]

const fullpage_screen = [
  { path: '/', component: LoginScreen }, 
  { path: '/meetinghome/:url', component: Meetingvideo }, 
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

        {dashboard_screen.map((Data: any) => {
          const [blabla, setblabla] = useState()
          return (
            <Route exact path={Data.path}>
              <Dashboard screen={<Data.component setheader_options={setblabla} />} screen_name={Data.path} header_options={blabla} />
            </Route>
          )
        }
        )}
      </Switch>
    </Router>
  )
}

export default App