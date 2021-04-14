import React, { useEffect, useState } from 'react'

import * as logofull from '../../assets/MC_logo_with_title.svg'
import * as google from '../../assets/google.svg'
import * as facebook from '../../assets/facebook.svg'
import { GoogleLogin } from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook-sdk';
import { Sociallogin } from '../../utils/actions'

import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import Footer from 'components/common/Footer';


const LoginScreen = () => {

  const [isSocialdone, setisSocialdone] = useState(true)
  const [ispassword, setispassword] = useState(true)
  const [isotpsent, setisotpsent] = useState(true)
  const [activetab, setactivetab] = useState(true)
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

      {isotpsent ?
        <div className="login_wrapper">

          <div className="login_logo_wrapper">

            <div>
              <img className='login_menu_logo' src={logofull} />
            </div>

          </div>

          <div className='login_title'>Welcomes you!</div>

          <div className='loginDescription_Text'>Please select your preferred method to login.</div>

          <div className=" login_popupformcontainer">

            <div className="SMlogin_button_container">

              <GoogleLogin
                clientId="581422038025-rte3a06d7kumasu887n64uikerfigmiv.apps.googleusercontent.com"
                render={(renderProps: { onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined; disabled: boolean | undefined; }) => (
                  <button className="login_googlebutton" onClick={renderProps.onClick} disabled={renderProps.disabled}>
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
                  <button className="login_facebookbutton">
                    <img src={facebook} className="login_SMicon" />
                    <div className="login_buttontext">Continue with Facebook</div>
                  </button>
                </Login>
              </FacebookProvider>
            </div>

            <div className="tab_pass_otp_container">

              <div className="login_tab_pass_otp">
                <div onClick={() => {
                  setispassword(!ispassword)
                }} className={ispassword ? "login_tab_active" : "login_tab_inactive"}>PASSWORD</div>

                <div onClick={() => {
                  setispassword(!ispassword)
                }} className={ispassword ? "login_tab_inactive" : "login_tab_active"}>OTP</div>
              </div>

              {ispassword ?
                <>
                  <div className="login_container">
                    <div className="login_button_container">
                      <input id="username" type="text" placeholder="User Name" className="login_input" />
                    </div>

                    <div className="login_button_container">
                      <input id="password" type="password" placeholder="Password" className="login_input" onKeyPress={handleKeyPress} />
                    </div>
                    <div className="login_button_sub_container">
                      <div className="login_button_container">
                        <button onClick={handleLogin} className="login_validatebutton">
                          <div className="login_buttontext">Login</div>
                        </button>
                      </div>

                      <div className="login_button_container">
                        <button onClick={() => {
                          history.push('/NewUserForm')
                        }} className="login_validatebutton">
                          <div className="login_buttontext">Sign Up</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
                :
                <>
                  <div className="login_container">
                    <div className="login_button_container">
                      <input id="username" type="text" placeholder="User Name" className="login_input" />
                    </div>

                    <div className="login_button_container">
                      <button onClick={() => {
                        setisotpsent(!isotpsent)
                      }} className="login_validatebutton">
                        <div className="login_buttontext">Get OTP</div>
                      </button>
                    </div>
                  </div>
                </>
              }

            </div>

          </div>
        </div>
        :
        <div className="login_wrapper">

          <div className='login_title'>Enter OTP</div>
          <div className='loginDescription_Text'>Please check SMS or E-mail for OTP.</div>

          <div className=" login_popupformcontainer">
            <div className="login_button_container">
              <input id="password" type="password" placeholder="Enter OTP" className="login_input" onKeyPress={handleKeyPress} />
            </div>

            <div className="login_button_container">
              <button onClick={() => { }} className="login_validatebutton">
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
      }

      <Footer />

    </div>

  );
}

export default LoginScreen
