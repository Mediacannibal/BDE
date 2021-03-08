import React, { useEffect, useState } from 'react'
import * as google from '../../assets/google.svg'
import * as facebook from '../../assets/facebook.svg'
import { GoogleLogin } from 'react-google-login';
import FacebookProvider, { Login } from 'react-facebook-sdk';
import { Sociallogin } from '../../utils/actions'

import './style.css'
import '../../components/app.css'
import { Header } from 'react-native/Libraries/NewAppScreen';


const LoginScreen = () => {

  const [isSocialdone, setisSocialdone] = useState(true)

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      // handleLogin()
    }
  }

  const loginCallback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log('response ' + JSON.stringify(data));
      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
      localStorage.setItem('UsedSocialLoginMethod', "true");
      setisSocialdone(false)
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
    <div className="main">
      
      <div className="body">

        <div className='title'>LOGIN</div>
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
                console.log(Response)
                var formData = new FormData()
                let userInfo = Response.profileObj
                formData.append('lastname', userInfo.familyName);
                formData.append('firstname', userInfo.givenName);
                formData.append('photo_url', userInfo.imageUrl);
                formData.append('auth_provider', "google");
                formData.append('email', userInfo.email);
                let userdetails = JSON.parse(String(localStorage.getItem("UserDetails")))
                console.log("=========>", userdetails.user);
                formData.append('username', userdetails.user);
                Sociallogin(loginCallback, formData)
              }}
              onFailure={(Response: any) => { console.log(Response) }}
              cookiePolicy={'single_host_origin'}
            />

            <FacebookProvider appId="976961256166749">
              <Login
                scope="email"
                onResponse={(response: any) => {
                  console.log(response.profile)
                  //  email: "medi.cann6@gmail.com"
                  // first_name: "Medi"
                  // id: "213891626989372"
                  // last_name: "Cann"
                  // name: "Medi Cann"
                  console.log(Response)
                  var formData = new FormData()
                  let userInfo = response.profile
                  formData.append('lastname', userInfo.first_name);
                  formData.append('firstname', userInfo.last_name);
                  formData.append('photo_url', "");
                  formData.append('auth_provider', "fb");
                  formData.append('email', userInfo.email);
                  let userdetails = JSON.parse(String(localStorage.getItem("UserDetails")))
                  console.log("=========>", userdetails.user);
                  formData.append('username', userdetails.user);
                  Sociallogin(loginCallback, formData)
                }}
                onError={(response: any) => {
                  console.log(response)
                }}
              >
                <button className="login_facebookbutton">
                  <img src={facebook} className="login_SMicon" />
                  <div className="login_buttontext">Continue with Facebook</div>
                </button>
              </Login>
            </FacebookProvider>

          </div>

          <div className="login_button_container">
            <input id="username" type="text" placeholder="User Name" className="login_input" />
          </div>

          <div className="login_button_container">
            <input id="password" type="password" placeholder="Password" className="login_input" onKeyPress={handleKeyPress} />
          </div>

          <div className="login_button_container">
            <button onClick={handleLogin} className="login_validatebutton">
              <div className="login_buttontext">Login</div>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LoginScreen
