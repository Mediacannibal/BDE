import axios from '../axios'
import headers from '../headers'

const gettestlog = async () => {
  return await axios.get(`testlog/info/`, {
    headers: headers(String(localStorage.getItem('AuthToken'))),
  })
};

export default gettestlog
