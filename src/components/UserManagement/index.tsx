import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import * as add from '../../assets/add.svg'

import Footer from '../Common/Footer';
import { ProgressBar } from '../Common/Spinner';
import { CommonAPi } from 'utils/api';
import { useAuth } from 'store/authStore';
import { ColourObject } from 'store/ColourStore'
import NewUserForm from '../Forms/UserSetup';
import UserSettings from 'components/UserMenuItems/UserSettings';
import UpDownArrow from 'components/Common/updownArrow';

export const header_options = () => <div>Hello</div>

const UserManagement = (props: any) => {
  const { auth } = useAuth();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const history = useHistory();

  const [spinner, setspinner] = useState(true)

  const [newUser_popup, setnewUser_popup] = useState(false)
  const [settings_popup, setsettings_popup] = useState(false)

  const [list, setlist] = useState([])

  useEffect(() => {
    // header
    props.setheader_options(screen_header_elements)

    if (!Colour || !colourObj) {
      loadColour();
    }

    CommonAPi(
      {
        path: `/api/user/list/`,
        method: "get",
        auth: auth ? auth : false,
      },
      (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Project Tasks:", data.data)
          setlist(data.data.results)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })
  }, [])

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element'
          onClick={() => { setnewUser_popup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add User</div>
        </div>
      </>
    )
  }

  const renderHeader = () => {
    let headerElement = ['Company Name', 'Branch Name', 'username', 'First Name', 'Last Name', 'Email', 'Phone', 'UserType', 'Password']

    return headerElement.map((key, index) => {
      return (
        <th key={index}>
          <div className={"title_wrapper"} >
            {key.toUpperCase()}
            <div className={"orderby_arrow"}>
              <UpDownArrow onexpand={() => { }} />
            </div>
          </div>
        </th>
      )
    })
  }

  const renderBody = (element: any) => {
    // console.log("user_details: ", element)
    return (
      <>
        <tr key={element.id} >
          <td>{element.company_name}</td>
          <td>{element.branch_name}</td>
          <td>{element.username.username}</td>
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
      {newUser_popup &&
        <NewUserForm
          setPopup={() => {
            setnewUser_popup(false)
          }}
        />
      }

      {settings_popup &&
        <UserSettings
          setPopup={() => {
            setsettings_popup(false)
          }}
        />
      }

      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <div className="internal_table" style={{ width: '97%', overflowY: 'hidden', color: colourObj.color_1 }}>
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

export default UserManagement;
