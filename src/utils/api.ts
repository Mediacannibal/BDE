import instance from 'utils/axios'

// User

export const Sociallogin = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/social/signup/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const profile = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/api/user/auth/profile/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProfileImage = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/api/user/edit_profile_image/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const otpVerify = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/phone/email/otp_verify/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProfile = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/api/user/edit_profile/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const forgotPassword = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/forgot_password/`, data, {
    headers: {
      "username_email_or_phone": "adiakash3@gmail.com",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const logout = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/logout/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const logoutall = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/logoutall/`, data, {
    headers: {
      "Authorization": "Token",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const phoneEmailVerify = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/phone/email/verify/`, data, {
    headers: {
      "Authorization": "Token",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const newUserSignup = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/social/signup/normal/`, data, {
    headers: {
      "Authorization": "Token",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const userListing = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/user/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

// Task

export const addProject = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/api/task/project/add/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProject = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/api/task/project/edit/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editTask = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/api/task/edit/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const taskAdd = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/api/task/add/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const projectAdd = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`/api/task/project/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const dashboardCreate = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/task/dashboad_create/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createDashboard = (callback: (arg0: any, arg1: string) => void) => {
  instance.post(`/api/task/dashboad_create/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const addCompany = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/task/company/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const companyAdd = (callback: (arg0: any, arg1: string) => void) => {
  instance.post(`/api/task/company/add/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const listingTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/task/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const imageUpload = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`/api/task/upload/file/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const listingBug = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/task/buglist/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const addBug = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/api/task/buglist/add/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const testListing = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/task/testing/checkinglist/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const addTest = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/api/task/testing/checkinglist/add/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}