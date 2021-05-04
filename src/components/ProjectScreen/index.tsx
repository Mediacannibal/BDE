import { ProgressBar } from 'components/Common/Spinner'
import AddEditProject from 'components/Forms/AddEditProject'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useAuth } from 'store/authStore';
import Card from 'components/Common/Card'
import { getMainTask, getProject } from 'utils/api'
import { useHistory } from 'react-router'
import AddEditTask from '../Forms/AddEditTask'
import Footer from '../Common/Footer'
import * as tasklist from '../../assets/tasklist.svg'
import * as bug from '../../assets/bug.svg'
import * as tested from '../../assets/tested.svg'
import * as add from '../../assets/add.svg'
import * as team from '../../assets/team.svg'
import AddEditUserList from '../Forms/UserListForm';

const ProjectScreen = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [spinner, setspinner] = useState(true)

  const [listItems, setlistItems] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [popup1, setpopup1] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [seleted_taskid, setseleted_taskid] = useState('')
  const [seleted_projectName, setseleted_projectName] = useState('')
  const [seleted_projectTaskType, setseleted_projectTaskType] = useState('')

  const [users, setusers] = useState('all')
  const [task, settask] = useState('')
  const [user_list, setuser_list] = useState('')

  useEffect(() => {
    props.setheader_options(screen_header_elements)

    setspinner(true)

    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log("ProjectProfiles: ", data.data.results)
        setlistItems(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, users)

    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>>>>>>", data.data.results)
        setlistItems2(data.data.results)

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, task, user_list)
  }, [])

  const getClassname = (key: any) => {
    switch (key) {
      case "Low":
        return "textcolor_yellow";
      case "Normal":
        return "textcolor_blue";
      case "High":
        return "textcolor_orange";
      case "Urgent":
        return "textcolor_red";
      case "Emergency":
        return "textcolor_red textcolor_blinking";
      default:
        return "";
    }
  }

  const renderHeader1 = () => {
    let headerElement = ['Company Name', 'Branch Name', 'First Name', 'Last Name', 'user type']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody1 = (element: any) => {

    return (
      <>
        <tr key={element.id}>
          <td>{element.company_name}</td>
          <td>{element.branch_name}</td>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.user_type}</td>
        </tr>
      </>
    )
  }


  const renderHeader2 = () => {
    let headerElement = ['domain', 'Task Type', 'priority', 'status', 'title', 'assignee']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody2 = (element: any) => {
    return (
      <tr key={element.id}
        className={getClassname(element.priority)}
        onClick={() => {
          // setpopup2(true)
          setseleted_taskid(element.id)
        }}>
        <td>{element.domain}</td>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.status}</td>
        <td>{element.title}</td>
        <td>{element.assigned_to}</td>
      </tr >
    )
  }

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element'
          onClick={() => { setpopup1(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Project</div>
        </div>
      </>
    )
  }


  return (

    <div className="main">

      {popup1 &&
        <AddEditProject
          setPopup={() => {
            setpopup1(false)
          }}
        />
      }

      {popup2 &&
        <AddEditTask
          setPopup={() => {
            setpopup2(false);
          }}
          projectName={seleted_projectName}
          projectTaskType={seleted_projectTaskType}
        />
      }

      {popup3 &&
        <AddEditUserList
          setPopup={() => {
            setpopup3(false);
          }}
        />
      }

      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div> :
          <Card
            classname="fullwidth"
            card_title="Branch: "
            card_body={
              listItems.map((element: any, key: any) => {
                return (
                  <div className="project_wrapper">
                    <div className="project_details">
                      <div className="project_left_container">
                        <img className='project_image' src={add} />
                      </div>
                      <div className="project_center_container">
                        <div className="project_title">{element.title}</div>
                        <div className="project_description">{element.description}</div>
                      </div>

                      <div className="project_right_container">
                        <div className="project_stats">Type: {element.project_type}</div>
                        <div className="project_stats">Status: {element.status}</div>
                        <div className="project_stats">Start Date: {element.start_date}</div>
                        <div className="project_stats">End Date: {element.end_date}</div>
                      </div>
                    </div>

                    <div className="project_tables">
                      <div className="internal_table">
                        <div className="project_subtitle">Participants:</div>

                        <table id='internal_table'>
                          <thead>
                            <tr>{renderHeader1()}</tr>
                          </thead>
                          <tbody>
                            {
                              element.Profiles.map(renderBody1)
                            }
                          </tbody>
                        </table>
                        <div className="project_user_options">
                          <div className="project_sub_text" onClick={() => {
                            setpopup3(true)
                            setseleted_projectName(element.title)
                            setseleted_projectTaskType("FEATURE")
                          }}>
                            <img className='header_icon' src={team} />
                            Add User</div>
                        </div>
                      </div>

                      <div className="internal_table">
                        <div className="project_subtitle">Active Tasks:</div>
                        <table id='internal_table'>
                          <thead>
                            <tr>{renderHeader2()}</tr>
                          </thead>
                          <tbody>
                            {
                              element.ProjectTasks.map(renderBody2)
                            }
                          </tbody>
                        </table>
                        <div className="project_task_options">
                          <div className="project_sub_text" onClick={() => {
                            history.push('/TaskList')
                          }}>
                            <img className='header_icon' src={tasklist} />
                            Task History</div>

                          <div className="project_sub_text" onClick={() => {
                            setpopup2(true)
                            setseleted_projectName(element.title)
                          }}>
                            <img className='header_icon' src={add} />
                            Add Tasks</div>

                          <div className="project_sub_text" onClick={() => {
                            setpopup2(true)
                            setseleted_projectName(element.title)
                            setseleted_projectTaskType("FEATURE")
                          }}>
                            <img className='header_icon' src={tested} />
                            Request Feature</div>

                          <div className="project_sub_text" onClick={() => {
                            setpopup2(true)
                            setseleted_projectName(element.title)
                            setseleted_projectTaskType("BUG")
                          }}>
                            <img className='header_icon' src={bug} />
                            Report Bug</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          />
        }
      </div>
      <Footer />
    </div >

  );
}
export default ProjectScreen