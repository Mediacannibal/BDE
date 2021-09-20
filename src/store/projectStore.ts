import { Store, useStore } from './Store'
import getproject from '../utils/api/getproject'
import getprojectDetails from '../utils/api/getprojectDetails'
import postproject from '../utils/api/postproject'

export class projectItems {
  id: String
  company_ref: String
  branch_ref: String
  design: String
  development: String
  marketting: String
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

  constructor(o: {
    id: String
    company_ref: String
    branch_ref: String
    design: String
    development: String
    marketting: String
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
  }
}

export const projectDetails = new Store<projectItems[] | false>(false)

export const projectStore = () => {
  const [projectField, setprojectField] = useStore(projectDetails)

  return {
    projectField,
    setprojectField,

    async loadProjectbyUserID() {
      await getproject()
        .then(data => {
          setprojectField(data.data)
          // console.log('Project Tasks :', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    async loadProjectsDetail() {
      await getprojectDetails()
        .then(data => {
          setprojectField(data.data)
          // console.log('ProjectsDetail ProjectsDetail :', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    async postprojectField(data: any) {
      await postproject(data)
        .then(res => {
          // console.log("postprojectField postprojectField", res)
          setprojectField((oldArray: any) => [...oldArray, res.data])
        })
        .catch(err => {
          console.log(err)
        })
    },

  }
}
