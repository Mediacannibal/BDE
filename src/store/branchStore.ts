import { Store, useStore } from './Store'
import getbranch from '../utils/api/getbranch'

export class branchItems {
  id: String
  company_ref: String
  branch_name: String
  room_code: String
  created_by: String
  created_at: String
  updated_by: String
  updated_at: String
  deleted_by: String
  deleted_at: String

  constructor(o: {
    id: String
    company_ref: String
    branch_name: String
    room_code: String
    created_by: String
    created_at: String
    updated_by: String
    updated_at: String
    deleted_by: String
    deleted_at: String

  }) {
    this.id = o.id
    this.company_ref = o.company_ref
    this.branch_name = o.branch_name
    this.room_code = o.room_code
    this.room_code = o.room_code
    this.created_by = o.created_by
    this.created_at = o.created_at
    this.updated_by = o.updated_by
    this.updated_at = o.updated_at
    this.deleted_by = o.deleted_by
    this.deleted_at = o.deleted_at
  }
}

export const branchDetails = new Store<branchItems[] | false>(false)

export const branchStore = () => {
  const [branch, setbranch] = useStore(branchDetails)

  return {
    branch,
    setbranch,

    async loadbranch() {
      await getbranch()
        .then(data => {
          setbranch(data.data)
          console.log('branch branch :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

  }
}
