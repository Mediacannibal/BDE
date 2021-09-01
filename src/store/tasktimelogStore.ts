import gettasktimelog from 'utils/api/gettasktimelog'
import { Store, useStore } from './Store'

export class taskTimeLogItems {
  id: String
  company: String
  branch: String
  username: String
  first_name: String
  last_name: String
  time_spent: String
  task_ref: String
  task_name: String
  created_by: String
  created_at: String
  updated_at: String

  constructor(o: {
    id: String
    company: String
    branch: String
    username: String
    first_name: String
    last_name: String
    time_spent: String
    task_ref: String
    task_name: String
    created_by: String
    created_at: String
    updated_at: String
  }) {
    this.id = o.id
    this.company = o.company
    this.branch = o.branch
    this.username = o.username
    this.first_name = o.first_name
    this.last_name = o.last_name
    this.time_spent = o.time_spent
    this.task_ref = o.task_ref
    this.task_name = o.task_name
    this.created_by = o.created_by
    this.created_at = o.created_at
    this.updated_at = o.updated_at
  }
}

export const taskTimeLogDetails = new Store<taskTimeLogItems[] | false>(false)

export const taskTimeLogStore = () => {
  const [taskTimeLogField, settaskTimeLogField] = useStore(taskTimeLogDetails)

  return {
    taskTimeLogField,
    settaskTimeLogField,

    async loadTaskTimeLogDetail() {
      await gettasktimelog()
        .then(data => {
          settaskTimeLogField(data.data.results[0])
          console.log('Task Time Log :', data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
