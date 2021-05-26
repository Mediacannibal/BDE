import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import Popup from 'components/Common/Popup'
import { getTasktimelog } from 'utils/api';
import { useAuth } from 'store/authStore';
import { ProgressBar } from 'components/Common/Spinner';

const TimeSpent = ({ setPopup, taskName, taskId, users }) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [listItems, setlistItems] = useState([])
  const [spinner, setspinner] = useState(true)
  const [companybranchTitle, setcompanybranchTitle] = useState(false)
  const [user_type, setuser_type] = useState("")
  const [Users, setUsers] = useState("")

  useEffect(() => {
    setspinner(true)
    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      let usertype = UserDetails.user_type
      setuser_type(usertype)
      if (((String(users) === "undefined") || (String(users) === "null"))) {
        if ((usertype === "ADMIN") || (usertype === "PROJECTADMIN") || (usertype === "SUPERUSER")) {
          setUsers("all")
        }
        else {
          setUsers("")
        }
      }
      else {
        setUsers(String(users))
      }
      // console.log("Users sent for api request: ", Users)
    }

    getTasktimelog(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log("TaskTime Log Results: ", data.data)
        setlistItems(data.data.results)
      }
      else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, ((taskId === undefined) || (taskId === null)) ? "" : taskId, Users)
  }, [])

  const renderHeader = () => {

    let headerElement = (Users.length === 0) ?
      ['Started At', 'Paused At', 'Time Spent']
      :
      ['Assignee', 'Started At', 'Paused At', 'Time Spent']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr key={element.id}>
        {(Users.length === 0) ? null :
          <td onClick={() => {
            setcompanybranchTitle(!companybranchTitle)
          }}>
            {element.first_name + ' ' + element.last_name}
          </td>
        }
        <td>{element.created_at}</td>
        <td>{element.updated_at}</td>
        <td>{element.time_spent}</td>
      </tr >
    )
  }

  return (
    <Popup
      title={"Time Spent for " + taskName}
      popup_body={
        <>
          { companybranchTitle &&
            <div className="companybranch_container">
              <div className="companybranch_wrapper">
                {listItems.map((element: any, key: any) => {
                  return (
                    <div className="companybranch_subwrapper">
                      <div className="header_title" >
                        {"Company: " + element.company}
                      </div>
                      <div className="header_title" >
                        {"Branch: " + element.branch}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          }

          {spinner ?
            <div className="spinner_fullscreen_div">
              <ProgressBar />
            </div>
            :
            <>
              <div className="internal_table">
                <table id='internal_table'>
                  <thead>
                    <tr>{renderHeader()}</tr>
                  </thead>
                  <tbody>
                    {
                      listItems.map(renderBody)
                    }
                  </tbody>
                </table>
              </div>
            </>
          }

        </>
      }
      actionable={false}
      cancelClick={setPopup}
    />
  )
}

export default TimeSpent;
