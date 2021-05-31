import instance from '../utils/axios'


export const CommonAPi =(props:any,callback:any)=>{
  let path = props.path;
  let method = props.method;
  let auth = props.auth;
  switch (method) {
      case "get":
      instance.get(path, {
        headers:auth?{
          'Authorization': `Token ${auth}`,
          'Content-Type': 'application/json'
         }: {
          'Content-Type': 'application/json'
        }
      }).then((res) => { 
      callback(res, 'sucess')
      // console.log("===>>",res);
     })
        .catch(err => callback(err, err.response))  
      break;
      case "post":
        instance.post(path,props.data,{
          headers:auth?{
            'Authorization': `Token ${auth}`,
            'Content-Type': 'application/json'
           }: {
            'Content-Type': 'application/json'
          }
        }).then((res) => { callback(res, 'sucess') })
          .catch(err => callback(err, err.response))  
        break;
  }
  }
  
export const realtime = (callback: (arg0: any, arg1: string) => void, token: any,) => {
  instance.get(`https://www.googleapis.com/analytics/v3/data/realtime?ids=ga:241653669&metrics=rt:activeUsers`, {
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

// export const queryReport1 = (callback: (arg0: any, arg1: string) => void, token: any, metrics: any, dimensions: any) => {
//   instance.get(`https://www.googleapis.com/analytics/v3/data/ga?ids=ga:241653669&metrics=${metrics}&dimensions=${dimensions}&start-date=2021-04-10&end-date=2021-04-26`, {
//     headers: {
//       'Authorization': token ? `Bearer ${token}` : '',
//     }
//   }).then((res) => { callback(res, 'sucess') })
//     .catch(err => callback(err, err.response))
// }

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

export const generateOTP = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/api/user/phone/email/otp_verify/`, data, {
    headers: {
      'Content-Type': 'application/json'
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
  instance.post(`api/user/social/signup/normal/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const profileUserListing = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/api/user/list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const otpValidation = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`api/user/email/otp_validation/`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const userlist = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`api/user/userlist/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getUserlist = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`api/user/userlist/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editUserlist = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.put(`api/user/userlist/edit/2/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const deleteUserlist = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`api/user/userlist/deleted/10/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

// Company

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

export const createBranch = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`company/branch/add/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBranchDetails = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`company/branch/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editBranch = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.put(`company/branch/edit/1/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editCompany = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.put(`company/edit/2/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const deleteCompany = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`company/company/delete/1/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const deleteBranch = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`company/branch/delete/1/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

// Tasks
export const createMainTask = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/maintask/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}


export const getMainTask = (callback: (arg0: any, arg1: string) => void, token: any, task: any, user_list: any, parent_child: any, domain: any, prioriry: any, project: any) => {
  instance.get(`tasks/maintask/?task_type=${task}&user=${user_list}&parent_child=${parent_child}&domain=${domain}&priority=${prioriry}&project_ref=${project}`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editMainTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.put(`tasks/maintask/edit/4/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const deleteMainTask = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.post(`tasks/maintask/delete/4/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const addTasklog = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/tasklog/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createProject = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/project/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getProject = (callback: (arg0: any, arg1: string) => void, token: any, users: any) => {
  instance.get(`tasks/project/?user=${users}`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const editProject = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.put(`tasks/project/edit/3/`, data, {
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

export const createTestlog = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/tasklog/add/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getTestlog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/maintask/?task_type=test&user=all`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBuglog = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`tasks/maintask/?task_type=bug&user=all`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createTasktimelog = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`tasks/tasktimelog/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getTasktimelog = (callback: (arg0: any, arg1: string) => void, token: any, task_Ids: any, users: any) => {
  instance.get(`tasks/tasktimelog/?task_ids=${task_Ids}&users=${users}`, {
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

export const fileupload = (callback: any, token: any, data: any, file: any) => {
  instance.post(`tasks/file/uploaded/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess', file) })
    .catch(err => callback(err, err.response, file))
}