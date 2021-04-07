import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import * as send from '../../assets/send.svg'
import * as eye from '../../assets/eye-visibility.svg'
import * as eye_invisible from '../../assets/eye-invisible.svg'
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { useForm } from 'react-hook-form';
import * as add from '../../assets/add.svg'
// import { createaccount, getuserList, postAppdata, updateProfile } from 'utils/api';


import Spinner from 'components/Common/Spinner';
import McInput from 'components/Common/McInput';
import { userListing } from 'utils/api';
import NewUserForm from 'components/Forms/NewUserForm';

export const header_options = () => <div>Hello</div>

const UserManagement = (props: any) => {
  const [updating, setupdating] = useState(false)
  const [selecteduser, setselecteduser] = useState({})

  const history = useHistory();
  const [isSelect, setisSelect] = useState('')
  const [iseditable, seteditable] = useState(false)
  const [isfirstnameemptyerror, setfirstnameemptyerror] = useState(false)
  const [islastnameemptyerror, setlastnameemptyerror] = useState(false)
  const [isemailIDemptyerror, setemailIDemptyerror] = useState(false)
  const [isphonenumberemptyerror, setphonenumberemptyerror] = useState(false)
  const [isusernameemptyerror, setusernameemptyerror] = useState(false)
  const [ispasswordemptyerror, setpasswordemptyerror] = useState(false)
  const [isusertypeemptyerror, setusertypeemptyerror] = useState(false)
  const [spinner, setspinner] = useState(false)

  const [company_name, setcompany_name] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [department, setdepartment] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [username, setusername] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [firstname, setfirstname] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [lastname, setlastname] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [email, setemail] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [phone, setphone] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [password, setpassword] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })

  const [emptycompany_name, setemptycompany_name] = useState(false)
  const [emptydepartment, setemptydepartment] = useState(false)
  const [emptyfirstname, setemptyfirstname] = useState(false)
  const [emptylastname, setemptylastname] = useState(false)
  const [emptyemail, setemptyemail] = useState(false)
  const [emptyphone, setemptyphone] = useState(false)
  const [emptypassword, setemptypassword] = useState(false)

  const [editpassword, seteditpassword] = useState(false)

  const [passwordShown, setpasswordShown] = useState(false);
  const [popup, setpopup] = useState(false)
  const [list, setlist] = useState([])


  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  const handleTextChange = (text: any) => {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const getuserlistdata = () => {
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    userListing((data: any, errorresponse: any) => {

      if (data.status === 200) {
        setspinner(false)
        console.log('response ' + JSON.stringify(data));
        setlist(data.data)

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      };
    }, token)
  }

  const phonenumberformatter = (value: any) => {
    var prefix = "+91"
    if (value.indexOf(prefix) !== 0) {
      setphone({ "value": prefix + value, "error": "", "isvalid": "false" });
      return prefix + value
    }

    return value

  }

  const updateinputdata = () => {

    if (updating) {
      if (true) {
        let data = {}
        if (editpassword) {
          data = {
            "company_name": company_name.value,
            "department": department.value,
            "username": username.value,
            "firstname": firstname.value,
            "lastname": lastname.value,
            "email": email.value,
            "phone": phonenumberformatter(phone.value),
            "user_type": isSelect,
            "password": password.value,
          }
        }
        else {
          data = {
            "firstname": firstname.value,
            "lastname": lastname.value,
            "email": email.value,
            "phone": phonenumberformatter(phone.value),
            "user_type": isSelect,
          }
        }
        console.log(selecteduser, data)
        let token = JSON.parse(String(localStorage.getItem("AuthToken")))

        // updateProfile((data: any, errorresponse: any) => {

        //   if (data.status === 200) {
        //     console.log('response ' + JSON.stringify(data));
        //     window.location.reload();

        //   } else {
        //     console.log('error ' + JSON.stringify(data));
        //     console.log('error ' + JSON.stringify(errorresponse));
        //   };
        // }, token, data, selecteduser.id)
      }
    }
    else {
      if (Validate()) {
        let data = {
          "company_name": company_name.value,
          "department": department.value,
          "username": username.value,
          "password": password.value,
          "email": email.value,
          "phone": phonenumberformatter(phone.value),
          "user_type": isSelect,
        }
        console.log(selecteduser, data)
        let token = JSON.parse(String(localStorage.getItem("AuthToken")))

        // createaccount((data: any, errorresponse: any) => {

        //   if (data.status === 200) {

        //     console.log('response ' + JSON.stringify(data));

        //     window.location.reload();
        //   } else {

        //     console.log('error ' + JSON.stringify(data));
        //     console.log('error ' + JSON.stringify(errorresponse));
        //   };
        // }, data, token)
        // create user part 
      }

    }
  }

  useEffect(() => {

    props.setheader_options(screen_header_elements)
    // let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // if (token === null)
    //   history.push("/")
    // else {
    //   let usertype = JSON.parse(String(localStorage.getItem("UserDetails"))).user_type
    //   if (usertype !== "SUPERUSER") {
    //     history.push("/")
    //   }
    // }

    getuserlistdata()

  }, [])

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add User</div>
        </div>
      </>
    )
  }

  const renderHeader = () => {
    let headerElement = ['Company Name', 'Location', 'Branch Name', 'First Name', 'Last Name', 'Email', 'Phone', 'UserType', 'Password']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {

    return (
      <>
        <tr key={element.id} onClick={() => {
          setselecteduser(element)
          seteditable(true)
          console.log(element)

          setupdating(true)

          setcompany_name({ "value": element.company_name, "error": "", "isvalid": "false", "isActive": true });
          setdepartment({ "value": element.department, "error": "", "isvalid": "false", "isActive": true });
          setusername({ "value": element.username, "error": "", "isvalid": "false", "isActive": true });
          setfirstname({ "value": element.firstname, "error": "", "isvalid": "false", "isActive": true });
          setlastname({ "value": element.lastname, "error": "", "isvalid": "false", "isActive": true });
          setemail({ "value": element.email, "error": "", "isvalid": "false", "isActive": true });
          setphone({ "value": element.phone, "error": "", "isvalid": "false", "isActive": true });
          setisSelect(element.user_type)
          console.log("csajdkfhj")
        }}>
          <td>{element.company_name}</td>
          <td>{element.department}</td>
          <td>{element.email}</td>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.email}</td>
          <td>{"*************"}</td>
          <td>{element.user_type}</td>
          {/* <td> <img  className='Bid_addicon' src={edit} /></td> */}
        </tr>
      </>
    )
  }
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);

  const Validate = () => {

    let temp = true
    if (String(company_name.value).length === 0 || String(department.value).length === 0 || String(username.value).length === 0 || String(firstname.value).length === 0 || String(lastname.value).length === 0 || String(email.value).length === 0 || String(phone.value).length === 0 || String(isSelect).length === 0 || String(password.value).length === 0) {
      temp = false
      if (String(company_name.value).length === 0) {
        setfirstnameemptyerror(true);
        console.log("company name is empty")
      } if (String(department.value).length === 0)
        setlastnameemptyerror(true);
      console.log("department is empty")
      if (String(username.value).length === 0)
        setemailIDemptyerror(true);
      console.log("username is empty")
      if (String(firstname.value).length === 3)
        setphonenumberemptyerror(true);
      console.log("firstname is empty")
      if (String(lastname.value).length === 0)
        setusernameemptyerror(true);
      console.log("lastname is empty")
      if (String(email.value).length === 0)
        setpasswordemptyerror(true);
      console.log("email is empty")
      if (String(phone.value).length === 0)
        setpasswordemptyerror(true);
      console.log("phone is empty")
      if (String(password.value).length === 0)
        setpasswordemptyerror(true);
      console.log("Password is empty")
      if (String(isSelect).length === 0)
        setusertypeemptyerror(true);
      console.log("User Type is empty")
    }

    return temp
  }

  return (

    <div className="main">

      {spinner ?
        <div className="spinner_fullscreen_div">
          <Spinner />
        </div> :
        null
      }

      {popup &&
        <NewUserForm
          setPopup={() => {
            setpopup(false)
          }}
        />
      }

      <div className="body">

        <div className="internal_table" style={{ width: '97%', overflowY: 'hidden' }}>
          <table id='internal_table'>
            <thead>{renderHeader()}</thead>
            <tbody>
              {
                list.map(renderBody)
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default UserManagement
