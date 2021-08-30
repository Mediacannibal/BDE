import React, { useEffect, useState } from 'react'
import Popup from '../Popup'
import './style.css'
import * as logofull from '../../../assets/MC_logo_with_title.svg'
import {Sociallogin } from 'utils/actions';
import { useHistory } from 'react-router-dom';
import useCountDown from 'react-countdown-hook';
import { useAuth } from 'store/authStore';
import ReactGA from 'react-ga';
import firebase from "../../../../firebase";

declare global {
  interface Window { recaptchaVerifier: any; confirmationResult: any }
}

const Cookie = (props: any) => {
  const { setAuth } = useAuth();
  const history = useHistory();
  const [username_email_or_phone, setusername_email_or_phone] = useState({ value: '', error: '' });
  const [password_otp, setpassword_otp] = useState({ value: '', error: '' });
  const [google_cookies, setgoogle_cookies] = useState('')
  const [ispassword, setispassword] = useState(true)

  const [timeLeft, { start, pause, resume, reset }] = useCountDown(15 * 1000, 1000);
  const [timerglow, settimerglow] = useState(false)

  const [phone, setphone] = useState('');
  const [otp, setotp] = useState('');

  const [phoneauth_uid, setphoneauth_uid] = useState('');


  const [cookie_popup, setcookie_popup] = useState(navigator.cookieEnabled)
  const [EmailLoginPopup, setEmailLoginPopup] = useState(false);
  const [aniout, setaniout] = useState(false);

  const [otp_popup, setotp_popup] = useState(true);

  const [email, setemail] = useState('');


  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    console.log('Cookies Enabled ?', cookie_popup, props.localstorage);
    lsTest()
  }, [])

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  const lsTest = () => {
    // var test = 'test';
    // try {
    //   localStorage.setItem(test, test);
    //   localStorage.removeItem(test);

    //   console.log('PERMISSION : :', true);
    // } catch (e) {
    //   console.log('PERMISSION : :', false);
    // }
  }

  const fade_in = (props: any) => {
    let result = (aniout ? (props + " " + "fade_out") : (props + " " + "fade_in"))
    return result
  }


  const _verifyCallback = (data: { status: number; data: string; }, errorresponse: any) => {
    if (data.status === 200) {
      // console.log('success ', data.data.results);
      // localStorage.setItem("otpResponse", JSON.stringify(data.data.results))
    } else {
      // errorlog(data, errorresponse)
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
      email_or_username: username_email_or_phone.value
    }
    Sociallogin(loginCallback, data)
  };

  const loginCallback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      // console.log('response =================> ' + JSON.stringify(data));
      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
      setAuth(String(data.data.result.token))
      history.replace('/Home')

      // let UserDetails = JSON.parse(String(localStorage.getItem('UserDetails')))
      // if (String(data.data.result.user_details.auth_type).toUpperCase() === "GOOGLE" || "FB" || "OTP")
      //   if (UserDetails.is_active === false)
      //     history.replace('/UserSetup')
      //   else
      //   history.replace('/Home')
      // else {
      //   if (String(data.data.result.user_details.auth_type).toUpperCase() === "MC")
      //     history.replace('/Home')
      // }
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
      .then(function (confirmationResult: any) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const onSubmitOtp = () => {
    // console.log(">>>>>>>>>>", phoneauth_uid)
    // e.preventDefault();
    let otpInput = otp;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result: any) {
        // User signed in successfully.
        // console.log("Result", result, result.user.uid);
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
    <div style={{ zIndex: 999999 }}>

      {(props.localstorage_permission) === "disable" &&
        < Popup
          classname={"cookie"}
          title={"ENABLE BROWSER COOKIES"}
          actionable={false}
          popup_body={
            <div >
              <div className='cookie_top_container'>
                <img className='cookie_menu_logo' src={logofull} />
              </div>
              <div className="desc">
                <div>Oops, look's like your cookies are Not Enabled..</div><br />
                <div>We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience.</div><br />
                <div><u>Please Enable cookies in your browser settings.</u></div><br />
                {"Settings > Privacy & Security > Cookies and other site data > Allow all cookies"}<br />
                And then Refresh the page.
              </div>
            </div>
          }
        />
      }

      {!cookie_popup || props.googlecookies === "idpiframe_initialization_failed" &&
        <Popup
          classname={"cookie"}
          title={"ENABLE BROWSER COOKIES"}
          actionable={false}
          popup_body={
            <div >
              <div className='cookie_top_container'>
                <img className='cookie_menu_logo' src={logofull} />
              </div>

              <div className="desc">
                <div>Oops, look's like your cookies are Not Enabled..</div><br />
                <div>We serve cookies on this site to analyze traffic, remember your preferences, and optimize your experience.</div><br />
                <div><u>Please Enable cookies in your browser settings.</u></div><br />
                {"Settings > Privacy & Security > Cookies and other site data > Allow all cookies"}<br />
                And then Refresh the page.
              </div>

              {props.googlecookies === "idpiframe_initialization_failed" &&
                <div className="cookie_email_login_button_container">
                  <div className="desc">OR</div><br />
                  <div className="desc"><u>Login with your Email ID</u></div><br />
                  <button className="cookie_email_login_button shadow"
                    onClick={() => {
                      setEmailLoginPopup(true)
                      setcookie_popup(false)
                    }}>LOGIN</button>
                </div>
              }

            </div>
          }
        />
      }

      {EmailLoginPopup &&

        <Popup
          actionable={false}
          popup_body={
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

          }
        />

      }
    </div>
  )
}

export default Cookie;
function Referrerid(Referrerid: any): string | Blob {
  throw new Error('Function not implemented.');
}

function errorlog(data: { status: number; data: string; }, errorresponse: any) {
  throw new Error('Function not implemented.');
}