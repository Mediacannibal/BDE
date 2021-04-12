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

export const newUserSignup = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/api/user/social/signup/normal/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
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

// Tasks/company

export const fileupload = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/file/uploaded/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createCompany = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`company/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getCompanyDetails = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`company/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getProject = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`company/project/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createProject = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`company/project/add/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBranchDetails = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`company/branch/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createBranch = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`company/branch/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createMainTask = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/maintask/add/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getMainTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/maintask/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createFrontend = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/frontend/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getFrontend = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/frontend/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBackend = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/backend/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createBackend = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/backend/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createTestlog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/tasklog/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getTestlog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/tasklog/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createTasktimelog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/tasktimelog/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getTasktimelog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/tasktimelog/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createBackendTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/maintask_backend_add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBackendTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/backend/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createFrontendTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/maintask_frontend_add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getFrontendTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/frontend/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getAPIhitlog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`debug/apihitlog/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getUsererrorlog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`debug/usererrorlog/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getDataerrorlog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`debug/dataerrorlog/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}