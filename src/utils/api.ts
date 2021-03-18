import instance from 'utils/axios'

// User

export const Sociallogin = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/social/signup/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const profile = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/user/auth/profile/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProfileImage = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/user/edit_profile_image/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const otpVerify = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/phone/email/otp_verify/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProfile = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/user/edit_profile/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const forgotPassword = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/forgot_password/`, data, {
    headers: {
      "username_email_or_phone": "adiakash3@gmail.com",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const logout = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/logout/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const logoutall = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/logoutall/`, data, {
    headers: {
      "Authorization": "Token",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

// Task

export const addProject = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/task/project/add/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProject = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/task/project/edit/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editTask = (callback: (arg0: any, arg1: string) => void, token: any, data: any, id: any) => {
  instance.put(`/task/task/edit/` + id + `/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const taskList = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/task/task/list/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const projectAdd = (callback: (arg0: any, arg1: string) => void) => {
  instance.post(`/task/project/add/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const dashboardCreate = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/task/dashboad_create/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createDashboard = (callback: (arg0: any, arg1: string) => void) => {
  instance.post(`/task/dashboad_create/`, {
    headers: {
      'Authorization': 'Token'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}
