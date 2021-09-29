import axios from 'axios'

const instance = axios.create({
  baseURL:  "https://apimcbde.mediacannibal.co"
})

export default instance;
