import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import * as add from '../../assets/add.svg'

import NewUserForm from 'components/Forms/NewUserForm';
import { useAuth } from 'store/authStore';
import Footer from '../Common/Footer';
import { ProgressBar } from '../Common/Spinner';
import { profileUserListing } from 'src/utils/api';

export const header_options = () => <div>Hello</div>

const UserManagement = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [spinner, setspinner] = useState(true)

  const [popup, setpopup] = useState(false)
  const [list, setlist] = useState([])

  useEffect(() => {

    // header
    props.setheader_options(screen_header_elements)

    profileUserListing((data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log('response ' + JSON.stringify(data));
        console.log("User Profile List: ", data.data.result);
        setlist(data.data.result)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      };
    }, auth)

  }, [])

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element'
          onClick={() => { setpopup(true) }}>
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
    console.log("user_details: ", element)
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
      {popup &&
        <NewUserForm
          setPopup={() => {
            setpopup(false)
          }}
        />
      }

      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
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
        }
      </div>
      <Footer />
    </div>
  )
}

export default UserManagement
