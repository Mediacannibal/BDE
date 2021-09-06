import { Store, useStore } from './Store'
import gettask from '../utils/api/gettask'
import posttask from '../utils/api/posttask'
export class taskItems {
  id: String
  project_ref: String
  priority: String
  task_type: String
  status: String
  domain: String
  title: String
  description: String
  remarks: String
  image_link: String
  linked_logs: String
  time_spent: String
  parent_child: String
  open_id: String
  open_type: String
  dependencies: String
  milestone: String
  progress: String
  start_date: String
  end_date: String
  assigned_by: String
  assigned_to: String
  assisted_by: String
  created_at: String
  created_by: String
  deleted_at: String
  deleted_by: String
  isDisabled: String
  updated_at: String
  updated_by: String

  constructor(o: {
    id: String
    project_ref: String
    priority: String
    task_type: String
    status: String
    domain: String
    title: String
    description: String
    remarks: String
    image_link: String
    linked_logs: String
    time_spent: String
    parent_child: String
    open_id: String
    open_type: String
    dependencies: String
    milestone: String
    progress: String
    start_date: String
    end_date: String
    assigned_by: String
    assigned_to: String
    assisted_by: String
    created_at: String
    created_by: String
    deleted_at: String
    deleted_by: String
    isDisabled: String
    updated_at: String
    updated_by: String

  }) {
    this.id = o.id
    this.project_ref = o.project_ref
    this.priority = o.priority
    this.task_type = o.task_type
    this.status = o.status
    this.domain = o.domain
    this.title = o.title
    this.description = o.description
    this.remarks = o.remarks
    this.image_link = o.image_link
    this.linked_logs = o.linked_logs
    this.time_spent = o.time_spent
    this.parent_child = o.parent_child
    this.open_id = o.open_id
    this.open_type = o.open_type
    this.dependencies = o.dependencies
    this.milestone = o.milestone
    this.progress = o.progress
    this.start_date = o.start_date
    this.end_date = o.end_date
    this.assigned_by = o.assigned_by
    this.assigned_to = o.assigned_to
    this.assisted_by = o.assisted_by
    this.created_at = o.created_at
    this.created_by = o.created_by
    this.deleted_at = o.deleted_at
    this.deleted_by = o.deleted_by
    this.isDisabled = o.isDisabled
    this.updated_at = o.updated_at
    this.updated_by = o.updated_by

  }
}

export const taskDetails = new Store<taskItems[] | false>(false)

export const taskStore = () => {
  const [taskField, settaskField] = useStore(taskDetails)

  return {
    taskField,
    settaskField,

    async loadTaskDetail() {
      await gettask("", "", "", " ")
        .then(data => {
          settaskField(data.data)
          console.log('Main Tasks :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    async loadTaskDetail_byvalues(Project: any, Domain: any, Task: any, Priority: any) {
      await gettask(Project, Domain, Task, Priority)
        .then(data => {
          settaskField(data.data)
          console.log('Project, Domain, Task, Priority :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async loadTaskDetail_withcallback(callback: any) {
      await gettask("", "", "", " ")
        .then(data => {
          settaskField(data.data)
          callback(data.data)
          console.log('Main Tasks :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async posttask(data: any) {
      await posttask(data)
        .then(res => {
          console.log("posttask posttask", res)
          settaskField((oldArray: any) => [...oldArray, res.data])
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
