import { ProgressBar } from 'components/Common/Spinner'
import AddEditProject from 'components/Forms/AddEditProject'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useAuth } from 'store/authStore';
import Card from 'components/Common/Card'
import { CommonAPi } from 'utils/api'
import { useHistory } from 'react-router'
import AddEditTask from '../Forms/AddEditTask'
import Footer from '../Common/Footer'
import * as tasklist from '../../assets/tasklist.svg'
import * as bug from '../../assets/bug.svg'
import * as tested from '../../assets/tested.svg'
import * as add from '../../assets/add.svg'
import * as team from '../../assets/team.svg'
import AddEditUserList from '../Forms/UserListForm';
import { ColourObject } from 'store/ColourStore'

const ProjectScreen = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [spinner, setspinner] = useState(true)
  const { Colour, setColour, loadColour } = ColourObject()

  const [listItems, setlistItems] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [popup1, setpopup1] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [seleted_taskid, setseleted_taskid] = useState('')
  const [seleted_projectName, setseleted_projectName] = useState('')
  const [seleted_projectTaskType, setseleted_projectTaskType] = useState('')
  const [selected_User, setselected_User] = useState()
  const [companybranchTitle, setcompanybranchTitle] = useState(false)

  const [users, setusers] = useState('all')
  const [task, settask] = useState('')
  const [user_list, setuser_list] = useState('')
  const [parent_child, setparent_child] = useState('')

  const [task_history, settask_history] = useState('Task History')

  useEffect(() => {
    props.setheader_options(screen_header_elements)

    setspinner(true)

    if (!Colour) {
      loadColour();
    }

    CommonAPi(
      {
        path: `tasks/maintask/?
        task_type=${task}
        &user=${user_list}
        &parent_child=${parent_child}
        &domain=${''}
        &priority=${''}
        &project_ref=${''}`,

        method: "get",

        auth: auth ? auth : false,
      },
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          console.log("Project Tasks: ", data.data.results)
          setlistItems2(data.data.results)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })
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

  const project_Type = (element: any) => {
    if (element.design === true) {
      return ("Design")
    }
    else if (element.development === true) {
      return ("Development")
    }
    else if (element.marketting === true) {
      return ("Marketting")
    }
  }

  const project_Status = (element: any) => {
    // console.log("start and End: ", element.start_date, element.end_date);
    if ((element.start_date === null) && (element.end_date === null)) {
      return ("To Be Started")
    }
    else {
      if (element.end_date === null) {
        return ("In Progress")
      }
      else {
        return ("Completed")
      }
    }
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



      <div className="body" style={{ backgroundColor: Colour.primary }}>
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
                        <div className="project_title">{element.title + ": " + project_Type(element)}</div>
                        <div className="project_description">{element.description}</div>
                      </div>

                      <div className="project_right_container">
                        <div className="project_right_subcontainer">
                          <div className="project_stats visibility_toggle">Status: {project_Status(element)}
                            <div className="visibility_container right0">
                              {element.start_date !== null && <div className="label right0">Started: {element.start_date}</div>}
                              {element.end_date !== null && <div className="label right0">Completed: {element.end_date}</div>}
                            </div>
                          </div>


                          <div className="project_right_subcontainer">
                            <div className="project_participants_container">
                              <div className="project_participants_subcontainer">
                                <div className="project_stats">Participants:</div>
                                <div className="project_user_options">
                                  <div className="visibility_toggle" onClick={() => {
                                    setpopup3(true)
                                    setseleted_projectName(element.title)
                                    setseleted_projectTaskType("FEATURE")
                                  }}>
                                    <img className='header_icon' src={team} />
                                    <div className="visibility_container">
                                      <p className="label">Add User</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {
                                element.Profiles.map((element: any) => (
                                  <div key={element.id} className="visibility_toggle">
                                    <div className="project_stats left0">{element.user_type + ": " + element.firstname + " " + element.lastname}</div>
                                    <div className="visibility_container">
                                      <div className="label" >
                                        {element.company_name + ": " + element.branch_name}
                                      </div>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="project_tables">
                      <div className="internal_table">
                        <div className="project_table_icons">
                          <div className="project_subtitle">Active Tasks:</div>
                          <div className="project_task_options">
                            <div className="visibility_toggle" onClick={() => {
                              history.push('/TaskList')
                            }}>
                              <img className='header_icon' src={tasklist} />
                              <div className="visibility_container">
                                <p className="label">Task History</p>
                              </div>
                            </div>

                            <div className="visibility_toggle" onClick={() => {
                              setpopup2(true)
                              setseleted_projectName(element.title)
                            }}>
                              <img className='header_icon' src={add} />
                              <div className="visibility_container">
                                <p className="label">Add Tasks</p>
                              </div>
                            </div>

                            <div className="visibility_toggle" onClick={() => {
                              setpopup2(true)
                              setseleted_projectName(element.title)
                              setseleted_projectTaskType("FEATURE")
                            }}>
                              <img className='header_icon' src={tested} />
                              <div className="visibility_container">
                                <p className="label"> Request Feature</p>
                              </div>
                            </div>

                            <div className="visibility_toggle" onClick={() => {
                              setpopup2(true)
                              setseleted_projectName(element.title)
                              setseleted_projectTaskType("BUG")
                            }}>
                              <img className='header_icon' src={bug} />
                              <div className="visibility_container">
                                <p className="label">Report Bug</p>
                              </div>
                            </div>
                          </div>
                        </div>

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
export default ProjectScreen;