import gettasklog from 'utils/api/gettasklog'
import { Store, useStore } from './Store'

export class taskLogItems {
  task_ref: String
  t_remarks: String
  t_image_link: String
  tested_by: String
  tested_at: String
  created_by: String
  updated_by: String
  deleted_by: String
  deleted_at: String
  created_at: String
  updated_at: String

  constructor(o: {
    task_ref: String
    t_remarks: String
    t_image_link: String
    tested_by: String
    tested_at: String
    created_by: String
    updated_by: String
    deleted_by: String
    deleted_at: String
    created_at: String
    updated_at: String
  }) {
    this.task_ref = o.task_ref
    this.t_remarks = o.t_remarks
    this.t_image_link = o.t_image_link
    this.tested_by = o.tested_by
    this.tested_at = o.tested_at
    this.created_by = o.created_by
    this.updated_by = o.updated_by
    this.deleted_by = o.deleted_by
    this.deleted_at = o.deleted_at
    this.created_at = o.created_at
    this.updated_at = o.updated_at
  }
}

export const taskLogDetails = new Store<taskLogItems[] | false>(false)

export const taskLogStore = () => {
  const [taskLog, settaskLog] = useStore(taskLogDetails)

  return {
    taskLog,
    settaskLog,

    async loadtaskLogDetail() {
      await gettasklog()
        .then(data => {
          settaskLog(data.data.results)
          // console.log('Task Time Log :', data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
