import McInput from 'components/Common/McInput'
import SimpleEditor from 'react-simple-image-editor';
import React, { useEffect, useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import { generateOTP, getBranchDetails, getCompanyDetails, newUserSignup, Sociallogin } from 'utils/api';
import { GoogleLogin } from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook-sdk';
import Popup from 'components/Common/Popup';
import { useHistory } from 'react-router-dom';
import './style.css'
import { useAuth } from 'store/authStore';
import useCountDown from 'react-countdown-hook';
import * as google from '../../../assets/google-logo.svg'
import * as facebook from '../../../assets/facebook.svg'
import { ColourObject } from 'store/ColourStore';

const NewUserForm = ({ setPopup }, props: any) => {
  const history = useHistory();
  const { auth } = useAuth()
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [ispopup, setispopup] = useState(false)

  const [company_name, setcompany_name] = useState('')
  const [branch_name, setbranch_name] = useState('')
  const [firstname, setfirstname] = useState('')
  const [username, setusername] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phoneno, setphoneno] = useState('')
  const [usertype, setusertype] = useState('')
  const [password, setpassword] = useState('')

  const [companynamevalid, setcompanynamevalid] = useState(false)
  const [branchvalid, setbranchvalid] = useState(false)
  const [usernamevalid, setusernamevalid] = useState(false)
  const [firstnamevalid, setfirstnamevalid] = useState(false)
  const [lastnamevalid, setlastnamevalid] = useState(false)
  const [emailvalid, setemailvalid] = useState(false)
  const [phonevalid, setphonevalid] = useState(false)
  const [passwordvalid, setpasswordvalid] = useState(false)
  const [usertypevalid, setusertypevalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)
  const [spinner, setspinner] = useState(false)

  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])

  // login const's
  const [username_email_or_phone, setusername_email_or_phone] = useState({ value: '', error: '' });
  const [password_otp, setpassword_otp] = useState({ value: '', error: '' });
  const [ispassword, setispassword] = useState(true)

  const [timeLeft, { start, pause, resume }] = useCountDown(15 * 1000, 1000);
  const [timerglow, settimerglow] = useState(false)

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data); 
  };
  // console.log(errors);

  useEffect(() => {
    if (!Colour) {
      loadColour();
    }
  }, [])

  const Validate = () => {
    // console.log(companynamevalid, branchvalid, usernamevalid,
    //   firstnamevalid, lastnamevalid, emailvalid,
    //   phonevalid, passwordvalid, usertypevalid
    // )
    if (companynamevalid === true
      && branchvalid === true
      && usernamevalid === true
      && firstnamevalid === true
      && lastnamevalid === true
      && emailvalid === true
      && phonevalid === true
      && passwordvalid === true
      && usertypevalid === true
    ) {

      setispopup(true)
    }
    else {
      setPreSendValidator(true)
    }
  }

  useEffect(() => {
    CompanyDetails()
    BranchDetails()
  }, [])

  const CompanyDetails = () => {
    getCompanyDetails(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log("Company Details: ", data.data.results)
        setlistItems1(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth)
  }

  const BranchDetails = () => {
    getBranchDetails(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log("Branch Details: ", data.data.results)
        setlistItems2(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth)
  }

  const Company_name = () => {
    let a: any = [];
    listItems1.forEach(element => {
      let data = {
        "key": element.id,
        "value": element.company_title
      }
      a.push(data);
    });
    return a
  }

  const Branch_name = () => {
    let a: any = [];
    listItems2.forEach(element => {
      let data = {
        "key": element.id,
        "value": element.branch_name
      }
      a.push(data);
    });
    return a
  }

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  const _verifyCallback = (data: { status: number; data: string; }, errorresponse: any) => {
    if (data.status === 200) {
      // console.log('success ', data.data.results);
      // localStorage.setItem("otpResponse", JSON.stringify(data.data.results))

    } else {
      errorlog(data, errorresponse)
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  }

  const _onSignUpPressed = () => {
    setispassword(false)
    // console.log(username_email_or_phone)
    let data = {
      username_email_or_phone: username_email_or_phone.value,
    }
    localStorage.setItem('username_email_or_phone', JSON.stringify(data));
    generateOTP(_verifyCallback, data);
  };

  const OTPvalidate = () => {
    let data = {
      auth_provider: ispassword ? "mc" : "otp",
      password: password_otp.value,
      username: username_email_or_phone.value
    }
    Sociallogin(loginCallback, data)
  };

  const loginCallback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      // console.log('response =================> ' + JSON.stringify(data));
      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));

      let UserDetails = JSON.parse(String(localStorage.getItem('UserDetails')))
      // console.log("dataaa==>", UserDetails);

      if (String(data.data.result.user_details.auth_type).toUpperCase() === "GOOGLE" || "FB" || "OTP")
        if (UserDetails.is_active === false)
          history.push('/NewUserForm')
        else
          history.push('/Home')
      else {
        if (String(data.data.result.user_details.auth_type).toUpperCase() === "MC")
          history.push('/Home')
      }
      // window.location.reload()
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
    // console.log(a, b);
    Sociallogin(loginCallback, data)
  };

  return (
    <>
      {ispopup ?
        <Popup
          title={"Add / Edit User?"}
          desc1={"The following User will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            let data = [];
            let object = {
              "company_name": company_name,
              "branch_name": branch_name,
              "username": username,
              "firstname": firstname,
              "lastname": lastname,
              "email": email,
              "phone": phoneno,
              "user_type": usertype,
              "password": password,
              "is_active": true,
            }
            data.push(object)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            newUserSignup(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                localStorage.setItem('AuthToken', JSON.stringify(data.data.token));
                localStorage.setItem('UserDetails', JSON.stringify(data.data.user_details));
                history.push('/Home')
                setbackendresponse("Successfully Added!")
                setbackendresponse_popup(true)
              } else {
                setispopup(false)
                setbackendresponse("Failed, Please Try Again!")
                console.log('error ' + JSON.stringify(data));
                console.log('error ' + JSON.stringify(errorresponse));
              }
            }, token, data[0])
          }}
          cancelClick={() => {
            console.log("***CANCEL***")
            setispopup(false)
          }}
        />
        :
        <Popup
          title={"Add / Edit User"}
          popup_body={
            <>
              <div className="login_form_wrapper">

                <div className="login_form_bg"></div>

                <div className='loginDescription_Text' style={{ color: colourObj.color_1 }}>Login or Sign Up with any of the following:</div>

                <div className=" login_popupformcontainer">

                  <div className="login_container">

                    <div className="login_button_container">
                      <input id="username" type="text"
                        value={username_email_or_phone.value}
                        onChange={(e) => { setusername_email_or_phone({ value: e.target.value, error: '' }) }}
                        placeholder="User Name / Email / Phone Number" className="login_input" />
                    </div>

                    <div className="login_button_container">
                      <input id="password" type="password"
                        value={password_otp.value}
                        onChange={(e) => { setpassword_otp({ value: e.target.value, error: '' }) }}
                        placeholder="Password / OTP" className="login_input" onKeyPress={handleKeyPress} />
                    </div>

                    <div className="login_button_sub_container">

                      <div className="login_button_container">
                        <button onClick={OTPvalidate} className="login_validatebutton">
                          <div className="login_buttontext">Continue</div>
                        </button>
                      </div>

                      {/* <div className="login_button_container">
        <button onClick={() => {
          let a = JSON.parse(String(localStorage.getItem("otpResponse")))
          let receivedStored = Number(decode(a.otp))
          let inputotp = Number(password_otp.value)
          console.log(receivedStored, "decodedOTP", inputotp, "InputOTP", a, "storedOTP")
          if (receivedStored === inputotp) {
            console.log("OTP matched")
          } else {
            console.log("OTP not matched")
          }
        }} className="login_validatebutton">
          <div className="login_buttontext">Continue</div>
        </button>
      </div> */}

                      <div className="login_button_container" >
                        <button onClick={() => {
                          if (timeLeft / 1000 === 0) {
                            _onSignUpPressed()
                            settimerglow(true)
                            start()
                          }
                        }}
                          className={timeLeft / 1000 === 0 ? "login_validatebutton" : "login_validatebutton disabled_button"}
                          style={{ 
                            color: colourObj.color_5,
                            backgroundColor: colourObj.color_7,
                           }}
                        >
                          {timerglow ?
                            <div className="login_resendotp_container">
                              <div className={timeLeft / 1000 === 0 ? 'login_buttontext' : 'login_buttontext disabled_text'} >
                                {timeLeft / 1000 === 0 ? 'Get OTP' : ('Resend in ' + timeLeft / 1000)}</div>
                            </div>
                            :
                            <div className="login_buttontext">Get OTP</div>
                          }
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='loginDescription_Text' style={{ color: colourObj.color_5 }}>OR</div>

                  <div className="SMlogin_button_container">

                    <GoogleLogin
                      clientId="143329247794-2t842j36j0184ndelf6fqoqp3abk0g4i.apps.googleusercontent.com"
                      render={(renderProps: { onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; disabled: boolean | undefined; }) => (
                        <button className="login_SMbutton" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                          <img src={google} className="login_SMicon" />
                          <div className="login_buttontext">Continue with Google</div>
                        </button>
                      )}
                      buttonText="Login"
                      accessType="offline"
                      approvalPrompt="force"
                      prompt='consent'
                      onSuccess={(Response: { profileObj: any; }) => {
                        console.log(Response);
                        localStorage.setItem("Bearer", JSON.stringify(Response.accessToken))
                        let userInfo = Response.profileObj;
                        let data = {
                          "lastname": userInfo.familyName,
                          "firstname": userInfo.givenName,
                          "photo_url": userInfo.imageUrl,
                          "auth_provider": "google",
                          "email": userInfo.email,
                          "username": userInfo.googleId
                        }
                        Sociallogin(loginCallback, data);
                      }}
                      onFailure={(Response: any) => { console.log("============================>>>>>>>>>", Response); }}
                      cookiePolicy={'single_host_origin'} />

                    <FacebookProvider appId="976961256166749">
                      <Login
                        scope="email"
                        onResponse={(response: any) => {
                          console.log(response.profile);
                          //  email: "medi.cann6@gmail.com"
                          // first_name: "Medi"
                          // id: "213891626989372"
                          // last_name: "Cann"
                          // name: "Medi Cann"
                          console.log(Response)
                          var formData = new FormData()
                          let userInfo = response.profile
                          formData.append('lastname', userInfo.last_name);
                          formData.append('firstname', userInfo.first_name);
                          formData.append('photo_url', userInfo.photo_url);
                          formData.append('auth_provider', "fb");
                          formData.append('email', userInfo.email);
                          formData.append('username', userInfo.id);
                          Sociallogin(loginCallback, formData)
                        }}
                        onError={(response: any) => {
                          console.log(response);
                        }}
                      >
                        <button className="login_SMbutton">
                          <img src={facebook} className="login_SMicon" />
                          <div className="login_buttontext">Continue with Facebook</div>
                        </button>
                      </Login>
                    </FacebookProvider>
                  </div>

                </div>
                <div className='loginToS_Text'>By continuing, you accept the Terms of Service and the Privacy Policy.</div>
              </div>

              {/* New User Form */}
              <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputfield_sub_container">
                  <div>
                    <McInput
                      type={"picker"}
                      name={"Company Name"}
                      id="companyname_data"
                      required={true}
                      valid={setcompanynamevalid}
                      sendcheck={preSendValidator}
                      value={company_name}
                      onchange={setcompany_name}
                      options={Company_name()} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div>
                    <McInput
                      type={"picker"}
                      name={"Branch Name"}
                      id="branch_name_data"
                      required={true}
                      valid={setbranchvalid}
                      sendcheck={preSendValidator}
                      value={branch_name}
                      onchange={setbranch_name}
                      options={Branch_name()} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"User Name"}
                      id="username_data"
                      name={`data.username`}
                      inputtype="username"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setusernamevalid}
                      sendcheck={preSendValidator}
                      value={username}
                      onchange={setusername} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"First Name"}
                      id="firstname_data"
                      name={`data.FirstName`}
                      inputtype="firstname"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setfirstnamevalid}
                      sendcheck={preSendValidator}
                      value={firstname}
                      onchange={setfirstname} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"Last Name"}
                      id={"lastname_data"}
                      name={`data.LastName`}
                      inputtype="lastname"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setlastnamevalid}
                      sendcheck={preSendValidator}
                      value={lastname}
                      onchange={setlastname} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"Email ID"}
                      id={"email_data"}
                      inputtype="email"
                      type="text"
                      name={`data.EmailID`}
                      min_length="3"
                      required={true}
                      valid={setemailvalid}
                      sendcheck={preSendValidator}
                      value={email}
                      onchange={setemail} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"Phone Number"}
                      id={"phoneno_data"}
                      inputtype="phone"
                      type="text"
                      name={`data.Phone`}
                      maxLength="10"
                      input_inner_leftprop={<div>+91</div>}
                      required={true}
                      valid={setphonevalid}
                      sendcheck={preSendValidator}
                      value={phoneno}
                      onchange={setphoneno} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div>
                    <McInput
                      type={"picker"}
                      name={"User Type"}
                      id="usertype_data"
                      required={true}
                      valid={setusertypevalid}
                      sendcheck={preSendValidator}
                      value={usertype}
                      onchange={setusertype}
                      options={[
                        { "key": "0", "value": "NORMAL" },
                        { "key": "1", "value": "ADMIN" },
                        { "key": "2", "value": "PROJECT ADMIN" },
                        { "key": "3", "value": "SUPER USER" },
                      ]} />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"New Password"}
                      id="password_data"
                      name={`data.password`}
                      inputtype="password"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setpasswordvalid}
                      sendcheck={preSendValidator}
                      value={password}
                      onchange={setpassword} />
                  </div>
                </div>
              </form>
            </>
          }
          confirmClick={() => {
            console.log("***SEND***")
            Validate()
          }}
          cancelClick={setPopup}
        />
      }
    </>
  );
}
export default NewUserForm;
function Referrerid(Referrerid: any): string | Blob {
  throw new Error('Function not implemented.');
}

function errorlog(data: { status: number; data: string; }, errorresponse: any) {
  throw new Error('Function not implemented.');
}