import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import 'components/app.css'
import { ProgressBar } from 'components/Common/Spinner'

import AddEditTask from 'components/Forms/AddEditTask'
import * as add from 'assets/add.svg'
import AddEditTaskLog from 'components/Forms/AddEditTaskLog'
import * as play from 'assets/play.svg'
import * as pause from 'assets/pause.svg'
import * as defaultusericon from '../../assets/user_icon.svg'
import * as edit from '../../assets/edit.png'
import AddEditTaskTimeLog from 'components/Forms/AddEditTaskTimeLog'
import { useAuth } from 'store/authStore'
import { useuserDetails } from 'store/userDetailsStore'
import McInput from 'components/Common/McInput'
import Footer from '../Common/Footer'
import TimeSpent from 'components/TimeSpent'
import { ColourObject } from 'store/ColourStore'
import { useForm } from 'react-hook-form';
import { getChatID } from 'utils/GlobalFunctions'
import AddEditUserList from 'components/Forms/UserListForm'
import McCard from 'components/Common/McCard'
import { taskStore } from '../../store/taskStore';
import { assigntaskStore } from 'store/assigntaskStore'
import AssignLogForm from 'components/Forms/AssignLogForm'
import { companyStore } from 'store/companyStore'
import Popup from 'components/Common/Popup'

const TaskList = (props: any) => {
  const { auth } = useAuth()
  const { userDetail, loaduserDetail } = useuserDetails()
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { taskField, settaskField, loadTaskDetail, loadTaskDetail_byvalues, loadTaskDetail_withcallback, edittask } = taskStore()
  const { assigntaskField, loadassigntaskDetail } = assigntaskStore()
  const { company, setcompany, loadcompany } = companyStore()

  const history = useHistory()
  const [spinner, setspinner] = useState(true)
  const [addeditTask_popup, setaddeditTask_popup] = useState(false)
  const [addEditTaskLog_popup, setaddEditTaskLog_popup] = useState(false)
  const [addEditTaskTimeLog_popup, setaddEditTaskTimeLog_popup] = useState(false)
  const [timeSpent_popup, settimeSpent_popup] = useState(false)
  const [userlistForm_popup, setuserlistForm_popup] = useState(false)

  const [assignlogForm_popup, setassignlogForm_popup] = useState(false)


  const [up_arrow, setup_arrow] = useState(true)
  const isFirstRender = useRef(true)


  const [projecttask, setprojecttask] = useState('')
  const [seleted_projectId, setseleted_projectId] = useState('')
  const [seleted_taskId, setseleted_taskId] = useState('')
  const [seleted_taskName, setseleted_taskName] = useState('')
  const [seleted_timeSpent, setseleted_timeSpent] = useState('')

  const [users, setusers] = useState('')
  const [parent_child, setparent_child] = useState('')

  const [project_id, setproject_id] = useState('')

  const [project_ref, setproject_ref] = useState('')
  const [task_priority, settask_priority] = useState('')
  const [task, settask] = useState('')
  const [task_domain, settask_domain] = useState('')

  const [project_list, setproject_list] = useState([])

  const [editContainer, seteditContainer] = useState(false)

  const [editdata, seteditdata] = useState({});
  const [i_id, seti_id] = useState('');
  const [task_listItems, settask_listItems] = useState([
    {
      "project_ref": "",
      "priority": "",
      "task_type": "",
      "status": "",
      "domain": "",
      "title": "",
      "description": "",
      "remarks": "",
      "image_link": "",
      "linked_logs": "",
      "time_spent": "",
      "parent_child": "",
      "open_id": "",
      "open_type": "",
      "dependencies": "",
      "milestone": "",
      "progress": "",
      "start_date": "",
      "end_date": "",
    }
  ])

  const [edittask_popup, setedittask_popup] = useState(false);
  const [editrow, seteditrow] = useState(false);

  const [project_ref1, setproject_ref1] = useState({})
  const [priority, setpriority] = useState({})
  const [task_type, settask_type] = useState({})
  const [domain, setdomain] = useState({})
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [status, setstatus] = useState('')
  const [remarks, setremarks] = useState('')
  const [image_link, setimage_link] = useState('')
  const [linked_logs, setlinked_logs] = useState('')
  const [time_spent, settime_spent] = useState('')
  const [parent_child1, setparent_child1] = useState('')
  const [open_id, setopen_id] = useState('')
  const [open_type, setopen_type] = useState('')
  const [dependencies, setdependencies] = useState('')
  const [milestone, setmilestone] = useState(false)
  const [progress, setprogress] = useState('')
  const [start_date, setstart_date] = useState('')
  const [end_date, setend_date] = useState('')

  const [play_pause, setplay_pause] = useState(true)
  const [startorpausetask1, setstartorpausetask1] = useState('')



  useEffect(() => {
    if (!isFirstRender.current) {
      // console.log("NOT THE FIRST RENDER", isFirstRender.current)
      // mainTask()
    }
  }, [task, users, parent_child, task_domain, task_priority, project_ref, project_id])

  useEffect(() => {
    isFirstRender.current = false
    // console.log("FIRST RENDER", isFirstRender.current)
    props.setheader_options(screen_header_elements)

    if (!userDetail) {
      loaduserDetail()
    }
    setspinner(true)

    if (!Colour) {
      loadColour();
    }

    if (!assigntaskField) {
      loadassigntaskDetail();
    }
    if (!taskField) {
      loadTaskDetail()
    }

    if (!company) {
      loadcompany();
    }

    if (!taskField) {
      loadTaskDetail_withcallback((list: any) => {
        setproject_list(list.map(
          (element: any) =>
            ({ "key": element.id, "value": element.project_ref })
        ).reduce(
          (unique: any, item: any) => {
            // console.log(unique);
            const getifunique = (list: any, obj: any) => {
              let found = false
              list.map((obj1: any) => {
                if (obj1.value === obj.value)
                  found = true;
              })
              return found
            }
            let check = getifunique(unique, item)
            return check ? unique : [...unique, item]
          },
          [],
        ))
      });
    }

  }, [])


  const editrow_projecttask = (element: any) => {
    (taskField) && taskField.map((obj: any) => {
      // console.log(">>", obj)

      if (element.id === obj.id) {
        seteditdata(obj)
        seti_id(obj.id)
        setproject_ref1({ "value": obj.project_ref1 })
        setpriority({ "value": obj.priority })
        settask_type({ "value": obj.task_type })
        setstatus(obj.status)
        setdomain({ "value": obj.domain })
        settitle(obj.title)
        setdescription(obj.description)
        setremarks(obj.remarks)
        setlinked_logs(obj.linked_logs)
        setparent_child1(obj.parent_child1)
        setopen_type(obj.open_type)
        setdependencies(obj.dependencies)
        setmilestone(obj.milestone)
        setprogress(obj.progress)
        setstart_date(obj.start_date)
        setend_date(obj.end_date)
      }
    })
  }

  const getphotoimage = (obj: any) => {
    // console.log("ooooooo", obj);

    if (obj === null || obj?.length === 0)
      return null
    else
      return (
        <>
          <div className="assign_wrap">
            <img className='user_icon' src={(obj === null) ? defaultusericon : obj} />
          </div>
        </>
      )
  }

  const getAssistedby_photo = (obj1: any) => {
    if (obj1 === null || obj1.length === 0)
      return null
    else
      return obj1.map((obj: any) => {
        // console.log("ASISSTED BY:", obj.photo_url);
        return (
          <>
            <div className="assign_wrap">
              <img className='user_icon' src={(obj.photo_url === null) ? defaultusericon : obj.photo_url} />
            </div>
          </>)
      }
      )
  }

  const getClassname = (key: any) => {
    switch (key) {
      case 'Low':
        return 'textcolor_yellow'
      case 'Normal':
        return 'textcolor_blue'
      case 'High':
        return 'textcolor_orange'
      case 'Urgent':
        return 'textcolor_red'
      case 'Emergency':
        return 'textcolor_red textcolor_blinking'
      default:
        return ''
    }
  }

  const screen_header_elements = () => {
    return (
      <>
        <div
          className='screen_header_element'
          onClick={() => {
            setaddeditTask_popup(true)
          }}
        >
          <img className='header_icon' src={add} />
          <div>Add Task</div>
        </div>
      </>
    )
  }


  return (
    <>
      <div className='main'>
        {addeditTask_popup && (
          <AddEditTask
            setPopup={() => {
              setaddeditTask_popup(false)
            }}
          />
        )}

        {addEditTaskLog_popup && (
          <AddEditTaskLog
            setPopup={() => {
              setaddEditTaskLog_popup(false)
            }}
            taskid={seleted_taskId}
          />
        )}

        {addEditTaskTimeLog_popup && (
          <AddEditTaskTimeLog
            setPopup={() => {
              setaddEditTaskTimeLog_popup(false)
            }}
            taskid={seleted_taskId}
            startorpausetask={startorpausetask1}
          />
        )}

        {timeSpent_popup && (
          <TimeSpent
            setPopup={() => {
              settimeSpent_popup(false)
            }}
            taskName={seleted_taskName}
            taskId={seleted_taskId}
            timeSpent={seleted_timeSpent}
          />
        )}

        {userlistForm_popup && (
          <AddEditUserList
            setPopup={() => {
              setuserlistForm_popup(false)
            }}
            taskid={seleted_taskId}
          />
        )}

        {assignlogForm_popup && (
          <AssignLogForm
            setPopup={() => {
              setassignlogForm_popup(false)
            }}
            project_task={projecttask}
            projectid={seleted_projectId}
            taskid={seleted_taskId}
          />
        )}

        <div className='body' style={{ backgroundColor: Colour.primary }}>

          <div className="my_tasksTitle">
            My Tasks
          </div>

          <div>

            {(assigntaskField) && assigntaskField.map((element: any) => {
              console.log("++++===+++===+++ :", element);

              let assigned_by = element?.assign_log.assigned_by?.photo_url;
              let assigned_to = element?.assigned_to;
              let assisted_by = element?.assisted_by;

              return (
                <McCard
                  card_body={
                    <>
                      <div className="task_type_project">

                        <div className="task_title_domain">
                          <div
                            className='task_domain' style={{ color: colourObj.color_1 }}>
                            {element.domain + ':'}
                          </div>

                          <div className={getClassname(element.priority)}
                            onClick={() => {
                              let temp = (taskField) && taskField
                              let objIndex = (taskField) && taskField.findIndex(obj => obj.id == element.id)
                              temp[objIndex].assisted_by = 'blabla'
                              // let temp = listItems1
                              // temp.forEach((ele :any,index:any) => {
                              //   if(ele.id === element.id){
                              //      let x = ele
                              //      x.title = "skdfgad"
                              //      temp[index] = x
                              //   }
                              // });
                              settaskField(temp)
                              // setlistItems1({...listItems1, abc:"new value"});
                              //  setlistItems1(Object.assign({}, listItems1, {title: 'Updated Data'}))
                              // console.log("TESTEST!!: ", listItems1);

                              history.replace(
                                {
                                  pathname: `/TaskDetails/${getChatID("task", element.id)}`,
                                  state: element
                                }
                              )

                            }}
                          >
                            {element.title}
                          </div>

                        </div>

                        <div className="task_typeProject_wrap">
                          <div className='task_type' style={{ color: colourObj.color_1 }}>
                            {element.task_type}
                          </div>

                          <div className="task_project"
                            onClick={() => {
                              history.replace(
                                {
                                  pathname: `/TaskDetails/${getChatID("project", element.id)}`,
                                  state: element
                                }
                              )
                            }}
                          >
                            {element.assign_log.project_ref}
                          </div>
                        </div>

                      </div>

                      <div className="task_description_assignee">
                        <div className="task_description_timeSpent">

                          {element.description}

                          <>
                            {play_pause ?
                              <div
                                className='screen_header_element'
                                onClick={() => {
                                  setaddEditTaskTimeLog_popup(true)
                                  setseleted_taskId(element.id)
                                  setstartorpausetask1("true")
                                  setplay_pause(!play_pause)
                                }}
                              >
                                <img className='header_icon' src={play} />
                              </div>
                              :
                              <>
                                {seleted_taskId === element.id &&
                                  <div
                                    className='screen_header_element'
                                    onClick={() => {
                                      setaddEditTaskTimeLog_popup(true)
                                      setseleted_taskId(element.id)
                                      setstartorpausetask1("false")
                                      setplay_pause(!play_pause)
                                    }}
                                  >
                                    <img className='header_icon' src={pause} />
                                  </div>}
                              </>
                            }
                          </>

                          {element.time_spent !== undefined || null ?
                            <div className="task_timeSpent"
                              onClick={() => {
                                settimeSpent_popup(true)
                                setseleted_taskName(element.title)
                                setseleted_taskId(element.id)
                                setseleted_timeSpent(element.time_spent)
                              }}>
                              {element.time_spent}
                            </div>
                            :
                            <div>-</div>
                          }
                        </div>

                        <div className="task_assignees_wrap">
                          <div className="task_assignee">
                            Assigned by : {getphotoimage(assigned_by)}
                            {/* {getphotoimage(assigned_to)}
                            {getphotoimage(assisted_by)} */}
                          </div>

                          <img
                            onClick={() => {
                              setuserlistForm_popup(true)
                              setseleted_taskId(element.id)
                            }}
                            className='header_icon'
                            src={add}
                          />
                        </div>
                      </div>

                      <div className="table_edit_delete_main">
                        <div className='table_edit_delete'>
                          {editContainer ? null :
                            <>
                              <img onClick={() => {
                                // setuser_popup(true)
                                // editrow_user(element, index)
                              }}
                                className='table_icon' src={edit} />
                            </>
                          }
                        </div>
                      </div>
                    </>
                  }
                />
              )
            })
            }

          </div>


          {false ? (
            <>
              <div className='spinner_fullscreen_div'>
                <ProgressBar />
              </div>
            </>
          ) : (
            <>
              <div className="my_tasksTitle">
                Other Tasks
              </div>

              <form className="inputfield_main_container">
                <div className="mc_filter">
                  <div className='inputfield_sub_container'>
                    <McInput
                      type={'picker'}
                      name={'Project'}
                      id='task_project_data'
                      value={project_ref?.value}
                      onChange={(data: any) => {
                        setproject_ref(data)
                        loadTaskDetail_byvalues(
                          data.value,
                          task_domain.value ? task_domain.value : '',
                          task.value ? task.value : '',
                          task_priority.value ? task_priority.value : ''
                        )
                      }}
                      options={project_list}
                    />
                  </div>

                  <div className='inputfield_sub_container'>
                    <McInput
                      type={'picker'}
                      name={'Domain'}
                      id='task_domain_data'
                      value={task_domain?.value}
                      onChange={(data: any) => {
                        settask_domain(data)
                        loadTaskDetail_byvalues(
                          project_ref.value ? project_ref.value : '',
                          data.value,
                          task.value ? task.value : '',
                          task_priority.value ? task_priority.value : ''
                        )
                      }}
                      options={[
                        { key: '0', value: 'FRONTEND' },
                        { key: '1', value: 'BACKEND' },
                        { key: '2', value: 'UI' },
                        { key: '3', value: 'DEV_OPS' },
                      ]} />
                  </div>

                  <div className='inputfield_sub_container'>
                    <McInput
                      type={'picker'}
                      name={'Task Type'}
                      id='task_type_data'
                      // valid={ settask_picker_typevalid}
                      value={task?.value}
                      onChange={(data: any) => {
                        settask(data)
                        loadTaskDetail_byvalues(
                          project_ref.value ? project_ref.value : '',
                          task_domain.value ? task_domain.value : '',
                          data.value,
                          task_priority.value ? task_priority.value : ''
                        )
                      }}
                      options={[
                        { key: '0', value: 'FEATURE' },
                        { key: '1', value: 'TEST' },
                        { key: '2', value: 'BUG' },
                        { key: '3', value: 'UPDATE' },
                      ]} />
                  </div>

                  <div className='inputfield_sub_container'>
                    <McInput
                      type={'picker'}
                      name={'Priority'}
                      id='task_priority_data'
                      value={task_priority?.value}
                      onChange={(data: any) => {
                        settask_priority(data)
                        loadTaskDetail_byvalues(
                          project_ref.value ? project_ref.value : '',
                          task_domain.value ? task_domain.value : '',
                          task.value ? task.value : '',
                          data.value
                        )
                      }}
                      options={[
                        { key: '0', value: 'Low' },
                        { key: '1', value: 'Normal' },
                        { key: '0', value: 'High' },
                        { key: '0', value: 'Urgent' },
                        { key: '0', value: 'Emergency' },
                      ]} />
                  </div>

                  <button
                    className='taskfilter_button'
                    onClick={() => {
                      settask('')
                      settask_domain('')
                      settask_priority('')
                      setproject_ref('')
                      loadTaskDetail_byvalues("", "", "", "",)
                    }}
                  >
                    Reset
                  </button>
                </div>
              </form>

              <div>

                {(taskField) && taskField.map((element: any) => {
                  // console.log("++++===+++===+++ :", element);

                  let a = element.assign_log;
                  let assigned_to = a.map((obj: any) => {
                    return getphotoimage(obj?.user.photo_url)
                  })

                  return (
                    <McCard
                      card_body={
                        <>
                          <div className="task_type_project">

                            <div className="task_title_domain">
                              <div
                                className='task_domain' style={{ color: colourObj.color_1 }}>
                                {element.domain + ':'}
                              </div>

                              <div className={getClassname(element.priority)}
                                onClick={() => {
                                  let temp = (taskField) && taskField
                                  let objIndex = (taskField) && taskField.findIndex(obj => obj.id == element.id)
                                  temp[objIndex].assisted_by = 'blabla'
                                  // let temp = listItems1
                                  // temp.forEach((ele :any,index:any) => {
                                  //   if(ele.id === element.id){
                                  //      let x = ele
                                  //      x.title = "skdfgad"
                                  //      temp[index] = x
                                  //   }
                                  // });
                                  settaskField(temp)
                                  // setlistItems1({...listItems1, abc:"new value"});
                                  //  setlistItems1(Object.assign({}, listItems1, {title: 'Updated Data'}))
                                  // console.log("TESTEST!!: ", listItems1);

                                  history.replace(
                                    {
                                      pathname: `/TaskDetails/${getChatID("task", element.id)}`,
                                      state: element
                                    }
                                  )

                                }}
                              >
                                {element.title}
                              </div>

                            </div>

                            <div className="task_typeProject_wrap">
                              <div className='task_type' style={{ color: colourObj.color_1 }}>
                                {element.task_type}
                              </div>

                              <div className="task_project"
                                onClick={() => {
                                  history.replace(
                                    {
                                      pathname: `/TaskDetails/${getChatID("project", element.id)}`,
                                      state: element
                                    }
                                  )
                                }}
                              >
                                {element.project_ref}
                              </div>
                            </div>

                          </div>

                          <div className="task_description_assignee">
                            <div className="task_description_timeSpent">
                              <div
                                className='screen_header_element'
                                onClick={() => {
                                  setaddEditTaskTimeLog_popup(true)
                                  setseleted_taskId(element.id)
                                }}
                              >
                                <img className='header_icon' src={play} />

                                {element.description}
                              </div>

                              {element.time_spent !== undefined || null ?
                                <div className="task_timeSpent"
                                  onClick={() => {
                                    settimeSpent_popup(true)
                                    setseleted_taskName(element.title)
                                    setseleted_taskId(element.id)
                                    setseleted_timeSpent(element.time_spent)
                                  }}>
                                  {element.time_spent}
                                </div>
                                :
                                <div>-</div>
                              }
                            </div>

                            <div className="task_assignees_wrap">
                              <div className="task_assignee">
                                Assigned to :{assigned_to}

                                {/* {getphotoimage(assigned_by)}
                                {getphotoimage(assisted_by)} */}
                              </div>

                              <button
                                onClick={() => {
                                  console.log("++++===TASKTASK+++===+++ :", "TASK", element.id, element.project_id);

                                  setassignlogForm_popup(true)
                                  setprojecttask("TASK")
                                  setseleted_taskId(element.id)
                                  setseleted_projectId(element.project_id)
                                }}
                              >ASSIGN</button>

                            </div>
                          </div>

                          <div className="table_edit_delete_main">
                            <div className='table_edit_delete'>
                              <>
                                <img onClick={() => {
                                  console.log("element, indexelement, index,", element);
                                  editrow_projecttask(element)
                                  setedittask_popup(true)
                                }}
                                  className='table_icon' src={edit} />
                              </>
                            </div>
                          </div>

                        </>
                      }
                    />
                  )
                })
                }



                {edittask_popup &&
                  <Popup
                    title={editrow ? "Edit Game" : "Add New Game"}
                    popup_body={
                      <form className="inputfield_main_container" >
                        <div className="addedit_task_div_wrapper">
                          <div className="inputbox_divider">
                            <div className="side-by-input">

                              <div className="inputfield_sub_container">
                                <McInput
                                  type={"picker"}
                                  name={"PROJECT"}
                                  id="project_ref_data"
                                  required={true}
                                  value={project_ref1?.value}
                                  onChange={setproject_ref1}
                                  options={
                                    (company) && company.map((obj: any) => {
                                      return { "key": obj.id, "value": obj.company_title }
                                    })
                                  }
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  type={"picker"}
                                  name={"PRIORITY"}
                                  id="priority_data"
                                  required={true}
                                  value={priority?.value}
                                  onChange={setpriority}
                                  options={[
                                    { "key": "0", "value": "Low" },
                                    { "key": "1", "value": "Normal" },
                                    { "key": "2", "value": "High" },
                                    { "key": "3", "value": "Urgent" },
                                    { "key": "4", "value": "Emergency" },
                                  ]}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  type={"picker"}
                                  name={"TASK TYPE"}
                                  id="task_type_data"
                                  required={true}
                                  value={task_type?.value}
                                  onChange={settask_type}
                                  options={[
                                    { "key": "1", "value": "FEATURE" },
                                    { "key": "2", "value": "TEST" },
                                    { "key": "3", "value": "BUG" },
                                    { "key": "4", "value": "UPDATE" },
                                  ]}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"STATUS"}
                                  id="status_data"
                                  name={`data.status`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={status}
                                  onChange={setstatus}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  type={"picker"}
                                  name={"DOMAIN"}
                                  id="domain_data"
                                  required={true}
                                  value={domain?.value}
                                  onChange={setdomain}
                                  options={[
                                    { "key": "0", "value": "frontend" },
                                    { "key": "1", "value": "backend" },
                                    { "key": "0", "value": "UI" },
                                    { "key": "0", "value": "dev ops" }
                                  ]}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"TITLE"}
                                  id="title_data"
                                  name={`data.title`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={title}
                                  onChange={settitle}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"DESCRIPTION"}
                                  id="description_data"
                                  name={`data.description`}
                                  inputtype="Text"
                                  type="textarea"
                                  min_length="3"
                                  required={true}
                                  value={description}
                                  onChange={setdescription}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"REMARKS"}
                                  id="remarks_data"
                                  name={`data.remarks`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={remarks}
                                  onChange={setremarks}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"IMAGE"}
                                  id="image_link_data"
                                  name={`data.image_link`}
                                  inputtype="file"
                                  type="file"
                                  min_length="3"
                                  required={true}
                                  value={image_link}
                                  onChange={setimage_link}
                                />
                              </div>
                            </div>

                            <div className="side-by-input">
                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"LINKED LOGS"}
                                  id="linked_logs_data"
                                  name={`data.linked_logs`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={linked_logs}
                                  onChange={setlinked_logs}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"PARENT CHILD"}
                                  id="parent_child_data"
                                  name={`data.parent_child`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={parent_child1}
                                  onChange={setparent_child1}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"OPEN TYPE"}
                                  id="open_type_data"
                                  name={`data.open_type`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={open_type}
                                  onChange={setopen_type}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"DEPENDENCIES"}
                                  id="dependencies_data"
                                  name={`data.dependencies`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={dependencies}
                                  onChange={setdependencies}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"MILESTONE"}
                                  id="milestone_data"
                                  name={`data.milestone`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={milestone}
                                  onChange={setmilestone}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"PROGESS"}
                                  id="progress_data"
                                  name={`data.progress`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={progress}
                                  onChange={setprogress}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"START DATE"}
                                  id="start_date_data"
                                  name={`data.start_date`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={start_date}
                                  onChange={setstart_date}
                                />
                              </div>

                              <div className="inputfield_sub_container">
                                <McInput
                                  label={"END DATE"}
                                  id="end_date_data"
                                  name={`data.end_date`}
                                  inputtype="Text"
                                  type="text"
                                  min_length="3"
                                  required={true}
                                  value={end_date}
                                  onChange={setend_date}
                                />
                              </div>

                            </div>

                          </div>
                        </div>
                      </form >
                    }

                    confirmClick={() => {
                      let data = {
                        project_ref: project_ref1?.key,
                        priority: priority?.value,
                        task_type: task_type?.value,
                        status: String(document.getElementById("status_data").value),
                        domain: domain?.value,
                        title: String(document.getElementById("title_data").value),
                        description: String(document.getElementById("description_data").value),
                        remarks: String(document.getElementById("remarks_data").value),
                        image_link: String(document.getElementById("image_link_data").value),
                        linked_logs: String(document.getElementById("linked_logs_data").value),
                        parent_child: String(document.getElementById("parent_child_data").value),
                        open_type: String(document.getElementById("open_type_data").value),
                        dependencies: String(document.getElementById("dependencies_data").value),
                        milestone: String(document.getElementById("milestone_data").value),
                        progress: String(document.getElementById("progress_data").value),
                        start_date: String(document.getElementById("start_date_data").value),
                        end_date: String(document.getElementById("end_date_data").value)
                      }

                      edittask(i_id, data)
                      seteditrow(false)
                      setedittask_popup(false)
                    }}
                    cancelClick={() => {
                      setedittask_popup(false)
                      seteditrow(false)
                    }}
                  />
                }

              </div>
            </>
          )}

        </div>

        <Footer />
      </div>
    </>
  )
}

export default TaskList
function data(
  arg0: (data: any, errorresponse: any) => Promise<void>,
  auth: any,
  data: any
) {
  throw new Error('Function not implemented.')
}
