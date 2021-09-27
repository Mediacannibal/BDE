import axios from '../axios'
import headers from '../headers'

const gettasktimelog = async (id: any, user: any) => {
  return await axios.get(`tasks/tasktimelog/?task_ids=${id}&users=${user}`, {
    headers: headers(String(localStorage.getItem('AuthToken'))),
  })
};

export default gettasktimelog
