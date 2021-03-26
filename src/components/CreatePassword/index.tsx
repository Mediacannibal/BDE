import React, { useEffect, useState } from 'react'
import { Sociallogin } from '../../utils/actions'

import './style.css'
import '../../components/app.css'
import Header from 'components/common/Header';
import { useHistory } from 'react-router-dom';
import TextField from 'components/common/TextFieldWithRef';
import { useForm } from 'react-hook-form';


const CreatePassword = () => {

  const [companyname, setcompanyname] = useState('')
  const [department, setdepartment] = useState('')
  const [usertype, setusertype] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [reenterpassword, setreenterpassword] = useState('')
  const [ispopup, setispopup] = useState(true)

  const history = useHistory();


  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }
  useEffect(() => {

  }, [])
  const loginCallback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log('response ' + JSON.stringify(data));
      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
      history.push('/NewUserForm')
    } else {
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    };
  }

  const handleLogin = () => {
    let a = document.getElementById("username").value
    let b = document.getElementById("password").value
    let data = {
      "email_or_username": a,
      "password": b,
    }
    console.log(a, b);
    Sociallogin(loginCallback, data)
  };

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="main">
      <Header />
      <div className="body">

        <div className='title'>Sign Up </div>
        <div className='loginDescription_Text'>It's quick and easy to sign up.</div>

        <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Company Name"}
                id="companyname_data"
                name={`data.CompanyName`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
                value={setcompanyname}
                setvalue={companyname}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Department"}
                id="Department_data"
                name={`data.Department`}
                inputtype="Department"
                type="text"
                min_length="3"
                required={true}
                value={setdepartment}
                setvalue={department}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"User Type"}
                id="UserType_data"
                name={`data.UserType`}
                inputtype="UserType"
                type="text"
                min_length="3"
                required={true}
                value={setusertype}
                setvalue={usertype}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"First Name"}
                id="firstname_data"
                name={`data.FirstName`}
                inputtype="firstname"
                type="text"
                min_length="3"
                required={true}
                value={setfirstname}
                setvalue={firstname}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Last Name"}
                id={"lastname_data"}
                name={`data.LastName`}
                inputtype="lastname"
                type="text"
                min_length="1"
                required={true}
                value={setlastname}
                setvalue={lastname}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Email ID"}
                id={"emailID_data"}
                inputtype="email"
                type="text"
                name={`data.EmailID`}
                required={true}
                value={setemail}
                setvalue={email}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Phone Number"}
                id={"phoneno_data"}
                inputtype="phone"
                type="text"
                name={`data.Phone`}
                maxLength="10"
                input_inner_leftprop={<div>+91</div>}
                required={true}
                value={setphone}
                setvalue={phone}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"New Password"}
                id={"newpassword"}
                inputtype="password"
                type="text"
                maxLength="10"
                required={true}
                value={setpassword}
                setvalue={password}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Re-enter Password"}
                id={"reenternewpassword"}
                inputtype="password"
                type="text"
                required={true}
                value={setreenterpassword}
                setvalue={reenterpassword}
              />
            </div>
          </div>
        </form>

        <div className="login_button_container">
          <button onClick={() => {
          }} className="login_validatebutton">
            <div className="login_buttontext">Sign Up</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword
