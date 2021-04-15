import React, { useEffect, useState } from 'react'

import * as logofull from '../../assets/MC_logo_with_title.svg'
import * as google from '../../assets/google-logo.svg'
import * as facebook from '../../assets/facebook.svg'
import { GoogleLogin } from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook-sdk';
import { Sociallogin } from '../../utils/actions'

import { decode } from 'base-64'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import Footer from 'components/common/Footer';
import { verifyUser } from 'utils/api';

const LoginScreen = () => {
  const history = useHistory();
  const [username_email_or_phone, setusername_email_or_phone] = useState({ value: '', error: '' });
  const [password_otp, setpassword_otp] = useState({ value: '', error: '' });


  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  useEffect(() => {

  }, [])

  const validateData = (activationdata: FormData, storedotp: string, otp: string) => {
    console.log('storedotp =' + storedotp);
    console.log('inputotp =' + otp);
    console.log('activationdata :' + JSON.stringify(activationdata))
    if (storedotp === otp) {
      // validateData(activationdata,decode(storedotp),otp.value)        

      console.log('userinput:' + JSON.stringify(activationdata))
      Sociallogin(loginCallback, activationdata);

      // activateUser(_onvalidotp,activationdata)
    }
    else {
      console.log('error validating otp');
    }
  }

  const _verifyOTP = (code: string) => {
    localStorage.using('userinput').then((userinput: { data: string; }) => {
      console.log('userinput:' + JSON.stringify(userinput.data));
      localStorage.using('verifyrespone').then((data: { data: string; }) => {
        let temp = JSON.parse(data.data);
        let temp1 = JSON.parse(userinput.data);
        let storedotp = temp.results.otp;

        let temp2 = localStorage.using('NotificationToken').then((notificationdata: { data: any; }) => {
          console.log('NotificationToken:' + JSON.stringify(notificationdata.data));
          let notificationtoken = notificationdata.data
          // const activationdata =
          // {
          //   "username": temp1.username_email_or_phone,
          //   "auth_provider": "trt",
          //   "fcm_token": JSON.parse(notificationtoken)
          // }

          let activationdata = new FormData()
          activationdata.append('username', temp1.username_email_or_phone)
          activationdata.append('auth_provider', "trt")
          //code

          validateData(activationdata, decode(storedotp), code)
          return data.data;
        });
        return userinput.data;
      });
    });
  }

  // const emailValidator = (email: string) => {
  //   const re = /\S+@\S+\.\S+/;

  //   if (!email || email.length <= 0) return "Email cannot be empty.";
  //   if (!re.test(email)) return "Ooops! We need a valid email address.";

  //   return "";
  // };

  const _verifyCallback = (data: { status: number; data: string; }, errorresponse: any) => {
    if (data.status === 200) {
      console.log('success ', data.data.results);
      localStorage.setItem("otpResponse", JSON.stringify(data.data.results))

    } else {
      errorlog(data, errorresponse)
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  }

  const _onSignUpPressed = () => {

    console.log(username_email_or_phone)
    let data = {
      username_email_or_phone: username_email_or_phone.value,
    }
    localStorage.setItem('username_email_or_phone', JSON.stringify(data));
    verifyUser(_verifyCallback, data);

  };

  const loginCallback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log('response =================> ' + JSON.stringify(data));
      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
      if (data.data.result.user_details.auth_type === "GOOGLE" && "FACEBOOK")
        history.push('/NewUserForm')
      else
        if (data.data.result.user_details.auth_type === "MC")
          history.push('/Home')
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
                <input id="username" type="text" value={username_email_or_phone.value} onChange={(e) => { setusername_email_or_phone({ value: e.target.value, error: '' }) }} placeholder="User Name / Email / Phone Number" className="login_input" />
              </div>

              <div className="login_button_container">
                <input id="password" type="password" value={password_otp.value} onChange={(e) => { setpassword_otp({ value: e.target.value, error: '' }) }} placeholder="Password / OTP" className="login_input" onKeyPress={handleKeyPress} />
              </div>

              <div className="login_button_sub_container">

                {/* <div className="login_button_container">
                  <button onClick={handleLogin} className="login_validatebutton">
                    <div className="login_buttontext">Continue</div>
                  </button>
                </div> */}

                <div className="login_button_container">
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
                </div>

                <div className="login_button_container">
                  <button onClick={_onSignUpPressed}
                    className="login_validatebutton">
                    <div className="login_buttontext">Get OTP</div>
                  </button>
                </div>

              </div>
            </div>

            <div className='loginDescription_Text'>OR</div>

            <div className="SMlogin_button_container">

              <GoogleLogin
                clientId="581422038025-rte3a06d7kumasu887n64uikerfigmiv.apps.googleusercontent.com"
                render={(renderProps: { onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; disabled: boolean | undefined; }) => (
                  <button className="login_SMbutton" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <img src={google} className="login_SMicon" />
                    <div className="login_buttontext">Continue with Google</div>
                  </button>
                )}
                buttonText="Login"
                onSuccess={(Response: { profileObj: any; }) => {
                  console.log(Response);
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

export default LoginScreen
function Referrerid(Referrerid: any): string | Blob {
  throw new Error('Function not implemented.');
}

function errorlog(data: { status: number; data: string; }, errorresponse: any) {
  throw new Error('Function not implemented.');
}

