import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import * as send from '../../assets/send.svg'
import * as eye from '../../assets/eye-visibility.svg'
import * as eye_invisible from '../../assets/eye-invisible.svg'
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { useForm } from 'react-hook-form';
import Header from 'components/common/Header';
// import { createaccount, getuserList, postAppdata, updateProfile } from 'utils/api';


import Spinner from 'components/Common/Spinner';
import TextFieldWithRef from 'components/common/TextFieldWithRef';
import TextField from 'components/common/TextFieldWithRef';


const UserManagement = () => {
  const [updating, setupdating] = useState(false)
  const [selecteduser, setselecteduser] = useState({})

  const history = useHistory();
  const [isSelect, setisSelect] = useState('')
  const [iseditable, seteditable] = useState(false)
  const [isfirstnameemptyerror, setfirstnameemptyerror] = useState(false)
  const [islastnameemptyerror, setlastnameemptyerror] = useState(false)
  const [isemailIDemptyerror, setemailIDemptyerror] = useState(false)
  const [isphonenumberemptyerror, setphonenumberemptyerror] = useState(false)
  const [isusernameemptyerror, setusernameemptyerror] = useState(false)
  const [ispasswordemptyerror, setpasswordemptyerror] = useState(false)
  const [isusertypeemptyerror, setusertypeemptyerror] = useState(false)
  const [spinner, setspinner] = useState(false)

  const [fisrtname_data, setfisrtname_data] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [lastname_data, setlastname_data] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [emailID_data, setemailID_data] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [phoneno_data, setphoneno_data] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [username_data, setusername_data] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [password_data, setpassword_data] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })

  const [editpassword, seteditpassword] = useState(false)

  const [passwordShown, setpasswordShown] = useState(false);
  const [popup, setpopup] = useState(false)
  const [list, setlist] = useState([])


  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const handleTextChange = (text: any) => {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const getuserlistdata = () => {
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // getuserList((data: any, errorresponse: any) => {

    //   if (data.status === 200) {
    //     setspinner(false)
    //     console.log('response ' + JSON.stringify(data));
    //     setlist(data.data)

    //   } else {
    //     setspinner(false)
    //     console.log('error ' + JSON.stringify(data));
    //     console.log('error ' + JSON.stringify(errorresponse));
    //   };
    // }, token)
  }

  const phonenumberformatter = (value: any) => {
    var prefix = "+91"
    if (value.indexOf(prefix) !== 0) {
      setphoneno_data({ "value": prefix + value, "error": "", "isvalid": "false" });
      return prefix + value
    }

    return value

  }

  const updateinputdata = () => {

    if (updating) {
      if (true) {
        let data = {}
        if (editpassword) {
          data = {
            "firstname": fisrtname_data.value,
            "lastname": lastname_data.value,
            "email": emailID_data.value,
            "phone": phonenumberformatter(phoneno_data.value),
            "user_type": isSelect,
            "password": password_data.value,
          }
        }
        else {
          data = {
            "firstname": fisrtname_data.value,
            "lastname": lastname_data.value,
            "email": emailID_data.value,
            "phone": phonenumberformatter(phoneno_data.value),
            "user_type": isSelect,
          }
        }
        console.log(selecteduser, data)
        let token = JSON.parse(String(localStorage.getItem("AuthToken")))

        // updateProfile((data: any, errorresponse: any) => {

        //   if (data.status === 200) {
        //     console.log('response ' + JSON.stringify(data));
        //     window.location.reload();

        //   } else {
        //     console.log('error ' + JSON.stringify(data));
        //     console.log('error ' + JSON.stringify(errorresponse));
        //   };
        // }, token, data, selecteduser.id)
      }
    }
    else {
      if (Validate()) {
        let data = {
          "username": username_data.value,
          "password": password_data.value,
          "firstname": fisrtname_data.value,
          "lastname": lastname_data.value,
          "email": emailID_data.value,
          "phone": phonenumberformatter(phoneno_data.value),
          "user_type": isSelect,
        }
        console.log(selecteduser, data)
        let token = JSON.parse(String(localStorage.getItem("AuthToken")))

        // createaccount((data: any, errorresponse: any) => {

        //   if (data.status === 200) {

        //     console.log('response ' + JSON.stringify(data));

        //     window.location.reload();
        //   } else {

        //     console.log('error ' + JSON.stringify(data));
        //     console.log('error ' + JSON.stringify(errorresponse));
        //   };
        // }, data, token)
        // create user part 
      }

    }
  }

  useEffect(() => {
    // let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // if (token === null)
    //   history.push("/")
    // else {
    //   let usertype = JSON.parse(String(localStorage.getItem("UserDetails"))).user_type
    //   if (usertype !== "SUPERUSER") {
    //     history.push("/")
    //   }
    // }

    // getuserlistdata()

  }, [])

  const renderHeader = () => {
    let headerElement = ['First Name', 'Last Name', 'Email', 'Phone', 'User Name', 'Password', 'UserType']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {

    return (
      <>
        <tr key={element.id} onClick={() => {
          setselecteduser(element)
          seteditable(true)
          console.log(element)

          setupdating(true)

          setfisrtname_data({ "value": element.firstname, "error": "", "isvalid": "false", "isActive": true });
          setlastname_data({ "value": element.lastname, "error": "", "isvalid": "false", "isActive": true });
          setemailID_data({ "value": element.email, "error": "", "isvalid": "false", "isActive": true });
          setphoneno_data({ "value": element.phone, "error": "", "isvalid": "false", "isActive": true });
          setusername_data({ "value": element.email, "error": "", "isvalid": "false", "isActive": true });
          setisSelect(element.user_type)
          console.log("csajdkfhj")
        }}>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.email}</td>
          <td>{"*************"}</td>
          <td>{element.user_type}</td>
          {/* <td> <img  className='Bid_addicon' src={edit} /></td> */}
        </tr>
      </>
    )
  }
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);

  const Validate = () => {

    let temp = true
    if (String(fisrtname_data.value).length === 0 || String(lastname_data.value).length === 0 || String(emailID_data.value).length === 0 || String(phoneno_data.value).length === 0 || String(isSelect).length === 0 || String(password_data.value).length === 0) {
      temp = false
      if (String(fisrtname_data.value).length === 0) {
        setfirstnameemptyerror(true);
        console.log("Fist Name is empty")
      } if (String(lastname_data.value).length === 0)
        setlastnameemptyerror(true);
      console.log("Last Name is empty")
      if (String(emailID_data.value).length === 0)
        setemailIDemptyerror(true);
      console.log("Email ID is empty")
      if (String(phoneno_data.value).length === 3)
        setphonenumberemptyerror(true);
      console.log("Phone Number is empty")
      if (String(username_data.value).length === 0)
        setusernameemptyerror(true);
      console.log("User Name is empty")
      if (String(password_data.value).length === 0)
        setpasswordemptyerror(true);
      console.log("Password is empty")
      if (String(isSelect.value).length === 0)
        setusertypeemptyerror(true);
      console.log("User Type is empty")
    }

    return temp
  }

  return (

    <div className="main">

      {spinner ?
        <div className="spinner_fullscreen_div">
          <Spinner />
        </div> :
        null
      }
      <Header screen={"UserManagement"} Headerinfofunction={(data: any) => {
        setupdating(false)
        seteditable(data)
      }} Headerinfovalue={setupdating} />

      <div className="body">



        {iseditable ?
          <>
            <div className='title'>Add / Edit User</div>

            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextFieldWithRef
                    label={"First Name"}
                    labelid={"fisrtname_data"}
                    isActive={fisrtname_data.isActive}
                    className={isfirstnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    id="fisrtname_data"
                    value={fisrtname_data.value}
                    type="text"
                    name={`data.FirstName`}
                    required={isfirstnameemptyerror}
                    onChange={(data: any) => {
                      setfisrtname_data(data.target.value)
                      setfirstnameemptyerror(false)
                      let a = data.target.value
                      if (a.length === 0) {
                        setfisrtname_data({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (a.length < 4) {
                          setfisrtname_data({ "value": a.replace(/[`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "Minimum 4 characters needed.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setfisrtname_data({ "value": a.replace(/[`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "", "isvalid": "true", "isActive": true })
                        }
                    }}
                  />
                </div>
                {isfirstnameemptyerror ? <div className="invalid_entry">Please enter First Name!</div> :
                  <div className="invalid_entry">{fisrtname_data.error}</div>
                }
              </div>


              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextFieldWithRef
                    label={"Last Name"}
                    labelid={"lastname_data"}
                    isActive={lastname_data.isActive}
                    className={islastnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    id="lastname_data"
                    value={lastname_data.value}
                    type="text"
                    name={`data.LastName`}
                    required={islastnameemptyerror}
                    onChange={(data: any) => {
                      setlastname_data(data.target.value)
                      setlastnameemptyerror(false)
                      let a = data.target.value
                      if (a.length === 0) {
                        setlastname_data({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (a.length < 1) {
                          setlastname_data({ "value": a.replace(/[`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "Minimum 1 characters needed.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setlastname_data({ "value": a.replace(/[`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "", "isvalid": "false", "isActive": true })
                        }
                    }}
                  />
                </div>
                {islastnameemptyerror ? <div className="invalid_entry">Please enter Last Name!</div> :
                  <div className="invalid_entry">{lastname_data.error}</div>}
              </div>


              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextFieldWithRef
                    label={"Email ID"}
                    labelid={"emailID_data"}
                    isActive={emailID_data.isActive}
                    className={isemailIDemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    id="emailID_data"
                    value={emailID_data.value}
                    type="text"
                    name={`data.EmailID`}
                    required={isemailIDemptyerror}
                    onChange={(data: any) => {
                      setemailID_data(data.target.value)
                      setemailIDemptyerror(false)
                      let a = data.target.value
                      if (a.length === 0) {
                        setemailID_data({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(a)) {
                          setemailID_data({ "value": a.replace(/[`~!#$%^&*()\ \ |+\-=?;:'",<>\{\}\[\]\\\/]/gi, ''), "error": "Enter a valid Email ID.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setemailID_data({ "value": a.replace(/[`~!#$%^&*()\ \ |+\-=?;:'",<>\{\}\[\]\\\/]/gi, ''), "error": "", "isvalid": "true", "isActive": true })
                        }
                    }}
                  />
                </div>
                {isemailIDemptyerror ? <div className="invalid_entry">Please enter Email ID!</div> :
                  <div className="invalid_entry">{emailID_data.error}</div>}
              </div>


              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextFieldWithRef
                    label={"Phone Number"}
                    labelid={"phoneno_data"}
                    isActive={phoneno_data.isActive}
                    className={isphonenumberemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    id="phoneno_data"
                    value={phoneno_data.value}
                    type="text"
                    name={`data.Phone`}
                    required={isphonenumberemptyerror}
                    onChange={(data: any) => {
                      setphoneno_data(data.target.value)
                      setphonenumberemptyerror(false)
                      let a = data.target.value
                      if (a.length === 0) {
                        setphoneno_data({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (!/^\(?([+]?[0-9]?[0-9]?[0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(a)) {
                          setphoneno_data({ "value": a.replace(/[`~!@#$%^&*()\ \ |\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "Enter a valid Phone Number.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setphoneno_data({ "value": a.replace(/[`~!@#$%^&*()\ \ |\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "", "isvalid": "true", "isActive": true })
                        }
                    }}
                    input_inner_leftprop={<div>+91</div>}
                  />
                </div>
                {isphonenumberemptyerror ? <div className="invalid_entry">Please enter Phone Number!</div> :
                  <div className="invalid_entry">{phoneno_data.error}</div>}
              </div>


              {!updating ? <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextFieldWithRef
                    label={"User Name"}
                    labelid={"username_data"}
                    isActive={username_data.isActive}
                    className={isusernameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    id="username_data"
                    value={username_data.value}
                    type="text"
                    name={`data.UserName`}
                    required={isusernameemptyerror}
                    onChange={(data: any) => {
                      setusername_data(data.target.value)
                      setusernameemptyerror(false)
                      let a = data.target.value
                      if (a.length < 4) {
                        setusername_data({ "value": a.replace(/([A-Z]+)/g, ''), "error": "Minimum 4 characters needed.", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (a.length < 4) {
                          setusername_data({ "value": a.replace(/[`~!#$%^&*()\ \ |+\=?;:'",<>\{\}\[\]\\\/]/gi, ''), "error": "Minimum 4 characters needed.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setusername_data({ "value": a.replace(/[`~!#$%^&*()\ \ |+\=?;:'",<>\{\}\[\]\\\/]/gi, ''), "error": "", "isvalid": "true", "isActive": true })
                        }
                    }}
                  />
                </div>
                {isusernameemptyerror ? <div className="invalid_entry">Please enter User Name!</div>
                  :
                  <div className="invalid_entry">{username_data.error}</div>}
              </div> : null}


              {!updating ? <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Password"}
                    labelid={"password_data"}
                    isActive={password_data.isActive}
                    className={ispasswordemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    id="password_data"
                    value={password_data.value}
                    type={passwordShown ? "text" : "password"}
                    name={`data.Password`}
                    required={ispasswordemptyerror}
                    onChange={(data: any) => {
                      setpassword_data(data.target.value)
                      setpasswordemptyerror(false)
                      let a = data.target.value
                      if (a.length === 0) {
                        setpassword_data({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (a.length < 8) {
                          setpassword_data({ "value": a, "error": "Minimum 8 characters needed.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setpassword_data({ "value": a, "error": "", "isvalid": "true", "isActive": true })
                        }
                    }}
                    input_inner_rightprop={
                      <div onClick={() => { setpasswordShown(!passwordShown) }} id="eye">
                        {passwordShown ? <img className="Password_visibility_icon" src={eye} />
                          :
                          <img className="Password_visibility_icon" src={eye_invisible} />}
                      </div>
                    }

                  />
                </div>
                {ispasswordemptyerror ? <div className="invalid_entry">Please enter Passwords!</div>
                  : <div className="invalid_entry">{password_data.error}</div>}
              </div>
                :
                <>
                  {!editpassword ?
                    <button className="edit_password" onClick={() => {
                      seteditpassword(true)
                    }}>
                      <div className="login_buttontext">Edit Password</div>
                    </button>
                    : null}
                </>
              }


              {editpassword ? <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextFieldWithRef
                    label={"Password"}
                    labelid={"password_data"}
                    isActive={password_data.isActive}
                    className={ispasswordemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                    type="text"
                    id="password_data"
                    value={password_data.value}
                    name={`data.Password`}
                    required={ispasswordemptyerror}
                    onChange={(data: any) => {
                      setpassword_data(data.target.value)
                      setpasswordemptyerror(false)
                      let a = data.target.value
                      if (a.length === 0) {
                        setpassword_data({ "value": "", "error": "Please enter Passwords!", "isvalid": "false", "isActive": false })
                      }
                      else
                        if (a.length < 8) {
                          setpassword_data({ "value": a, "error": "Minimum 8 characters needed.", "isvalid": "false", "isActive": true })
                        }
                        else {
                          setpassword_data({ "value": a, "error": "", "isvalid": "true", "isActive": true })
                        }
                    }}
                  />
                </div>
                {ispasswordemptyerror ? <div className="invalid_entry">Please enter Passwords!</div>
                  : <div className="invalid_entry">{password_data.error}</div>}
              </div>
                :
                null
              }

              <div className="inputfield_sub_container">
                <div className="Usertype_dropdown">
                  <select
                    id="usertype_data"
                    className={isusertypeemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                    value={isSelect}
                    required={isusertypeemptyerror}
                    onChange={(e) => {
                      console.log(e.target.value)
                      setisSelect(e.target.value)
                      setusertypeemptyerror(false)
                    }}
                  >
                    <option hidden value="">User Type</option>
                    <option value="NORMAL">User</option>
                    <option value="PROJECTADMIN">Agent</option>
                    <option value="SUPERUSER">Admin</option>
                  </select>
                </div>
                {isusertypeemptyerror ? <div className="invalid_entry">Please select a User Type!</div> : null}
              </div>


              {/* <div id="float-label">
                <label className={isActive ? "Active" : ""} htmlFor="email">Media cannibal</label>
                <TextFieldWithRef
                  type="text"
                  id="email"
                  value={value}
                  onChange={(e: any) => {
                    handleTextChange(e.target.value)
                  }}
                />
              </div> */}

            </form>

            <div className="add_button_container">
              <div className='senddiv'>
                <img onClick={() => {
                  console.log("***SEND***")
                  updateinputdata()
                }}
                  className='sendicon' src={send} />
              </div>
            </div>
          </>
          :
          <>
            <div className='title'>User List</div>
            <div className="internal_table" style={{ width: '97%', overflowY: 'hidden' }}>

              <table id='internal_table'>
                <thead>{renderHeader()}</thead>
                <tbody>
                  {
                    list.map(renderBody)
                  }
                </tbody>
              </table>
            </div>
          </>
        }

      </div>


      <Footer />

    </div>

  )
}

export default UserManagement
