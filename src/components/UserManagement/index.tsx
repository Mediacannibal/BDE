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
  const [location, setlocation] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
  const [branch_name, setbranch_name] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false })
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

  useEffect(() => {

    // header
    props.setheader_options(screen_header_elements)

    // User listing
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
    let headerElement = ['Company Name', 'Branch Name', 'username', 'First Name', 'Last Name', 'Email', 'Phone', 'UserType', 'Password']

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
          setbranch_name({ "value": element.branch_name, "error": "", "isvalid": "false", "isActive": true });
          setusername({ "value": element.username, "error": "", "isvalid": "false", "isActive": true });
          setfirstname({ "value": element.firstname, "error": "", "isvalid": "false", "isActive": true });
          setlastname({ "value": element.lastname, "error": "", "isvalid": "false", "isActive": true });
          setemail({ "value": element.email, "error": "", "isvalid": "false", "isActive": true });
          setphone({ "value": element.phone, "error": "", "isvalid": "false", "isActive": true });
          setisSelect(element.user_type)
          console.log("csajdkfhj")
        }}>
          <td>{element.company_name}</td>
          <td>{element.branch_name}</td>
          <td>{element.username}</td>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.user_type}</td>
          <td>{"*************"}</td>
          {/* <td> <img  className='Bid_addicon' src={edit} /></td> */}
        </tr>
      </>
    )
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
