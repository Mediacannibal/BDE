import React, { useEffect, useState } from 'react'

import * as logofull from '../../assets/MC_logo_with_title.svg'
import * as google from '../../assets/google-logo.svg'
import * as facebook from '../../assets/facebook.svg'
import { GoogleLogin } from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook-sdk';
import { Sociallogin } from '../../utils/actions'

import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import { generateOTP } from 'utils/api';
import useCountDown from 'react-countdown-hook';
import Footer from '../Common/Footer';
import ReactGA from 'react-ga';
import firebase from "../../../firebase";
import { setuid } from 'process';
import { useAuth } from 'store/authStore';

declare global {
  interface Window { recaptchaVerifier: any; confirmationResult: any }
}

const LoginScreen = () => {
  const { setAuth } = useAuth();
  const history = useHistory();
  const [username_email_or_phone, setusername_email_or_phone] = useState({ value: '', error: '' });
  const [password_otp, setpassword_otp] = useState({ value: '', error: '' });

  const [ispassword, setispassword] = useState(true)

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(15 * 1000, 1000);
  const [timerglow, settimerglow] = useState(false)

  const [phone, setphone] = useState('');
  const [otp, setotp] = useState('');

  const [phoneauth_uid, setphoneauth_uid] = useState('');


  // const [time, settime] = useState(0)

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

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
      email_or_username : username_email_or_phone.value
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



  //PHONE AUTH OTP

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response: any) {
          console.log("Captcha Resolved", response);
          onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = () => {
    // e.preventDefault();
    setUpRecaptcha();
    let phoneNumber = "+91" + phone;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmitOtp = () => {
    console.log(">>>>>>>>>>", phoneauth_uid)
    // e.preventDefault();
    let otpInput = otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result: any) {
        // User signed in successfully.
        console.log("Result", result, result.user.uid);
        // alert("SUCCESSFULL GOOD JOB HEMANTH");
        // let user = result.user;
        let data = {
          auth_provider: ispassword ? "otp" : "mc",
          username: result.user.uid,
          phone: username_email_or_phone.value
        }
        Sociallogin(loginCallback, data)
      })
      .catch(function (error: any) {
        console.log(error);
        alert("Incorrect OTP");
      });
  };

  return (
    <div className="login_page">

      <div className='loginBG'></div>

      <div className="login_wrapper">

        <div className='login_top_container'>
          <img className='login_menu_logo' src={logofull} />

          <div className='login_title_wrapper'>
            <div className='login_title text_blue'>DESIGN</div>
            <div className='login_title text_spacer'>|</div>
            <div className='login_title text_blue'>DEVELOPMENT</div>
            <div className='login_title text_spacer'>|</div>
            <div className='login_title text_blue'>MARKETTING</div>
          </div>
        </div>

        {/* {isotpsent ? */}
        <div className="login_form_wrapper">

          <div className="login_form_bg"></div>

          <div className='loginDescription_Text'>Login or Sign Up with any of the following:</div>

          <div className=" login_popupformcontainer">

            <div className="login_container">

              <div className="login_button_container">
                <input id="username" type="text"
                  value={username_email_or_phone.value}
                  onChange={(e) => {
                    setusername_email_or_phone({ value: e.target.value, error: '' })
                    setphone(e.target.value)
                  }}
                  placeholder="User Name / Email / Phone Number" className="login_input" />
                <div id="recaptcha-container"></div>
              </div>

              <div className="login_button_container">
                <input id="password" type="password"
                  value={password_otp.value}
                  onChange={(e) => {
                    setpassword_otp({ value: e.target.value, error: '' })
                    setotp(e.target.value)
                  }}
                  placeholder="Password / OTP" className="login_input" onKeyPress={handleKeyPress} />
              </div>

              <div className="login_button_sub_container">

                <div className="login_button_container">
                  <button onClick={() => {
                    OTPvalidate()
                    onSubmitOtp()
                  }} className="login_validatebutton">
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

                      let reg = '^[0-9]*[1-9]+$|^[1-9]+[0-9]*$'
                      if (username_email_or_phone.value.match(reg)) {
                        onSignInSubmit()
                        settimerglow(true)
                        start()
                      } else {
                        _onSignUpPressed()
                        settimerglow(true)
                        start()
                      }
                    }
                  }}
                    className={timeLeft / 1000 === 0 ? "login_validatebutton" : "login_validatebutton disabled_button"} >

                    {timerglow ?
                      <div className="login_resendotp_container">
                        <div className={timeLeft / 1000 === 0 ? 'login_buttontext' : 'login_buttontext disabled_text'} >
                          {timeLeft / 1000 === 0 ? 'Get OTP' : ('Resend in ' + timeLeft / 1000)}
                        </div>
                      </div>
                      :
                      <div className="login_buttontext">Get OTP</div>
                    }
                  </button>
                </div>
              </div>
            </div>

            <div className='loginDescription_Text'>OR</div>

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

              <FacebookProvider appId="494516388401593">
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
                    // formData.append('photo_url', userInfo.photo_url);
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

        {/* :
        <div className="login_form_wrapper">

          <div className='login_title'>Enter OTP</div>
          <div className='loginDescription_Text'>Please check SMS or E-mail for OTP.</div>

          <div className=" login_popupformcontainer">
            <div className="login_button_container">
              <input id="password" type="password" placeholder="Enter OTP" className="login_input" onKeyPress={handleKeyPress} />
            </div>

            <div className="login_button_container">
              <button onClick={() => {
                history.push('/NewUserForm')
              }} className="login_validatebutton">
                <div className="login_buttontext">Submit</div>
              </button>
            </div>

            <div className="login_button_container">
              <button onClick={() => { }} className="login_validatebutton">
                <div className="login_buttontext">Resend OTP</div>
              </button>
            </div>

            <div className="login_button_container">
              <button onClick={() => {
                setisotpsent(!isotpsent)
              }} className="login_validatebutton">
                <div className="login_buttontext">Change Email</div>
              </button>
            </div>
          </div>
        </div>
      } */}

      </div>

      <Footer bgColor={'bgtransparent'} />

    </div>

  );
}

export default LoginScreen;
function Referrerid(Referrerid: any): string | Blob {
  throw new Error('Function not implemented.');
}

function errorlog(data: { status: number; data: string; }, errorresponse: any) {
  throw new Error('Function not implemented.');
}

