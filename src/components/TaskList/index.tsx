import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import 'components/app.css'
import { getMainTask, getProject } from 'utils/api';
import { ProgressBar } from 'components/Common/Spinner';

import AddEditTask from 'components/Forms/AddEditTask';
import * as add from 'assets/add.svg'
import AddEditTaskLog from 'components/Forms/AddEditTaskLog';
import * as play from 'assets/play.svg'
import AddEditTaskTimeLog from 'components/Forms/AddEditTaskTimeLog';
import { useAuth } from 'store/authStore';
import { useuserDetails } from 'store/userDetailsStore';
import McInput from 'components/Common/McInput';
import * as filter from 'assets/filter.png'
import * as up_down_arrow from 'assets/up_down.svg'
import Card from 'components/Common/Card';
import Footer from '../Common/Footer';

const TaskList = (props: any) => {
  const history = useHistory();
  const { auth } = useAuth();

  const { userDetail, loaduserDetail } = useuserDetails();

  const [unique_title, setunique_title] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  const [spinner, setspinner] = useState(true)

  const [popup1, setpopup1] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [seleted_taskid, setseleted_taskid] = useState('')

  const [project, setproject] = useState('')
  const [task, settask] = useState('')
  const [priority, setpriority] = useState('')
  const [domain, setdomain] = useState('')
  const [user_list, setuser_list] = useState('')
  const [status, setstatus] = useState('')

  const [users, setusers] = useState('all')

  const [settask_picker_typevalid, setsettask_picker_typevalid] = useState(false)
  const [setusers_typevalid, setsetusers_typevalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const [up_arrow, setup_arrow] = useState(true)
  const [parent_child, setparent_child] = useState('')

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [unique_domain, setunique_domain] = useState([])
  const [unique_task_type, setunique_task_type] = useState([])
  const [unique_priority, setunique_priority] = useState([])

  useEffect(() => {
    // console.log("<><><><><><><><><><>", auth);
    props.setheader_options(screen_header_elements)
    if (!userDetail) {
      loaduserDetail()
    }
    setspinner(true)
    // console.log("uuuuuuuuuuuuuuu", userDetail);

    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log("Task Results: ", data.data.results)
        setlistItems1(data.data.results)

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, task, users)

    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log("Project Results: ", data.data.results)
        setlistItems2(data.data.results)
        let title: Iterable<any> | null | undefined = []
        data.data.results.forEach((element: any) => {
          title.push(element.title)
        });
        setunique_title(Array.from(new Set(title)));
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, users)
  }, [])

  const renderHeader = () => {
    if (all_project_ref.length === 0) {
      let headerElement = ['Project', 'domain', 'Task Type', 'priority', 'status', 'Title', 'description', 'image_link', 'assignee', 'track']
      return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}
          <img className={up_arrow ?
            'open_close_arrow_icon'
            :
            'open_close_arrow_icon rotate180'
          } src={up_down_arrow} onClick={() => { setup_arrow(!up_arrow) }} />
        </th>
      })
    }
    else {
      let headerElement = ['domain', 'Task Type', 'priority', 'status', 'Title', 'description', 'image_link', 'assignee', 'track']

      return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
      })
    }
  }

  const renderBody = (element: any) => {
    if (all_project_ref.length === 0) {
      return (
        <tr key={element.id} onClick={() => {
          setpopup2(true)
          setseleted_taskid(element.id)
        }}>

          <td>{element.project_ref}</td>
          <td>{element.domain}</td>
          <td>{element.task_type}</td>
          <td>{element.priority}</td>
          <td>{element.status}</td>
          <td >{element.title}</td>
          <td>{element.description}</td>
          <td>{element.image_link}</td>
          <td>{element.assigned_to}</td>
          <td>
            <div className='screen_header_element'
              onClick={() => {
                setpopup3(true)
                setseleted_taskid(element.id)
              }}>
              <img className='header_icon' src={play} />
            </div>
          </td>
        </tr >
      )
    }
    else {
      return (
        <tr key={element.id}>
          <td onClick={() => {
            setpopup2(true)
            setseleted_taskid(element.id)
          }}>{element.title}</td>
          <td>{element.task_type}</td>
          <td>{element.priority}</td>
          <td>{element.domain}</td>
          <td>{element.description}</td>
          <td>{element.assigned_to}</td>
          <td>{element.image_link}</td>
          <td>
            <div className='screen_header_element'
              onClick={() => {
                setpopup3(true)
                setseleted_taskid(element.id)
              }}>
              <img className='header_icon' src={play} />
            </div>
          </td>
          <td>{element.status}</td>
        </tr >
      )
    }
  }

  const Projecttitle = () => {
    return listItems2.map((ele: any, key: any) => {
      return <div>{" Project:"}<span>{ele.title}</span></div>
    })
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
    console.log("incoming list of titles", list);

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

        {popup2 &&
          <AddEditTaskLog
            setPopup={() => {
              setpopup2(false);
            }}
            taskid={seleted_taskid}
          />
        }

        {popup3 &&
          <AddEditTaskTimeLog
            setPopup={() => {
              setpopup3(false);
            }}
            taskid={seleted_taskid}
          />
        }

        <div className="body">
          {spinner ?
            <div className="spinner_fullscreen_div">
              <ProgressBar />
            </div>
            :
            <>
              {/* <div className='main_selector_div'>
                <select className="projectname_dropdown"
                  id="noformat_dropdown"
                  value={all_project_ref}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setall_project_ref(e.target.value);
                  }}>
                  <option hidden value="">Project Name</option>
                  <option value="">All</option>
                  {unique_title.map((element) => {
                    return <option value={element}>{element}</option>;
                  })}
                </select>
              </div> */}

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
                      value={domain}
                      onchange={setdomain}
                      options={[
                        { "key": "0", "value": "TEST" },
                        { "key": "1", "value": "BUG" },
                        { "key": "2", "value": "FEATURE" },
                        { "key": "3", "value": "UPDATE" },
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
                        { "key": "0", "value": "TEST" },
                        { "key": "1", "value": "BUG" },
                        { "key": "2", "value": "FEATURE" },
                        { "key": "3", "value": "UPDATE" },
                      ]}
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
                      value={priority}
                      onchange={setpriority}
                      options={[
                        { "key": "0", "value": "TEST" },
                        { "key": "1", "value": "BUG" },
                        { "key": "2", "value": "FEATURE" },
                        { "key": "3", "value": "UPDATE" },
                      ]}
                    />
                  </div>
                </div>
              </div>

              <button className="taskfilter_button"
                onClick={() => {
                  getMainTask(async (data: any, errorresponse: any) => {
                    if (data.status === 200) {
                      let data = {
                        "project": document.getElementById("task_project_data").value,
                        "domain": document.getElementById("task_domain_data").value,
                        "task_type": document.getElementById("task_type_data").value,
                        "priority": document.getElementById("task_priority_data").value,
                      }
                      setspinner(false)
                      // console.log(">>>>>>>>>>>", data.data.results)
                      setlistItems1(data.data.results)
                      let project_ref: Iterable<any> | null | undefined = []
                      let domain: Iterable<any> | null | undefined = []
                      let task_type: Iterable<any> | null | undefined = []
                      let priority: Iterable<any> | null | undefined = []
                      data.data.forEach((element: any) => {
                        project_ref.push(element.project_ref)
                        domain.push(element.domain)
                        task_type.push(element.task_type)
                        priority.push(element.priority)
                      });
                      setunique_project_ref(Array.from(new Set(project_ref)));
                      setunique_domain(Array.from(new Set(domain)))
                      setunique_task_type(Array.from(new Set(task_type)))
                      setunique_priority(Array.from(new Set(priority)))
                    } else {
                      setspinner(false)
                      console.log('error ' + JSON.stringify(data));
                      console.log('error ' + JSON.stringify(errorresponse));
                    }
                  }, auth, task, users, parent_child)
                }}>Filter
                <div className="filter_icon_container">
                  <img className='filter_icon' src={filter} />
                </div>
              </button>


              <Card
                card_title={Projecttitle}
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

              <Card
                card_title={Projecttitle}
                card_body={
                  <div className="internal_table">
                    <table id='internal_table'>
                      <thead>
                        <tr>{renderHeader()}</tr>
                      </thead>
                      <tbody>
                        {listItems1.map(renderBody)}
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

export default TaskList
function data(arg0: (data: any, errorresponse: any) => Promise<void>, auth: any, data: any) {
  throw new Error('Function not implemented.');
}

