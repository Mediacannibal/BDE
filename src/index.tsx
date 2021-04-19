import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import { Normalize } from 'styled-normalize'
import { BrowserRouter } from 'react-router-dom'

import ReactGA from 'react-ga';

import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

import { AnalyticsProvider } from 'use-analytics'


ReactGA.initialize('G-16Z2T4NP3J');

// Custom inline analytics plugin
const myPlugin = {
  name: 'my-custom-plugin',
  page: ({ payload }) => {
    console.log('page view fired', payload)
  },
  track: ({ payload }) => {
    console.log('track event payload', payload)
  }
}

const analytics = Analytics({
  app: 'MC-BDE',
  plugins: [
    myPlugin,
    googleAnalytics({
      trackingId: 'G-R7GER30TG2'
    })
  ]
})

ReactDOM.render(
  <AnalyticsProvider instance={analytics}>
    <BrowserRouter forceRefresh={true} >
      <Normalize />
      <App />
    </BrowserRouter>
  </AnalyticsProvider>,
  document.getElementById('root')
)
