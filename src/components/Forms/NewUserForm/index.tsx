import McInput from 'components/Common/McInput'
import SimpleEditor from 'react-simple-image-editor';
import React, { useEffect, useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import { getBranchDetails, getCompanyDetails, newUserSignup } from 'utils/api';
import Popup from 'components/Common/Popup';
import { useHistory } from 'react-router-dom';
import './style.css'


const NewUserForm = ({ setPopup }, props: any) => {
  const history = useHistory();

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

  const [newUser_popup, setnewUser_popup] = useState(false)

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data); 
  };
  // console.log(errors);

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
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))

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
    }, token)

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
    }, token)
  }, [])

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

  return (
    <>
      <div>
        {newUser_popup &&
          <NewUserForm
            setPopup={() => {
              setnewUser_popup(false)
            }}
          />
        }
      </div>

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
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"picker"}
                    name={"Company Name"}
                    id="companyname_data"
                    required={true}
                    valid={setcompanynamevalid}
                    sendcheck={preSendValidator}
                    value={company_name}
                    onchange={setcompany_name}
                    options={
                      Company_name()
                    }
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"picker"}
                    name={"Branch Name"}
                    id="branch_name_data"
                    required={true}
                    valid={setbranchvalid}
                    sendcheck={preSendValidator}
                    value={branch_name}
                    onchange={setbranch_name}
                    options={
                      Branch_name()
                    }
                  />
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
                    onchange={setusername}
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
                <div >
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
                    ]}
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
export default NewUserForm;