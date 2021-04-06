import TextField from 'components/common/TextFieldWithRef'
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

  const [isslotemptyerror, setslotemptyerror] = useState(false)


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

  const [iscompany_nameemptyerror, setcompany_nameemptyerror] = useState(true)
  const [islocationemptyerror, setlocationemptyerror] = useState(true)
  const [isbranch_nameemptyerror, setbranch_nameemptyerror] = useState(true)
  const [isfirstnameemptyerror, setfirstnameemptyerror] = useState(true)
  const [islastnameemptyerror, setlastnameemptyerror] = useState(true)
  const [isemailemptyerror, setemailemptyerror] = useState(true)
  const [isphonenoemptyerror, setphonenoemptyerror] = useState(true)
  const [ispasswordemptyerror, setpasswordemptyerror] = useState(true)
  const [usertypevalid, setusertypevalid] = useState(true)

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

    let temp = true

    console.log(company_name, location, branch_name, firstname, lastname, email, phoneno, password)

    if (String(company_name).length === 0
      || String(location).length === 0
      || String(branch_name).length === 0
      || String(firstname).length === 0
      || String(lastname).length === 0
      || String(email).length === 0
      || String(phoneno).length === 0
      || String(usertype).length === 0
      || String(password).length === 0
    ) {
      temp = false
      if (company_name.length === 0) {
        setcompany_nameemptyerror(false);
      }
      if (location.length === 0) {
        setlocationemptyerror(false);
      }
      if (branch_name.length === 0) {
        setbranch_nameemptyerror(false);
      }
      if (firstname.length === 0) {
        setfirstnameemptyerror(false);
      }
      if (lastname.length === 0) {
        setlastnameemptyerror(false);
      }
      if (email.length === 0) {
        setemailemptyerror(false);
      }
      if (phoneno.length === 0) {
        setphonenoemptyerror(false);
      }
      if (String(usertype).length === 0)
        setusertypevalid(false);
    }

    // console.log(document.getElementById("firstname_data").valid,
    //   String(document.getElementById("firstname_data").valid))

    return temp
  }

  return (
    <>
      {!ispopup ?
        <Popup
          title={"Add / Edit User"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Company Name"}
                    id="companyname_data"
                    name={`data.CompanyName`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={iscompany_nameemptyerror}
                    setvalid={setcompany_nameemptyerror}
                    value={company_name}
                    onChange={setcompany_name}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Location"}
                    id="location_data"
                    name={`data.location`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={islocationemptyerror}
                    setvalid={setlocationemptyerror}
                    value={location}
                    onChange={setlocation}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Branch Name"}
                    id="branch_name_data"
                    name={`data.branch_name`}
                    inputtype="branch_name"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isbranch_nameemptyerror}
                    setvalid={setbranch_nameemptyerror}
                    value={branch_name}
                    onChange={setbranch_name}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"First Name"}
                    id="firstname_data"
                    name={`data.FirstName`}
                    inputtype="firstname"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isfirstnameemptyerror}
                    setvalid={setfirstnameemptyerror}
                    value={firstname}
                    onChange={setfirstname}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Last Name"}
                    id={"lastname_data"}
                    name={`data.LastName`}
                    inputtype="lastname"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={islastnameemptyerror}
                    setvalid={setlastnameemptyerror}
                    value={lastname}
                    onChange={setlastname}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Email ID"}
                    id={"email_data"}
                    inputtype="email"
                    type="text"
                    name={`data.EmailID`}
                    min_length="3"
                    required={true}
                    valid={isemailemptyerror}
                    setvalid={setemailemptyerror}
                    value={email}
                    onChange={setemail}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Phone Number"}
                    id={"phoneno_data"}
                    inputtype="phone"
                    type="text"
                    name={`data.Phone`}
                    maxLength="10"
                    input_inner_leftprop={<div>+91</div>}
                    required={true}
                    valid={isphonenoemptyerror}
                    setvalid={setphonenoemptyerror}
                    value={phoneno}
                    onChange={setphoneno}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <TextField
                    type={"picker"}
                    name={"User Type"}
                    id="usertype_data"
                    required={true}
                    valid={usertypevalid}
                    setvalid={setusertypevalid}
                    value={usertype}
                    setvalue={setusertype}
                    options={[
                      { "key": "0", "value": "ADMIN" },
                      { "key": "1", "value": "USER" }]}
                  />
                </div>
                {isslotemptyerror ? <div className="invalid_entry">Please select a UserType!</div> : null}
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"New Password"}
                    id="password_data"
                    name={`data.password`}
                    inputtype="password"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={ispasswordemptyerror}
                    setvalid={setpasswordemptyerror}
                    value={password}
                    onChange={setpassword}
                  />
                </div>
              </div>
            </form>
          }
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
          }}
          cancelClick={setPopup}
        />
        :
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
      }
    </>
  );
}
export default NewUserForm