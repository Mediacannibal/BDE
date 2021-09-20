import 'core-js/stable'
import React, { useState, useEffect } from 'react'
import 'regenerator-runtime/runtime'
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Cookie from './Common/Cookies'

import ReactGA from 'react-ga';

import "./app.css";

import LoginScreen from './LoginScreen';
import ProjectScreen from './ProjectScreen';
import MeetingScreen from './MeetingScreen';
// import Meetingvideo from './MeetingScreen/Meetingvideo';
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
import NewUserForm from './Forms/UserSetup';
import TestSelectionForm from './Forms/TestSelection/TestSelectionForm';
import ApiRecords from './Api Records';
import Notifications from './Notifications';
import Report from "../components/AnalyticsReport/index";
import TaskTimeLog from './TaskTimeLog';
import AppGantt from './ChatProcess/AppGantt';
import { getToken, onMessageListener } from '../../firebase';
import MeetingRoom from './MeetingScreen/MeetingRoom';
import ServerStatus from './ServerStatus'

const dashboard_screen = [
  { path: '/Home', component: HomeScreen },
  { path: '/Project', component: ProjectScreen },
  { path: '/TaskDetails/:id', component: TaskDetails },
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
  { path: '/AppGantt', component: AppGantt },
  { path: '/Meeting', component: MeetingScreen },
  { path: '/ServerStatus', component: ServerStatus },
]

const fullpage_screen = [
  { path: '/', component: LoginScreen },
  { path: "/MeetingRoom/:roomID", component: MeetingRoom },
  { path: '/AnalyticsFullScreen', component: Report },
]


const App = () => {

  const [enable, setenable] = useState(true);


  useEffect(() => {
    if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {
      getToken()

      isEnabled()
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  if (navigator.userAgent.toLowerCase().indexOf('safari/') > -1) {

    onMessageListener().then(message => {
      // setShow(true);
    }).catch(err => console.log('failed: ', err));
  }

  const isEnabled = () => {
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      console.log('PERMISSION : :', true);
      setenable(true)
      return true
    } catch (e) {
      console.log('PERMISSION : :', false);
      setenable(false)

      return false

    }
  }

  return (
    <>
      {
        enable ?
          <Router>
            < Switch >
              {
                fullpage_screen.map((Data: any) =>
                  <Route exact path={Data.path}>
                    <Data.component />
                  </Route>
                )
              }

              {
                dashboard_screen.map((Data: any) => {
                  const [blabla, setblabla] = useState()
                  return (
                    <Route exact path={Data.path}>
                      <Dashboard screen={<Data.component setheader_options={setblabla} />} screen_name={Data.path} header_options={blabla} />
                    </Route>
                  )
                }
                )
              }
            </Switch >
          </Router >
          :
          <>
            <Cookie localstorage_permission={"disable"} />
          </>
      }
    </>)
}

export default withRouter(App);