import { Store, useStore } from './Store'
import getassignlog from '../utils/api/getassignlog'
import postassignlog from '../utils/api/postassignlog'

export class assignlogItems {
  project_task: String
  project: String
  project_task_id: String
  user: String
  assign_message: String
  description: String
  status: String


  constructor(o: {
    project_task: String
    project: String
    project_task_id: String
    user: String
    assign_message: String
    description: String
    status: String

  }) {
    this.project_task = o.project_task
    this.project = o.project
    this.project_task_id = o.project_task_id
    this.user = o.user
    this.assign_message = o.assign_message
    this.description = o.description
    this.status = o.status
  }
}

export const assignlogDetails = new Store<assignlogItems[] | false>(false)

export const assignlogStore = () => {
  const [assignlog, setassignlog] = useStore(assignlogDetails)

  return {
    assignlog,
    setassignlog,

    async loadassignlogDetail(data: any) {
      await getassignlog(data)
        .then(data => {
          setassignlog(data.data)
          console.log('assignlog assignlog :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    async postassignlog(data: any) {
      await postassignlog(data)
        .then(res => {
          console.log("postassignlog postassignlog", res)
          setassignlog((oldArray: any) => [...oldArray, res.data])
        })
        .catch(err => {
          console.log(err)
        })
    },

  }
}
