import instance from 'utils/axios'

export const Sociallogin = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/social/signup/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const signup = (callback: (arg0: any, arg1: string) => void, data: any) => {
  instance.post(`/user/social/signup/normal/`, data, {
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const createaccount = (callback: (arg0: any, arg1: string) => void, data: any, token: any) => {
  instance.post(`/user/social/signup/admin/`, data, {
    headers: {       'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}


export const updateProfile = (callback: (arg0: any, arg1: string) => void, token: any, data: any,id:any) => {
  instance.put(`/user/edit_profile/`+id+`/`, data, {
    headers: {       'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const postAppdata = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/appdata/bidrecordlist/?start_date=`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}


export const getResultAppdata = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/appdata/gamedata/result/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getResultpresentAppdata = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/appdata/gamedatalist/present/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getResultbydateAppdata = (callback: (arg0: any, arg1: string) => void, token: any, date: any) => {
  instance.get(`/appdata/gamedatalist/present/?start_date=` + date, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getResultfutureAppdata = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/appdata/gamedatalist/future/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getResultTodaydata = (callback: (arg0: any, arg1: string) => void) => {
  instance.get(`/appdata/gamedata/currentday/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

// &number=2",
export const getBidlogdata = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/appdata/bidrecordlist/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBidlogbyagentdata = (callback: (arg0: any, arg1: string) => void, token: any,agentid:any) => {
  instance.get(`/appdata/bidrecordlist/?user_id=`+agentid, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}


export const getBidlogbyagentnumberdata = (callback: (arg0: any, arg1: string) => void, token: any,agentid:any,num:any,pat:any) => {
  instance.get(`/appdata/bidrecordlist/?user_id=`+agentid+"&number="+num+"&combination="+pat, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getuserList = (callback: (arg0: any, arg1: string) => void, token: any) => {
  instance.get(`/user/profile_list/`, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBidcountdata = (callback: (arg0: any, arg1: string) => void, token: any, data: any) => {
  instance.post(`/appdata/bidrecord/count/`, data, {
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}

export const getBidcountagentdata = (callback: (arg0: any, arg1: string) => void, token: any,data:any) => {
  instance.post(`/appdata/bidrecord/count/agent/`, data ,{
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}


export const postResultAppdata = (callback: (arg0: any, arg1: string) => void, token: any,data:any) => {
  instance.post(`/appdata/gamedatalist/`, data ,{
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json'
    }
  }).then((res) => { callback(res, 'sucess') })
    .catch(err => callback(err, err.response))
}
