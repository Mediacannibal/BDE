import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import 'components/app.css'
import Footer from 'components/common/Footer';
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
import Card from 'components/Common/Card';

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

  const [task, settask] = useState('')
  const [user_list, setuser_list] = useState('')
  const [users, setusers] = useState('')


  const [settask_picker_typevalid, setsettask_picker_typevalid] = useState(false)
  const [setusers_typevalid, setsetusers_typevalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

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
        // console.log(">>>>>>>>>>>", data.data.results)
        setlistItems1(data.data.results)

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, task, user_list)

    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>123123>>>>>", data.data.results)
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
    let headerElement = ['title', 'Task Type', 'priority', 'domain', 'description', 'assignee', 'image_link', 'track', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderHeader2 = () => {
    let headerElement = ['title', 'Task Type', 'priority', 'domain', 'description', 'assignee', 'image_link', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
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

  const Projecttitle = () => {
    return listItems2.map((ele: any, key: any) => {
      return <div>{" Project:"}<span>{ele.title}</span></div>
    })
  }

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup1(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Task</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="main">
        {popup1 &&
          <AddEditTask
            setPopup={() => {
              setpopup1(false);
            }} />}

        {popup2 &&
          <AddEditTaskLog
            setPopup={() => {
              setpopup2(false);
            }}
            taskid={seleted_taskid} />}

        {popup3 &&
          <AddEditTaskTimeLog
            setPopup={() => {
              setpopup3(false);
            }}
            taskid={seleted_taskid} />}

        <div className="body">
          {spinner ?

            <div className="spinner_fullscreen_div">
              <ProgressBar />
            </div>
            :
            <>
              <div className='main_selector_div'>
                <select
                  className="projectname_dropdown"
                  id="noformat_dropdown"
                  value={all_project_ref}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setall_project_ref(e.target.value);
                  }}>
                  <option hidden value="">Project Name</option>
                  {unique_title.map((element) => {
                    return <option value={element}>{element}</option>;
                  })}
                </select>
              </div>

              <div className="mc_filter">
                <div className="inputfield_sub_container">
                  <div className="Booking_slot_dropdown">
                    <McInput
                      type={"picker"}
                      name={"TASKS"}
                      id="tasks_type_data"
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
                  <div className="Booking_slot_dropdown">
                    <McInput
                      type={"picker"}
                      name={"USERS"}
                      id="users_type_data"
                      required={true}
                      valid={setusers_typevalid}
                      sendcheck={preSendValidator}
                      value={user_list}
                      onchange={setuser_list}
                      options={[
                        { "key": "0", "value": "all" },
                        { "key": "1", "value": "" },
                      ]}
                    />
                  </div>
                </div>

              </div>


              <button className="bidrecord_filterandclose_button"
                onClick={() => {

                  getMainTask(async (data: any, errorresponse: any) => {
                    if (data.status === 200) {
                      setspinner(false)
                      // console.log(">>>>>>>>>>>", data.data.results)
                      setlistItems1(data.data.results)

                    } else {
                      setspinner(false)
                      console.log('error ' + JSON.stringify(data));
                      console.log('error ' + JSON.stringify(errorresponse));
                    }
                  }, auth, task, user_list)


                  getProject(async (data: any, errorresponse: any) => {
                    if (data.status === 200) {
                      setspinner(false)
                      // console.log(">>>>>>123123>>>>>", data.data.results)
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
                  }, auth)

                }}>Filter <div className="filter_icon_container"><img className='filter_icon' src={filter} /></div></button>

              <Card
                card_title={Projecttitle}
                card_body={
                  <div className="internal_table">
                    <table id='internal_table'>
                      <thead>
                        {(all_project_ref.length === 0) ?
                          <tr>{renderHeader()}</tr>
                          :
                          <tr>{renderHeader2()}</tr>}
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

