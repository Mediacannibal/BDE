import axios from '../axios'
import headers from '../headers'

const gettasktimelog = async () => {
  return await axios.get(`tasks/tasktimelog/?task_ids=&users=`, {
    headers: headers(String(localStorage.getItem('AuthToken'))),
  })
}

export default gettasktimelog
