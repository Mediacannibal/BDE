import TextField from 'components/common/TextFieldWithRef'
import SimpleEditor from 'react-simple-image-editor';
import React, { useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import * as trash from '../../../assets/trash.svg'
import * as edit from '../../../assets/edit.png'
import * as send from '../../../assets/send.svg'
import { newUserSignup } from 'utils/api';
import Popup from 'components/Common/Popup';
import { useHistory } from 'react-router-dom';
import './style.css'


const NewUserForm = () => {
  const history = useHistory();

  const [emptycompany_name, setemptycompany_name] = useState(false)
  const [emptydepartment, setemptydepartment] = useState(false)
  const [emptyfirstname, setemptyfirstname] = useState(false)
  const [emptylastname, setemptylastname] = useState(false)
  const [emptyemail, setemptyemail] = useState(false)
  const [emptyphone, setemptyphone] = useState(false)
  const [emptypassword, setemptypassword] = useState(false)
  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [isselectslot, setisselectslot] = useState('value')

  const [ispopup, setispopup] = useState(false)
  const [showtable, setshowtable] = useState(false)

  const [company_name, setcompany_name] = useState('')
  const [department, setdepartment] = useState('')
  const [username, setusername] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [user_type, setuser_type] = useState('')
  const [password, setpassword] = useState('')

  const [number, setnumber] = useState(0)
  const [number00, setnumber00] = useState("00")
  const [name, setname] = useState('');
  const [amount, setamount] = useState('');
  const [isSelect, setisSelect] = useState('value')

  const [list, setlist] = useState([{
    "company_name": "",
    "department": "",
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": "",
    "user_type": "",
    "password": "",
  }])

  const updateinputdata = (data: any) => {

    let buff = []
    list.forEach(element => {
      if (element.company_name.length !== 0)
        buff.push(element)
    });
    buff.push(data)
    setlist(buff)
    console.log(buff)
  }

  const renderHeader = () => {
    let headerElement = ['', 'Company Name', 'Department', 'User Name', 'First Name', 'Last Name', 'Email', 'Phone', 'UserType', 'Password', '']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }


  const renderBody = (element: any, index: any) => {

    return (
      <>
        <tr key={element.bug_title}>
          <div className='senddiv'>
            <img onClick={() => {
              editrow(element, index)
              console.log(">>>>>>>>>>>>>>>>>>", element)
            }}
              className='sendicon' src={edit} />
          </div>
          <td>{element.company_name}</td>
          <td>{element.department}</td>
          <td>{element.email}</td>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.password}</td>
          <div className='senddiv'>
            <img onClick={() => removerow(element, index)}
              className='sendicon' src={trash} />
          </div>
        </tr>
      </>
    )
  }

  const removerow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index)
        a.push(x[i])
    }
    setlist(a);
  }

  const editrow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index) { a.push(x[i]) }
      else {
        setname(x[i].company_name)
        setisselectslot(x[i].department)
        setisSelect(x[i].firstname)
        setnumber(Number(x[i].lastname))
        setamount(x[i].email)

        a.push(x[i])

        console.log(a)
      }
    }
    setlist(a);
  }

  const phonenumberformatter = (value: any) => {
    var prefix = "+91"
    if (value.indexOf(prefix) !== 0) {
      setphone({ "value": prefix + value, "error": "", "isvalid": "false" });
      return prefix + value
    }

    return value

  }


  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);

  const Validate = () => {
    let company_name = String(document.getElementById("companyname_data").value);
    let department = String(document.getElementById("Department_data").value);
    let username = String(document.getElementById("email_data").value);
    let firstname = String(document.getElementById("firstname_data").value);
    let lastname = String(document.getElementById("lastname_data").value);
    let email = String(document.getElementById("email_data").value);
    let phone = String(document.getElementById("phoneno_data").value);
    let user_type = String(document.getElementById("user_type_data").value);
    let password = String(document.getElementById("password_data").value);

    let temp = true
    if (company_name.length === 0 || department.length === 0 || username.length === 0 || firstname.length === 0 || lastname.length === 0 || email.length === 0 || phone.length === 0 || isSelect.length === 0 || password.length === 0) {
      temp = false
      if (company_name.length === 0) {
        setemptycompany_name(true);
        console.log("company name is empty")
      } if (department.length === 0)
        setemptydepartment(true);
      console.log("department is empty")
      if (firstname.length === 3)
        setemptyfirstname(true);
      console.log("firstname is empty")
      if (lastname.length === 0)
        setemptylastname(true);
      console.log("lastname is empty")
      if (email.length === 0)
        setemptyemail(true);
      console.log("email is empty")
      if (phone.length === 0)
        setemptyphone(true);
      console.log("phone is empty")
      if (password.length === 0)
        setemptypassword(true);
      console.log("Password is empty")

    }
    return temp
  }

  return (

    <>
      { !ispopup ?
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
                    min_length="1"
                    required={true}
                    valid={setemptycompany_name}
                    value={setcompany_name}
                    setvalue={company_name}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Department"}
                    id="Department_data"
                    name={`data.Department`}
                    inputtype="Department"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptydepartment}
                    value={setdepartment}
                    setvalue={department}
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
                    min_length="1"
                    required={true}
                    valid={setemptyfirstname}
                    value={setfirstname}
                    setvalue={firstname}
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
                    min_length="1"
                    required={true}
                    valid={setemptylastname}
                    value={setlastname}
                    setvalue={lastname} />
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
                    required={true}
                    valid={setemptyemail}
                    value={setemail}
                    setvalue={email} />
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
                    valid={setemptyphone}
                    value={setphone}
                    setvalue={phone}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <select id="user_type_data" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                    required={isslotemptyerror}
                    value={isselectslot}
                    onChange={(e) => {
                      setslotemptyerror(false)
                      setisselectslot(e.target.value)
                    }}
                  >
                    <option hidden value="">USER TYPE</option>
                    <option value="DAY">ADMIN</option>
                    <option value="NIGHT">USER</option>
                  </select>
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
                    min_length="1"
                    required={true}
                    valid={setemptypassword}
                    value={setpassword}
                    setvalue={password}
                  />
                </div>
              </div>
            </form>
          }
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
          }}
          cancelClick={() => {
            console.log("***CANCEL***")
            // history.push("/TaskList")
            // setPopup
          }}
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