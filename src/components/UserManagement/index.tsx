import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';

import '../../components/app.css'
import Footer from 'components/common/Footer';
import * as add from '../../assets/add.svg'

import Spinner from 'components/Common/Spinner';
import { userListing } from 'utils/api';
import NewUserForm from 'components/Forms/NewUserForm';

export const header_options = () => <div>Hello</div>

const UserManagement = (props: any) => {
  const [updating, setupdating] = useState(false)
  const [selecteduser, setselecteduser] = useState({})

  const history = useHistory();
  const [isSelect, setisSelect] = useState('')
  const [iseditable, seteditable] = useState(false)

  const [spinner, setspinner] = useState(false)

  const [popup, setpopup] = useState(false)
  const [list, setlist] = useState([])

  const getuserlistdata = () => {
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    userListing((data: any, errorresponse: any) => {

      if (data.status === 200) {
        setspinner(false)
        console.log('response ' + JSON.stringify(data));
        setlist(data.data)
        console.log("<><><><><>", data.data);


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
        <tr key={element.id} >
          <td>{element.company_name}</td>
          <td>{element.branch_name}</td>
          <td>{element.user.username}</td>
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
