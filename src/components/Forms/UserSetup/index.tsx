import McInput from 'components/Common/McInput'
import SimpleEditor from 'react-simple-image-editor';
import React, { useEffect, useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import { CommonAPi, generateOTP, newUserSignup, Sociallogin } from 'utils/api';
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
import * as eye from '../../../assets/eye-visibility.svg'
import * as eye_invisible from '../../../assets/eye-invisible.svg'
import { useuserDetails } from 'store/userDetailsStore';

const UserSetup = ({ setPopup }, props: any) => {
  const history = useHistory();
  const { auth, setAuth } = useAuth()
  const { self, edituserDetail } = useuserDetails()

  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [ispopup, setispopup] = useState(false)

  const [passwordShown, setpasswordShown] = useState(false);

  const [company_name, setcompany_name] = useState({})
  const [branch_name, setbranch_name] = useState({})
  const [firstname, setfirstname] = useState('')
  const [username, setusername] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phoneno, setphoneno] = useState('')
  const [usertype, setusertype] = useState({})
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

  const [newuserorlinkaccount, setnewuserorlinkaccount] = useState(false)
  const [tickbox, settickbox] = useState(false)
  const [tick, settick] = useState(false)
  const [istick, setistick] = useState(false)

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

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

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
      && istick === true
    ) {

      // setispopup(true)
    }
    else {
      setPreSendValidator(true)
    }
  }

  useEffect(() => {

    console.log(">>>>>>>>>>>=========== : : : ", self, Number(localStorage.getItem('UserDetails')).user_id);

    CommonAPi(
      {
        path: `company/list/dropdown/`,
        method: "get",
        auth: auth ? auth : false,
      },
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Company Names: ", data.data)
          setlistItems1(data.data)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })

    CommonAPi(
      {
        path: `company/branch/list/dropdown/`,
        method: "get",
        auth: auth ? auth : false,
      },
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Project Tasks: ", data.data)
          setlistItems2(data.data)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })

    if (!Colour) {
      loadColour();
    }
  }, [])

  const CompanyName = () => {
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

  const BranchName = () => {
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
      username: username_email_or_phone.value,
      link_account: "1"
    }
    Sociallogin(loginCallback, data)
  };

  const loginCallback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      // console.log('response =================> ' + JSON.stringify(data));
      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
      setAuth(String(data.data.result.token))

      let UserDetails = JSON.parse(String(localStorage.getItem('UserDetails')))
      // console.log("dataaa==>", UserDetails);

      if (String(data.data.result.user_details.auth_type).toUpperCase() === "GOOGLE" || "FB" || "OTP")
        if (UserDetails.is_active === false)
          history.replace('/UserSetup')
        else
          history.replace('/Home')
      else {
        if (String(data.data.result.user_details.auth_type).toUpperCase() === "MC")
          history.replace('/Home')
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
      {(newuserorlinkaccount) ?
        <>
          <Popup
            title={"link or switch account"}
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
                          onChange={(e) => { setusername_email_or_phone({ value: e.target.value, error: '' }); }}
                          placeholder="User Name / Email / Phone Number" className="login_input" />
                      </div>

                      <div className="login_button_container">
                        <input id="password" type="password"
                          value={password_otp.value}
                          onChange={(e) => { setpassword_otp({ value: e.target.value, error: '' }); }}
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

                        <div className="login_button_container">
                          <button onClick={() => {
                            if (timeLeft / 1000 === 0) {
                              _onSignUpPressed();
                              settimerglow(true);
                              start();
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
                                <div className={timeLeft / 1000 === 0 ? 'login_buttontext' : 'login_buttontext disabled_text'}>
                                  {timeLeft / 1000 === 0 ? 'Get OTP' : ('Resend in ' + timeLeft / 1000)}</div>
                              </div>
                              :
                              <div className="login_buttontext">Get OTP</div>}
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
                          localStorage.setItem("Bearer", JSON.stringify(Response.accessToken));
                          let userInfo = Response.profileObj;
                          let data = {
                            "lastname": userInfo.familyName,
                            "firstname": userInfo.givenName,
                            "photo_url": userInfo.imageUrl,
                            "auth_provider": "google",
                            "email": userInfo.email,
                            "username": userInfo.googleId,
                            "link_account": "1",
                          };
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
                            console.log(Response);
                            var formData = new FormData();
                            let userInfo = response.profile;
                            formData.append('lastname', userInfo.last_name);
                            formData.append('firstname', userInfo.first_name);
                            formData.append('photo_url', userInfo.photo_url);
                            formData.append('auth_provider', "fb");
                            formData.append('email', userInfo.email);
                            formData.append('username', userInfo.id);
                            formData.append('link_account', "1");
                            Sociallogin(loginCallback, formData);
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
                <div onClick={() => { setnewuserorlinkaccount(false) }}>Go Back</div>
              </>
            }
            actionable={false}
            cancelClick={setPopup}
          />
        </>
        :
        <>
          {ispopup ?
            <Popup
              popup_type={"confirm"}
              title={"Add / Edit User?"}
              desc1={"The following User will be placed!"}
              desc2={"Please click 'Confirm' to proceed?"}
              confirmClick={() => {
                let id = self ? self?.profile_id : Number(localStorage.getItem('UserDetails')).profile_id
                let data = {
                  "username": self ? self?.user_id : Number(localStorage.getItem('UserDetails')).user_id,
                  // "image":"",
                  "firstname": firstname,
                  "lastname": lastname,
                  "email": email,
                  // "address":"",
                  // "dob":"",
                  "user_type": usertype?.value,
                  // "gender":"",
                  // "auth_type":"",
                  // "photo_url":"",
                  // "dial_code":"",
                  "phone": phoneno,
                  "company_name": company_name?.value,
                  "branch_name": branch_name?.value,
                  // "password": password,
                  "is_active": true,
                }
                edituserDetail(id, data)
                setPopup(true)
              }}
              cancelClick={() => {
                console.log("***CANCEL***")
                setispopup(false)
              }}
            />
            :
            <Popup
              title={"Welcome to Media Cannible we need a few more details before we can activate your account"}
              popup_body={
                <>
                  <div>Already created an account please <div onClick={() => {
                    // console.log("><><><><><><><");
                    setnewuserorlinkaccount(!newuserorlinkaccount)
                    setispopup(false)
                  }}
                  ><u >click here</u></div> to link/switch accounts</div>
                  {/* New User Form */}
                  <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

                    <div>Are you a part of a organisation?</div>

                    <div className="input_checkbox">
                      <div className="checkbox_sub_container">
                        <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                          onChange={() => {
                            settickbox(!tickbox)
                          }} />
                        <div className="checkbox_text">Tick Me</div>
                      </div>
                    </div>

                    {tickbox &&
                      <>
                        <div className="inputfield_sub_container">
                          <McInput
                            type={"picker"}
                            name={"Company Name"}
                            id="companyname_data"
                            required={true}
                            valid={setcompanynamevalid}
                            sendcheck={preSendValidator}
                            value={company_name?.value}
                            onChange={setcompany_name}
                            options={CompanyName()}
                          />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            type={"picker"}
                            name={"Branch Name"}
                            id="branch_name_data"
                            required={true}
                            valid={setbranchvalid}
                            sendcheck={preSendValidator}
                            value={branch_name?.value}
                            onChange={setbranch_name}
                            options={BranchName()}
                          />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            type={"picker"}
                            name={"User Type"}
                            id="usertype_data"
                            required={true}
                            valid={setusertypevalid}
                            sendcheck={preSendValidator}
                            value={usertype?.value}
                            onChange={setusertype}
                            options={[
                              { "key": "0", "value": "NORMAL" },
                              { "key": "1", "value": "ADMIN" },
                              { "key": "2", "value": "PROJECT ADMIN" },
                              { "key": "3", "value": "SUPER USER" },
                            ]}
                          />
                        </div>
                      </>
                    }

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
                          onChange={setusername}
                        />
                      </div>
                    </div>

                    <div className="inputfield_sub_container">
                      <div className="textinput_box_container">
                        <McInput
                          label={"First Name"}
                          id="firstname_data"
                          name={`data.FirstName`}
                          inputtype="Text"
                          type="text"
                          min_length="3"
                          required={true}
                          valid={setfirstnamevalid}
                          sendcheck={preSendValidator}
                          value={firstname}
                          onChange={setfirstname}
                        />
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
                          onChange={setlastname}
                        />
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
                          onChange={setemail}
                        />
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
                          onChange={setphoneno}
                        />
                      </div>
                    </div>

                    <div className="inputfield_sub_container">
                      <div className="textinput_box_container">
                        <McInput
                          label={"Password"}
                          id="password_data"
                          inputtype="password"
                          type={passwordShown ? "text" : "password"}
                          name={`data.Password`}
                          min_length="8"
                          required={true}
                          sendcheck={preSendValidator}
                          valid={setpasswordvalid}
                          value={password}
                          onChange={setpassword}
                          input_inner_rightprop={
                            <div onClick={() => { setpasswordShown(!passwordShown) }} id="eye">
                              {passwordShown ? <img className="Password_visibility_icon" src={eye} />
                                :
                                <img className="Password_visibility_icon" src={eye_invisible}
                                />
                              }
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </form>
                </>
              }
              confirmClick={() => {
                console.log("***SEND***")
                Validate()
                setispopup(true)
              }}
              cancelClick={setPopup}


            />
          }
        </>
      }

    </>
  );
}
export default UserSetup;
function Referrerid(Referrerid: any): string | Blob {
  throw new Error('Function not implemented.');
}

function errorlog(data: { status: number; data: string; }, errorresponse: any) {
  throw new Error('Function not implemented.');
}