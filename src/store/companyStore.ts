import { Store, useStore } from './Store'
import getcompany from '../utils/api/getcompany'
import postcompany from 'utils/api/postcompany'

export class companyItems {
  id: String
  company_title: String
  locations: String
  contact_number: String
  company_size: String
  address: String
  room_code: String
  created_by: String
  created_at: String
  updated_by: String
  updated_at: String
  deleted_by: String
  deleted_at: String

  constructor(o: {
    id: String
    company_title: String
    locations: String
    contact_number: String
    company_size: String
    address: String
    room_code: String
    created_by: String
    created_at: String
    updated_by: String
    updated_at: String
    deleted_by: String
    deleted_at: String
  }) {
    this.id = o.id
    this.company_title = o.company_title
    this.locations = o.locations
    this.contact_number = o.contact_number
    this.company_size = o.company_size
    this.address = o.address
    this.room_code = o.room_code
    this.created_by = o.created_by
    this.created_at = o.created_at
    this.updated_by = o.updated_by
    this.updated_at = o.updated_at
    this.deleted_by = o.deleted_by
    this.deleted_at = o.deleted_at
  }
}

export const companyDetails = new Store<companyItems[] | false>(false)

export const companyStore = () => {
  const [company, setcompany] = useStore(companyDetails)

  return {
    company,
    setcompany,

    async loadcompany() {
      await getcompany()
        .then(data => {
          setcompany(data.data)
          // console.log('company company :', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async postcomAPI(data: any) {
      await postcompany(data)
        .then(res => {
          // console.log('posttask posttask', res)
          setcompany((oldArray: any) => [...oldArray, res.data])
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
