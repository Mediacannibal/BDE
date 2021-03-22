import instance from 'utils/axios'

export const Sociallogin = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/social/signup/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}



export const fileupload = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/appdata/upload/file/`, data, {
    headers: {

    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getAppdata = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/appdata/Screensdata/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const postAppdata = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/appdata/Screensdata/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}