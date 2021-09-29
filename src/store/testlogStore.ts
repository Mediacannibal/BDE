import gettestlog from 'utils/api/gettestlog'
import { Store, useStore } from './Store'

export class testLogItems {
  task_ref: String
  portrait: String
  landscape: String
  android: String
  ios: String
  browser: String

  constructor(o: {
    task_ref: String
    portrait: String
    landscape: String
    android: String
    ios: String
    browser: String
  }) {
    this.task_ref = o.task_ref
    this.portrait = o.portrait
    this.landscape = o.landscape
    this.android = o.android
    this.ios = o.ios
    this.browser = o.browser
  }
}

export const testLogDetails = new Store<testLogItems[] | false>(false)

export const testLogStore = () => {
  const [testLog, settestLog] = useStore(testLogDetails)

  return {
    testLog,
    settestLog,

    async loadtestLogDetail() {
      await gettestlog()
        .then(data => {
          settestLog(data.data.results)
          // console.log('Task Time Log :', data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
