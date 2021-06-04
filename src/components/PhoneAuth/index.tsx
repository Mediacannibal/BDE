import React, { useEffect, useState } from 'react'
import firebase from "../../../firebase";
import 'firebaseui/dist/firebaseui.css'

declare global {
    interface Window { recaptchaVerifier: any; confirmationResult: any }
}

const Phoneauth = () => {

    const [phone, setphone] = useState('');
    const [otp, setotp] = useState('');




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
        // e.preventDefault();
        let otpInput = otp;
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm
            .confirm(otpInput)
            .then(function (result: any) {
                // User signed in successfully.
                console.log("Result", result);
                alert("SUCCESSFULL GOOD JOB HEMANTH");
                // let user = result.user;
            })
            .catch(function (error: any) {
                console.log(error);
                alert("Incorrect OTP");
            });
    };



    return (
        <div>
            <div className="login_button_container">
                <input id="password" type="number"
                    // value={ }
                    onChange={(e) => { setphone(e.target.value) }}
                    placeholder="Password / OTP"
                    className="login_input"
                />

                <button onClick={() => {
                    onSignInSubmit()
                }}>
                    <div className="login_buttontext">Get OTP</div>
                </button>
                <div id="recaptcha-container"></div>
            </div>



            <div className="login_button_container">
                <input id="otp" type="number"
                    // value={ }
                    onChange={(e) => { setotp(e.target.value) }}
                    placeholder=" OTP"
                    className="login_input"
                />

                <button onClick={() => {
                    onSubmitOtp()
                }}>
                    <div className="login_buttontext">SUBMIT</div>
                </button>

            </div>

        </div>
    );

}
export default Phoneauth;
