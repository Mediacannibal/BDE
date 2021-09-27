import axios from '../axios'
import headers from '../headers'

const gettasklog = async () => {
  return await axios.get(`tasks/tasklog/`, {
    headers: headers(String(localStorage.getItem('AuthToken'))),
  })
};

export default gettasklog
