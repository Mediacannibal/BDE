import 'core-js/stable'
import React, { useEffect, useState } from 'react'
import 'regenerator-runtime/runtime'
import { HashRouter as Router, Switch, Route, withRouter, useLocation } from 'react-router-dom'

import ReactGA from 'react-ga';

import { useAnalytics } from 'use-analytics'

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
import ApiRecords from './Api Records';
import Notifications from './Notifications';
import Report from "../components/AnalyticsReport/index";
import TaskTimeLog from './TaskTimeLog';

const dashboard_screen = [
  { path: '/Home', component: HomeScreen },
  { path: '/Project', component: ProjectScreen },
  { path: '/Meeting', component: MeetingScreen },
  { path: '/TaskDetails', component: TaskDetails },
  { path: '/TaskList', component: TaskList },
  { path: '/TaskTimeLog', component: TaskTimeLog },
  { path: '/TestingChecklist', component: TestingChecklist },
  { path: '/BugList', component: BugList },
  { path: '/UserManagement', component: UserManagement },
  { path: '/UserProfile', component: UserProfile },
  { path: '/UserSettings', component: UserSettings },
  { path: '/ChatProject', component: ChatProject },
  { path: '/NewUserForm', component: NewUserForm },
  { path: '/TestSelectionForm', component: TestSelectionForm },
  { path: '/ApiRecords', component: ApiRecords },
  { path: '/Notifications', component: Notifications },
  { path: '/report', component: Report },
]

const fullpage_screen = [
  { path: '/', component: LoginScreen },
  { path: '/meetinghome/:url', component: Meetingvideo },
]

const App = () => {

  let location = useLocation()
  const analytics = useAnalytics()

  // When location changes in app send page view
  useEffect(() => {
    analytics.page()
  }, [location])


  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });



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

export default withRouter(App);