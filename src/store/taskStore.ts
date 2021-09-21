import { Store, useStore } from './Store'
import gettask from '../utils/api/gettask'
import posttask from '../utils/api/posttask'
import edittask from '../utils/api/edittask'
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
          // console.log('Main Tasks :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    async loadTaskDetail_byvalues(Project: any, Domain: any, Task: any, Priority: any) {
      await gettask(Project, Domain, Task, Priority)
        .then(data => {
          settaskField(data.data)
          // console.log('Project, Domain, Task, Priority :', data)
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
          // console.log('Main Tasks :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async posttask(data: any) {
      await posttask(data)
        .then(res => {
          // console.log("posttask posttask", res)
          settaskField((oldArray: any) => [...oldArray, res.data])
        })
        .catch(err => {
          console.log(err)
        })
    },
    async edittask(id: any, data: any) {
      await edittask(id, data)
        .then(res => {
          // console.log("responce responce responce : >>>> :", res.data.result.user_details);
          localStorage.setItem('UserDetails', JSON.stringify(res.data.result.user_details));
          settaskField(oldarr => {
            return (
              oldarr &&
              oldarr.map((obj: any) => {
                const getobj = (o: any) => {
                  let x = o
                  x.project_ref = data.project_ref
                  x.priority = data.priority
                  x.task_type = data.task_type
                  x.status = data.status
                  x.domain = data.domain
                  x.title = data.title
                  x.description = data.description
                  x.remarks = data.remarks
                  x.image_link = data.image_link
                  x.linked_logs = data.linked_logs
                  x.time_spent = data.time_spent
                  x.parent_child = data.parent_child
                  x.open_id = data.open_id
                  x.open_type = data.open_type
                  x.dependencies = data.dependencies
                  x.milestone = data.milestone
                  x.progress = data.progress
                  x.start_date = data.start_date
                  x.end_date = data.end_date
                  return x
                }
                return String(obj.id) === String(id) ? getobj(obj) : obj
              })
            )
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
