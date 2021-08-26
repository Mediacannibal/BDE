import { CommonAPi } from 'utils/api'
import { useAuth } from './authStore'
import { Store, useStore } from './Store'

export class isGanttItem {
  assigned_by_id: Number
  assigned_to_id: Number
  assisted_by_id: Number
  created_at: String
  created_by_id: Number
  deleted_at: String
  deleted_by_id: String
  dependencies: String
  description: String
  domain: String
  end_date: String
  id: Number
  image_link: String
  isDisabled: boolean
  linked_logs: String
  milestone: boolean
  open_id: String
  open_type: String
  parent_child: String
  priority: String
  progress: String
  project_ref_id: Number
  remarks: String
  start_date: String
  status: String
  task_type: String
  time_spent: String
  title: String
  updated_at: String
  updated_by_id: Number

  constructor(o: {
    assigned_by_id: Number
    assigned_to_id: Number
    assisted_by_id: Number
    created_at: String
    created_by_id: Number
    deleted_at: String
    deleted_by_id: String
    dependencies: String
    description: String
    domain: String
    end_date: String
    id: Number
    image_link: String
    isDisabled: boolean
    linked_logs: String
    milestone: boolean
    open_id: String
    open_type: String
    parent_child: String
    priority: String
    progress: String
    project_ref_id: Number
    remarks: String
    start_date: String
    status: String
    task_type: String
    time_spent: String
    title: String
    updated_at: String
    updated_by_id: Number
  }) {
    this.assigned_by_id = o.assigned_by_id
    this.assigned_to_id = o.assigned_to_id
    this.assisted_by_id = o.assisted_by_id
    this.created_at = o.created_at
    this.created_by_id = o.created_by_id
    this.deleted_at = o.deleted_at
    this.deleted_by_id = o.deleted_by_id
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
    this.project_ref_id = o.project_ref_id
    this.remarks = o.remarks
    this.start_date = o.start_date
    this.status = o.status
    this.task_type = o.task_type
    this.time_spent = o.time_spent
    this.title = o.title
    this.updated_at = o.updated_at
    this.updated_by_id = o.updated_by_id
  }
}

export const isGanttChartStore = new Store<isGanttItem[] | false>(false)

export const ganttChartDetails = () => {
  const [isGantt, setisGantt] = useStore(isGanttChartStore)
  const { auth } = useAuth()

  return {
    isGantt,
    setisGantt,

    async loadGanttDetail() {
      CommonAPi(
        {
          path: `tasks/project/?user=`,
          method: 'get',
          auth: auth ? auth : false,
        },
        async (data: any, errorresponse: any) => {
          if (data.status === 200) {
            // console.log('Project Tasks: ', data.data.results)
            setisGantt(data.data.results)
          } else {
            console.log('error ' + JSON.stringify(data))
            console.log('error ' + JSON.stringify(errorresponse))
          }
        }
      )
    },
  }
}
