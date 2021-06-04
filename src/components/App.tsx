import 'core-js/stable'
import React, { useEffect, useState } from 'react'
import 'regenerator-runtime/runtime'
import { HashRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

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
import NewUserForm from './Forms/NewUserForm';
import TestSelectionForm from './Forms/TestSelection/TestSelectionForm';
import ApiRecords from './Api Records';
import Notifications from './Notifications';
import Report from "../components/AnalyticsReport/index";
import TaskTimeLog from './TaskTimeLog';
import AppGantt from './ChatProcess/AppGantt';
import { getToken, onMessageListener} from '../../firebase'; 
import Phoneauth from './Phoneauth';

const dashboard_screen = [
  { path: '/Home', component: HomeScreen },
  { path: '/Project', component: ProjectScreen },
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
  { path: '/AppGantt', component: AppGantt },
  { path: '/Phoneauth', component: Phoneauth },
]

const fullpage_screen = [
  { path: '/', component: LoginScreen }, 
  { path: '/Meeting', component: MeetingScreen },
]

const App = () => {

  useEffect(() => {
   if(navigator.userAgent.toLowerCase().indexOf('safari/') > -1)
    {
      getToken()
    }
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

if(navigator.userAgent.toLowerCase().indexOf('safari/') > -1)
{  
  onMessageListener().then((message:any) => {
    console.log(message)
  }).catch(err => console.log('failed: ', err));
  
  
}

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