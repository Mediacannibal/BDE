import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'

import ReactGA from 'react-ga';

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import { AnalyticsProvider } from 'use-analytics'
import * as serviceWorker from '../serviceWorker'; 

// import firebase from "firebase/app"
// import "firebase/messaging"


ReactGA.initialize('UA-157352486-1');

// Custom inline analytics plugin
// const myPlugin = {
//   name: 'my-custom-plugin',
//   page: ({ payload }) => {
//     console.log('page view fired', payload)
//   },
//   track: ({ payload }) => {
//     console.log('track event payload', payload)
//   }
// }

const analytics = Analytics({
  app: 'MC-BDE',
  plugins: [
    // myPlugin,
    googleAnalytics({
      trackingId: 'UA-157352486-1',
      anonymizeIp: true,
      cookieConfig: {
        cookieName: 'gaCookie',
        cookieDomain: 'blog.example.co.uk',
        cookieExpires: 60 * 60 * 24 * 28,  // Time in seconds.
        cookieUpdate: 'false',
        cookieFlags: 'SameSite=None; Secure',
      }
    })
  ]
})




// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// const config = {
//   apiKey: "AIzaSyBROSFdFQWbp8K2xMMjKaqazC4HP4grI5A",
//   authDomain: "mc-bde.firebaseapp.com",
//   projectId: "mc-bde",
//   storageBucket: "mc-bde.appspot.com",
//   messagingSenderId: "181659839939",
//   appId: "1:181659839939:web:bd1bd39cb9b2232add6176",
//   measurementId: "G-R7GER30TG2"
// }
// firebase.initializeApp(config);
 
// const messaging = firebase.messaging();
// // const messaging = firebase.messaging();
// messaging.requestPermission()
//   .then(() => {
//     console.log("have permissions");
//     return messaging.getToken();
//   }).then(
//     (token) => {
//       console.log("token:", token);
//     }
//   )
//   .catch((err) => {
//     console.log("error:", err);
//   })
analytics.page()

ReactDOM.render(
  <AnalyticsProvider instance={analytics}>
    <BrowserRouter forceRefresh={true} >
      <Normalize />
      <App />
    </BrowserRouter>
  </AnalyticsProvider>,
  document.getElementById('root')
)

serviceWorker.unregister();
