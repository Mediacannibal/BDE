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
