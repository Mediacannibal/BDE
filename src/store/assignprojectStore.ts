import { Store, useStore } from './Store'
import getassignprojecttask from '../utils/api/getassignprojecttask'

export class assignprojectItems {
  id: String
  company_ref: String
  branch_ref: String
  design: Boolean
  development: Boolean
  marketting: Boolean
  title: String
  description: String
  logo: String
  start_date: String
  end_date: String
  status: String
  progress: String
  frontend_url: String
  backend_url: String
  created_by: String
  created_at: String
  updated_by: String
  updated_at: String
  deleted_by: String
  deleted_at: String
  ProjectTasks: any
  ProjectProfiles: any
  assign_log: any

  constructor(o: {
    id: String
    company_ref: String
    branch_ref: String
    design: Boolean
    development: Boolean
    marketting: Boolean
    title: String
    description: String
    logo: String
    start_date: String
    end_date: String
    status: String
    progress: String
    frontend_url: String
    backend_url: String
    created_by: String
    created_at: String
    updated_by: String
    updated_at: String
    deleted_by: String
    deleted_at: String
    ProjectTasks: any
    ProjectProfiles: any
    assign_log: any

  }) {
    this.id = o.id
    this.company_ref = o.company_ref
    this.branch_ref = o.branch_ref
    this.design = o.design
    this.development = o.development
    this.marketting = o.marketting
    this.title = o.title
    this.description = o.description
    this.logo = o.logo
    this.start_date = o.start_date
    this.end_date = o.end_date
    this.status = o.status
    this.progress = o.progress
    this.frontend_url = o.frontend_url
    this.backend_url = o.backend_url
    this.created_by = o.created_by
    this.created_at = o.created_at
    this.updated_by = o.updated_by
    this.updated_at = o.updated_at
    this.deleted_by = o.deleted_by
    this.deleted_at = o.deleted_at
    this.ProjectTasks = o.ProjectTasks
    this.ProjectProfiles = o.ProjectProfiles
    this.assign_log = o.assign_log
  }
}

export const assignprojectDetails = new Store<assignprojectItems[] | false>(false)

export const assignprojectStore = () => {
  const [assignprojectField, setassignprojectField] = useStore(assignprojectDetails)

  return {
    assignprojectField,
    setassignprojectField,

    async loadassignprojectDetail() {
      await getassignprojecttask("PROJECT")
        .then(data => {
          setassignprojectField(data.data)
          console.log('assignprojectField assignprojectField :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
