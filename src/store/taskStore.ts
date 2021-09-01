import gettask from '../utils/api/gettask'
import { Store, useStore } from './Store'

export class taskItems {
  assigned_by: String
  assigned_to: String
  assisted_by: String
  created_at: String
  created_by: String
  deleted_at: String
  deleted_by: String
  dependencies: String
  description: String
  domain: String
  end_date: String
  id: String
  image_link: String
  isDisabled: Boolean
  linked_logs: String
  milestone: Boolean
  open_id: String
  open_type: String
  parent_child: String
  priority: String
  progress: String
  project_ref: String
  remarks: String
  start_date: String
  status: String
  task_type: String
  time_spent: String
  title: String
  updated_at: String
  updated_by: String

  constructor(o: {
    assigned_by: String
    assigned_to: String
    assisted_by: String
    created_at: String
    created_by: String
    deleted_at: String
    deleted_by: String
    dependencies: String
    description: String
    domain: String
    end_date: String
    id: String
    image_link: String
    isDisabled: Boolean
    linked_logs: String
    milestone: Boolean
    open_id: String
    open_type: String
    parent_child: String
    priority: String
    progress: String
    project_ref: String
    remarks: String
    start_date: String
    status: String
    task_type: String
    time_spent: String
    title: String
    updated_at: String
    updated_by: String

  }) {
    this.assigned_by = o.assigned_by
    this.assigned_to = o.assigned_to
    this.assisted_by = o.assisted_by
    this.created_at = o.created_at
    this.created_by = o.created_by
    this.deleted_at = o.deleted_at
    this.deleted_by = o.deleted_by
    this.dependencies = o.dependencies
    this.description = o.description
    this.domain = o.domain
    this.end_date = o.end_date
    this.id = o.id
    this.image_link = o.image_link
    this.isDisabled = o.isDisabled
    this.linked_logs = o.linked_logs
    this.milestone = o.milestone
    this.open_id = o.open_id
    this.open_type = o.open_type
    this.parent_child = o.parent_child
    this.priority = o.priority
    this.progress = o.progress
    this.project_ref = o.project_ref
    this.remarks = o.remarks
    this.start_date = o.start_date
    this.status = o.status
    this.task_type = o.task_type
    this.time_spent = o.time_spent
    this.title = o.title
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
  }
}
