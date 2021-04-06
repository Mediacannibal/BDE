import McInput from 'components/Common/McInput'
import SimpleEditor from 'react-simple-image-editor';
import React, { useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import { newUserSignup } from 'utils/api';
import Popup from 'components/Common/Popup';
import { useHistory } from 'react-router-dom';
import './style.css'


const NewUserForm = ({ setPopup }) => {
  const history = useHistory();

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');



  const [ispopup, setispopup] = useState(false)

  const [company_name, setcompany_name] = useState('')
  const [location, setlocation] = useState('')
  const [branch_name, setbranch_name] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phoneno, setphoneno] = useState('')
  const [usertype, setusertype] = useState('')
  const [password, setpassword] = useState('')

  const [companynamevalid, setcompanynamevalid] = useState(false)
  const [locationvalid, setlocationvalid] = useState(false)
  const [branchvalid, setbranchvalid] = useState(false)
  const [firstnamevalid, setfirstnamevalid] = useState(false)
  const [lastnamevalid, setlastnamevalid] = useState(false)
  const [emailvalid, setemailvalid] = useState(false)
  const [phonevalid, setphonevalid] = useState(false)
  const [passwordvalid, setpasswordvalid] = useState(false)
  const [usertypevalid, setusertypevalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const [list, setlist] = useState([{
    "company_name": "",
    "location": "",
    "branch_name": "",
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": "",
    "user_type": "",
    "password": "",
  }])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };
  console.log(errors);

  const Validate = () => {

    if (companynamevalid === true
      && locationvalid === true
      && branchvalid === true
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

  return (
    <>
      {ispopup ?

        <Popup
          title={"Add / Edit User?"}
          desc1={"The following User will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            console.log("***SUBMIT***", list)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            newUserSignup(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                console.log('Sucess ' + JSON.stringify(data));
                localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
                localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
                history.push('/')
                // alert("successfully added")
                setbackendresponse("Successfully Added!")
                setbackendresponse_popup(true)
              } else {
                setispopup(false)
                setbackendresponse("Failed, Please Try Again!")
                console.log('error ' + JSON.stringify(data));
                console.log('error ' + JSON.stringify(errorresponse));
              }
            }, token, list[0])
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
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Company Name"}
                    id="companyname_data"
                    name={`data.CompanyName`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setcompanynamevalid}
                    sendcheck={preSendValidator}
                    value={company_name}
                    onchange={setcompany_name}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Location"}
                    id="location_data"
                    name={`data.location`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setlocationvalid}
                    sendcheck={preSendValidator}
                    value={location}
                    onchange={setlocation}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Branch Name"}
                    id="branch_name_data"
                    name={`data.branch_name`}
                    inputtype="branch_name"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setbranchvalid}
                    sendcheck={preSendValidator}
                    value={branch_name}
                    onchange={setbranch_name}
                  />
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
                    onchange={setfirstname}
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
                    onchange={setlastname}
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
                    onchange={setemail}
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
                    onchange={setphoneno}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
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
                      { "key": "0", "value": "ADMIN" },
                      { "key": "1", "value": "USER" }]}
                  />
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
                    onchange={setpassword}
                  />
                </div>
              </div>
            </form>
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
export default NewUserForm