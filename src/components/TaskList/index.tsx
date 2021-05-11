import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import 'components/app.css'
import { getMainTask } from 'utils/api';
import { ProgressBar } from 'components/Common/Spinner';
import ReactGantt, { GanttRow } from 'react-gantt';

import AddEditTask from 'components/Forms/AddEditTask';
import * as add from 'assets/add.svg'
import AddEditTaskLog from 'components/Forms/AddEditTaskLog';
import * as play from 'assets/play.svg'
import AddEditTaskTimeLog from 'components/Forms/AddEditTaskTimeLog';
import { useAuth } from 'store/authStore';
import { useuserDetails } from 'store/userDetailsStore';
import McInput from 'components/Common/McInput';
import * as up_down_arrow from 'assets/up_down.svg'
import Card from 'components/Common/Card';
import Footer from '../Common/Footer';
import TimeSpent from 'components/TimeSpent';
import UpDownArrow from 'components/Common/updownArrow';

const TaskList = (props: any) => {
  const history = useHistory();
  const { auth } = useAuth();

  const { userDetail, loaduserDetail } = useuserDetails();

  const [unique_title, setunique_title] = useState([])

  const [spinner, setspinner] = useState(true)

  const [popup1, setpopup1] = useState(false)
  const [addEditTaskLog_popup, setaddEditTaskLog_popup] = useState(false)
  const [addEditTaskTimeLog_popup, setaddEditTaskTimeLog_popup] = useState(false)
  const [timeSpent_popup, settimeSpent_popup] = useState(false)

  const [listItems1, setlistItems1] = useState([])

  const [seleted_taskId, setseleted_taskId] = useState('')
  const [seleted_taskName, setseleted_taskName] = useState('')

  const [task, settask] = useState('')
  const [users, setusers] = useState('all')
  const [parent_child, setparent_child] = useState('')
  const [project, setproject] = useState('')
  const [task_priority, settask_priority] = useState('')
  const [task_domain, settask_domain] = useState('')

  const [settask_picker_typevalid, setsettask_picker_typevalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const [up_arrow, setup_arrow] = useState(true)

  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!isFirstRender.current) {
      // console.log("NOT THE FIRST RENDER", isFirstRender.current)
      mainTask()
    }
  }, [task, users, parent_child, task_domain, task_priority])

  useEffect(() => {
    isFirstRender.current = false
    // console.log("FIRST RENDER", isFirstRender.current)
    props.setheader_options(screen_header_elements)
    if (!userDetail) {
      loaduserDetail()
    }
    setspinner(true)
    mainTask()
  }, [])

  const mainTask = () => {
    // console.log("SELETED TASKTYPE: ", task);
    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log("Task Results: ", data.data.results)
        setlistItems1([])
        setlistItems1(data.data.results)
      }
      else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, task, users, parent_child, task_domain, task_priority)
  }

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
    let headerElement = ['', 'Project', 'domain', 'Task Type', 'priority', 'status', 'Title', 'description', 'image_link', 'assignee', 'Time Spent', 'track']
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}
        <UpDownArrow
          onexpand={() => {
          }}
        />
      </th>
    })
  }

  const renderBody1 = (element: any) => {
    return (
      <>
        <tr key={element.id} className={getClassname(element.priority)}>
          <td>
            {((element.child !== undefined) && (element.child.length > 0)) &&
              <UpDownArrow
                onexpand={() => {
                  setup_arrow(!up_arrow)
                  let temp = listItems1
                  let objIndex = listItems1.findIndex((obj => obj.id == element.id))
                  {
                    element.assisted_by === 'false' ?
                      temp[objIndex].assisted_by = "true"
                      :
                      temp[objIndex].assisted_by = "false"
                  }
                  setlistItems1(temp)
                }}
              />
            }
          </td>
          <td>{element.project_ref}</td>
          <td>{element.domain}</td>
          <td>{element.task_type}</td>
          <td>{element.priority}</td>
          <td>{element.status}</td>
          <td
            onClick={() => {

              let temp = listItems1
              let objIndex = listItems1.findIndex((obj => obj.id == element.id))
              temp[objIndex].assisted_by = "blabla"
              // let temp = listItems1
              // temp.forEach((ele :any,index:any) => {
              //   if(ele.id === element.id){
              //      let x = ele
              //      x.title = "skdfgad"
              //      temp[index] = x
              //   }
              // });
              setlistItems1(temp)
              // setlistItems1({...listItems1, abc:"new value"});
              //  setlistItems1(Object.assign({}, listItems1, {title: 'Updated Data'}))
              // console.log("TESTEST!!: ", listItems1);
            }}
          >{element.title}</td>
          <td>{element.description}</td>
          <td>{element.image_link}</td>
          <td>{element.assigned_to}
            <img onClick={() => {
              setaddEditTaskLog_popup(true);
              setseleted_taskId(element.id);
            }} className='header_icon' src={add} />
          </td>
          <td>{element.time_spent}
            <button onClick={() => {
              settimeSpent_popup(true);
              setseleted_taskName(element.title);
              setseleted_taskId(element.id);
            }}>Time</button>
          </td>
          <td>
            <div className='screen_header_element'
              onClick={() => {
                setaddEditTaskTimeLog_popup(true);
                setseleted_taskId(element.id);
              }}>
              <img className='header_icon' src={play} />
            </div>
          </td>
        </tr>

        {element.assisted_by === 'true' &&
          <tr className={getClassname(element.priority)}>
            {element.child?.map((element: any) => {
              return (<>
                <td key={element.id}>
                  {((element.child !== undefined) && (element.child.length > 0)) &&
                    <img className={element.assisted_by === 'true' ?
                      'open_close_arrow_icon'
                      :
                      'open_close_arrow_icon rotate180'} src={up_down_arrow} onClick={() => { setup_arrow(!up_arrow); }}
                    />}
                </td>
                <td>{element.project_ref}</td>
                <td>{element.domain}</td>
                <td>{element.task_type}</td>
                <td>{element.priority}</td>
                <td>{element.status}</td>
                <td>{element.title}</td>
                <td>{element.description}</td>
                <td>{element.image_link}</td>
                <td>{element.assigned_to}
                  <img onClick={() => {
                    setaddEditTaskLog_popup(true);
                    setseleted_taskId(element.id);
                  }} className='header_icon' src={add} />
                </td>
                <td>{element.time_spent}
                  <button onClick={() => {
                    settimeSpent_popup(true);
                    setseleted_taskName(element.title);
                    setseleted_taskId(element.id);
                  }}>Time</button>
                </td>
                <td>
                  <div className='screen_header_element'
                    onClick={() => {
                      setaddEditTaskTimeLog_popup(true);
                      setseleted_taskId(element.id);
                    }}>
                    <img className='header_icon' src={play} />
                  </div>
                </td>
              </>
              )
            })}
          </tr>
        }
      </>
    )
  }

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element'
          onClick={() => { setpopup1(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Task</div>
        </div>
      </>
    )
  }

  const getoptions = (list: any) => {
    // console.log("Incoming list of options: ", list);
    let array: any = []
    array.push({ "key": "0", "value": "All" })
    list.forEach((element: any) => {
      array.push({
        "key": element,
        "value": element
      })
    });
    return array
  }

  return (
    <>
      <div className="main">
        {popup1 &&
          <AddEditTask
            setPopup={() => {
              setpopup1(false);
            }}
          />
        }

        {addEditTaskLog_popup &&
          <AddEditTaskLog
            setPopup={() => {
              setaddEditTaskLog_popup(false)
            }}
            taskid={seleted_taskId}
          />
        }

        {addEditTaskTimeLog_popup &&
          <AddEditTaskTimeLog
            setPopup={() => {
              setaddEditTaskTimeLog_popup(false);
            }}
            taskid={seleted_taskId}
            startorpausetask={true}
          />
        }

        {timeSpent_popup &&
          <TimeSpent
            setPopup={() => {
              settimeSpent_popup(false);
            }}
            taskName={seleted_taskName}
            taskId={seleted_taskId}
          />
        }

        <div className="body">
          {spinner ?
            <div className="spinner_fullscreen_div">
              <ProgressBar />
            </div>
            :
            <>

              <div className="mc_filter">
                <div className="inputfield_sub_container">
                  <div className="tasktype_dropdown">
                    <McInput
                      type={"picker"}
                      name={"Project"}
                      id="task_project_data"
                      required={true}
                      valid={settask_picker_typevalid}
                      sendcheck={preSendValidator}
                      value={project}
                      onchange={setproject}
                      options={getoptions(unique_title)}
                    />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="taskdomain_dropdown">
                    <McInput
                      type={"picker"}
                      name={"Domain"}
                      id="task_domain_data"
                      required={true}
                      valid={settask_picker_typevalid}
                      sendcheck={preSendValidator}
                      value={task_domain}
                      onchange={settask_domain}
                      options={[
                        { "key": "0", "value": "FRONTEND" },
                        { "key": "1", "value": "BACKEND" },
                        { "key": "2", "value": "UI" },
                        { "key": "3", "value": "DEV_OPS" }
                      ]}
                    />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="tasktype_dropdown">
                    <McInput
                      type={"picker"}
                      name={"Task Type"}
                      id="task_type_data"
                      required={true}
                      valid={settask_picker_typevalid}
                      sendcheck={preSendValidator}
                      value={task}
                      onchange={settask}
                      options={[
                        { "key": "0", "value": "FEATURE" },
                        { "key": "1", "value": "TEST" },
                        { "key": "2", "value": "BUG" },
                        { "key": "3", "value": "UPDATE" }]}
                    />
                  </div>
                </div>

                <div className="inputfield_sub_container">
                  <div className="taskpriority_dropdown">
                    <McInput
                      type={"picker"}
                      name={"Priority"}
                      id="task_priority_data"
                      required={true}
                      valid={settask_picker_typevalid}
                      sendcheck={preSendValidator}
                      value={task_priority}
                      onchange={settask_priority}
                      options={[
                        { "key": "0", "value": "Low" },
                        { "key": "1", "value": "Normal" },
                        { "key": "0", "value": "High" },
                        { "key": "0", "value": "Urgent" },
                        { "key": "0", "value": "Emergency" },
                      ]}
                    />
                  </div>
                </div>

                <button className="taskfilter_button"
                  onClick={() => {
                    settask('')
                    settask_domain('')
                    settask_priority('')
                  }}>Clear
                <div className="filter_icon_container">
                    {/* <img className='filter_icon' src={filter} /> */}
                  </div>
                </button>
              </div>

              <Card
                card_body={
                  <div className="internal_table">
                    <table id='internal_table'>
                      <thead>
                        <tr>{renderHeader1()}</tr>
                      </thead>
                      <tbody>
                        {listItems1.map(renderBody1)}
                      </tbody>
                    </table>
                  </div>
                }
              />

            </>
          }
        </div>
        <Footer />
      </div >
    </>
  )
}

export default TaskList;
function data(arg0: (data: any, errorresponse: any) => Promise<void>, auth: any, data: any) {
  throw new Error('Function not implemented.');
}