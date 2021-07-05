import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from 'components/App'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'

import ReactGA from 'react-ga';

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import { AnalyticsProvider } from 'use-analytics'
import * as serviceWorker from './serviceWorker';

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js').then(function (reg) {
    console.log('Service Worker Registered!', reg);

    reg.pushManager.getSubscription().then(function (sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log('Not subscribed to push service!');
      } else {
        // We have a subscription, update the database
        console.log('Subscription object: ', sub);
      }
    });
  })
    .catch(function (err) {
      console.log('Service Worker registration failed: ', err);
    });
}

function subscribeUser() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (reg) {

      reg.pushManager.subscribe({
        userVisibleOnly: true
      }).then(function (sub) {
        console.log('Endpoint URL: ', sub.endpoint);
      }).catch(function (e) {
        if (Notification.permission === 'denied') {
          console.warn('Permission for notifications was denied');
        } else {
          console.error('Unable to subscribe to push', e);
        }
      });
    })
  }
}

if ('Notification' in window) {
  if (window.Notification.permission === 'granted') {
    new window.Notification('Time is over!');
  }
}


ReactGA.initialize('UA-157352486-1');

const analytics = Analytics({
  app: 'MC-BDE',
  plugins: [
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
analytics.page()

Notification.requestPermission(function (status) {
  console.log('Notification permission status:', status);
});

function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function (reg) {
      var options = {
        body: 'Here is a notification body!',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {
            action: 'explore', title: 'Explore this new world',
            icon: 'images/checkmark.png'
          },
          {
            action: 'close', title: 'Close notification',
            icon: 'images/xmark.png'
          },
        ]
      };
      reg.showNotification('Hello world!', options);
    });
  }
}

ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <BrowserRouter forceRefresh={true} >
        <Normalize />
        <App />
      </BrowserRouter>
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// serviceWorker.unregister();
