import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import 'components/app.css'
import { ProgressBar } from 'components/Common/Spinner'

import AddEditTask from 'components/Forms/AddEditTask'
import * as add from 'assets/add.svg'
import AddEditTaskLog from 'components/Forms/AddEditTaskLog'
import * as play from 'assets/play.svg'
import * as defaultusericon from '../../assets/user_icon.svg'
import AddEditTaskTimeLog from 'components/Forms/AddEditTaskTimeLog'
import { useAuth } from 'store/authStore'
import { useuserDetails } from 'store/userDetailsStore'
import McInput from 'components/Common/McInput'
import * as up_down_arrow from 'assets/up_down.svg'
import Footer from '../Common/Footer'
import TimeSpent from 'components/TimeSpent'
import UpDownArrow from 'components/Common/updownArrow'
import { ColourObject } from 'store/ColourStore'
import { useForm } from 'react-hook-form';
import { getChatID } from 'utils/GlobalFunctions'
import AddEditUserList from 'components/Forms/UserListForm'
import McCard from 'components/Common/McCard'
import { taskStore } from '../../store/taskStore';

const TaskList = (props: any) => {
  const { auth } = useAuth()
  const { userDetail, loaduserDetail } = useuserDetails()
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { taskField, settaskField, loadTaskDetail, loadTaskDetail_byvalues, loadTaskDetail_withcallback } = taskStore()

  const history = useHistory()
  const [spinner, setspinner] = useState(true)
  const [addeditTask_popup, setaddeditTask_popup] = useState(false)
  const [addEditTaskLog_popup, setaddEditTaskLog_popup] = useState(false)
  const [addEditTaskTimeLog_popup, setaddEditTaskTimeLog_popup] = useState(false)
  const [timeSpent_popup, settimeSpent_popup] = useState(false)
  const [userlistForm_popup, setuserlistForm_popup] = useState(false)
  const [up_arrow, setup_arrow] = useState(true)
  const isFirstRender = useRef(true)

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

    if (!taskField) {
      loadTaskDetail_withcallback((list: any) => {
        setproject_list(list.map(
          (element: any) =>
            ({ "key": element.id, "value": element.project_ref })
        ).reduce(
          (unique: any, item: any) => {
            console.log(unique);
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



  const getphotoimage = (obj: any) => {
    if (obj === null || obj.length === 0)
      return null
    else
      return (
        <>
          <div className="assign_wrap">
            <img className='user_icon' src={(obj[0]?.photo_url === null) ? defaultusericon : obj[0]?.photo_url} />
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

  // const renderHeader1 = () => {
  //   let headerElement = [
  //     '',
  //     'Project',
  //     'domain',
  //     'Task Type',
  //     'priority',
  //     'status',
  //     'Title',
  //     'description',
  //     'image_link',
  //     'assignee by',
  //     'assignee to',
  //     'assisted by',
  //     'Time Spent',
  //     'track',
  //   ]
  //   return headerElement.map((key, index) => {
  //     return (
  //       <th key={index}>
  //         <div className={"title_wrapper"} >
  //           {key.toUpperCase()}
  //           <div className={"orderby_arrow"}>
  //             <UpDownArrow onexpand={() => { }} />
  //           </div>
  //         </div>
  //       </th>
  //     )
  //   })
  // }

  // const renderBody1 = (element: any) => {
  //   let assigned_by = element?.assigned_by;
  //   let assigned_to = element?.assigned_to;
  //   let assisted_by = element?.assisted_by;

  //   return (
  //     <>
  //       <tr key={element.id} className={getClassname(element.priority)}>
  //         <td>
  //           {element.child !== undefined && element.child.length > 0 && (
  //             <UpDownArrow
  //               onexpand={() => {
  //                 setup_arrow(!up_arrow)
  //                 let temp = listItems1
  //                 let objIndex = listItems1.findIndex(
  //                   obj => obj.id == element.id
  //                 )
  //                 {
  //                   element.assisted_by === 'false'
  //                     ? (temp[objIndex].assisted_by = 'true')
  //                     : (temp[objIndex].assisted_by = 'false')
  //                 }
  //                 setlistItems1(temp)
  //               }}
  //             />
  //           )}
  //         </td>
  //         <td>{element.project_ref_id}</td>
  //         <td>{element.domain}</td>
  //         <td>{element.task_type}</td>
  //         <td>{element.priority}</td>
  //         <td>{element.status}</td>
  //         <td
  //           onClick={() => {
  //             let temp = listItems1
  //             let objIndex = listItems1.findIndex(obj => obj.id == element.id)
  //             temp[objIndex].assisted_by = 'blabla'
  //             // let temp = listItems1
  //             // temp.forEach((ele :any,index:any) => {
  //             //   if(ele.id === element.id){
  //             //      let x = ele
  //             //      x.title = "skdfgad"
  //             //      temp[index] = x
  //             //   }
  //             // });
  //             setlistItems1(temp)
  //             // setlistItems1({...listItems1, abc:"new value"});
  //             //  setlistItems1(Object.assign({}, listItems1, {title: 'Updated Data'}))
  //             // console.log("TESTEST!!: ", listItems1);

  //             history.replace(
  //               {
  //                 pathname: `/TaskDetails/${getChatID("task", element.id)}`,
  //                 state: element
  //               }
  //             )

  //           }}
  //         >
  //           {element.title}
  //         </td>
  //         <td>{element.description}</td>
  //         <td>{element.image_link}</td>
  //         <td>
  //           <div>{getphotoimage(assigned_by)}</div>
  //         </td>

  //         <td className="isassigned_to">
  //           <img
  //             onClick={() => {
  //               setuserlistForm_popup(true)
  //               setseleted_taskId(element.id)
  //             }}
  //             className='header_icon'
  //             src={add}
  //           />
  //           <div>{getphotoimage(assigned_to)}</div>
  //         </td>

  //         <td>
  //           <div>{getAssistedby_photo(assisted_by)}</div>
  //         </td>

  //         {element.time_spent !== undefined || null ?
  //           <td onClick={() => {
  //             settimeSpent_popup(true)
  //             setseleted_taskName(element.title)
  //             setseleted_taskId(element.id)
  //             setseleted_timeSpent(element.time_spent)
  //           }}>
  //             {element.time_spent}
  //           </td>
  //           :
  //           <td>-</td>
  //         }
  //         <td>
  //           <div
  //             className='screen_header_element'
  //             onClick={() => {
  //               setaddEditTaskTimeLog_popup(true)
  //               setseleted_taskId(element.id)
  //             }}
  //           >
  //             <img className='header_icon' src={play} />
  //           </div>
  //         </td>
  //       </tr>

  //       {element.assisted_by === 'true' && (
  //         <tr className={getClassname(element.priority)}
  //           onClick={() => {
  //             history.replace(
  //               {
  //                 pathname: `/TaskDetails/${getChatID("task", element.id)}`,
  //                 state: element
  //               }
  //             )
  //           }}
  //         >
  //           {element.child?.map((element: any) => {
  //             return (
  //               <>
  //                 <td key={element.id}>
  //                   {element.child !== undefined && element.child.length > 0 && (
  //                     <img
  //                       className={
  //                         element.assisted_by === 'true'
  //                           ? 'open_close_arrow_icon'
  //                           : 'open_close_arrow_icon rotate180'
  //                       }
  //                       src={up_down_arrow}
  //                       onClick={() => {
  //                         setup_arrow(!up_arrow)
  //                       }}
  //                     />
  //                   )}
  //                 </td>
  //                 <td>{element.project_ref_id}</td>
  //                 <td>{element.domain}</td>
  //                 <td>{element.task_type}</td>
  //                 <td>{element.priority}</td>
  //                 <td>{element.status}</td>
  //                 <td>{element.title}</td>
  //                 <td>{element.description}</td>
  //                 <td>{element.image_link}</td>
  //                 <td>
  //                   <img
  //                     onClick={() => {
  //                       setuserlistForm_popup(true)
  //                       setseleted_taskId(element.id)
  //                     }}
  //                     className='header_icon'
  //                     src={add}
  //                   />
  //                   {element.assigned_to}

  //                 </td>
  //                 <td>
  //                   {element.time_spent}
  //                   <button
  //                     onClick={() => {
  //                       settimeSpent_popup(true)
  //                       setseleted_taskName(element.title)
  //                       setseleted_taskId(element.id)
  //                     }}
  //                   >
  //                     Time
  //                   </button>
  //                 </td>
  //                 <td>
  //                   <div
  //                     className='screen_header_element'
  //                     onClick={() => {
  //                       setaddEditTaskTimeLog_popup(true)
  //                       setseleted_taskId(element.id)
  //                     }}
  //                   >
  //                     <img className='header_icon' src={play} />
  //                   </div>
  //                 </td>
  //               </>
  //             )
  //           })}
  //         </tr>
  //       )}
  //     </>
  //   )
  // }

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




  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data);
  };
  // console.log(errors);

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
            startorpausetask={true}
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

        <div className='body' style={{ backgroundColor: Colour.primary }}>
          <div className="my_tasksTitle">
            My Tasks
          </div>

          {false ? (
            <>
              <div className='spinner_fullscreen_div'>
                <ProgressBar />
              </div>
            </>
          ) : (
            <>
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

              {/* <Card
                card_body={
                  <div className='internal_table' style={{ color: colourObj.color_1 }}>
                    <table id='internal_table'>
                      <thead>
                        <tr>{renderHeader1()}</tr>
                      </thead>
                      <tbody>{listItems1.map(renderBody1)}</tbody>
                    </table>
                  </div>
                }
              />

              <Card
                card_body={
                  <div className='internal_table' style={{ color: colourObj.color_1 }}>
                    <table id='internal_table'>
                      <thead>
                        <tr>{renderHeader1()}</tr>
                      </thead>
                      <tbody>{listItems2.map(renderBody1)}</tbody>
                    </table>
                  </div>
                }
              /> */}

              <div >
                {(taskField) && taskField.map((element: any) => {
                  let assigned_by = element?.assigned_by;
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
                                {getphotoimage(assigned_by)}
                                {getphotoimage(assigned_to)}
                                {getphotoimage(assisted_by)}
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

                        </>
                      }
                    />
                  )
                })
                }

                {(taskField) && taskField.map((element: any) => {

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

                        </>
                      }
                    />
                  )
                })
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
