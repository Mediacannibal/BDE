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
import * as edit from '../../assets/edit.png'
import AddEditUserList from '../Forms/UserListForm';
import { ColourObject } from 'store/ColourStore'
import UpDownArrow from 'components/Common/updownArrow';
import { getChatID } from 'utils/GlobalFunctions'
import AppGantt from 'components/ChatProcess/AppGantt';
import { ganttChartDetails } from 'store/isGanttChart';
import { taskStore } from 'store/taskStore';
import McInput from 'components/Common/McInput';
import Popup from 'components/Common/Popup';
import { companyStore } from 'store/companyStore';


const ProjectScreen = (props: any) => {
  const { auth } = useAuth();
  const { taskField, edittask, loadTaskDetail } = taskStore()
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { isGantt, loadGanttDetail } = ganttChartDetails()
  const { company, setcompany, loadcompany } = companyStore()

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [listItems, setlistItems] = useState([])

  const [popup1, setpopup1] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [seleted_taskid, setseleted_taskid] = useState('')
  const [seleted_projectName, setseleted_projectName] = useState('')
  const [seleted_projectTaskType, setseleted_projectTaskType] = useState('')

  const [ganttChart, setganttChart] = useState(false)
  const [pro_Tasks, setpro_Tasks] = useState([])
  const [editContainer, seteditContainer] = useState(false)


  const [project_taskTables, setproject_taskTables] = useState(true)

  const [users, setusers] = useState('')

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

  const [project_ref, setproject_ref] = useState({})
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
  const [parent_child, setparent_child] = useState('')
  const [open_id, setopen_id] = useState('')
  const [open_type, setopen_type] = useState('')
  const [dependencies, setdependencies] = useState('')
  const [milestone, setmilestone] = useState(false)
  const [progress, setprogress] = useState('')
  const [start_date, setstart_date] = useState('')
  const [end_date, setend_date] = useState('')

  useEffect(() => {
    props.setheader_options(screen_header_elements)

    setspinner(true)

    if (!Colour) {
      loadColour();
    }

    if (!company) {
      loadcompany();
    }

    if (!isGantt) {
      loadGanttDetail()
    }

    if (!taskField) {
      loadTaskDetail()
    }

    CommonAPi(
      {
        path: `tasks/project/?user=${users}`,
        method: "get",
        auth: auth ? auth : false,
      },
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Project Tasks: ", data.data.results)
          setlistItems(data.data.results)
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

  const editrow_projecttask = (element: any, ind: any) => {
    (taskField) && taskField.map((obj: any, index: any) => {
      // console.log(">>", obj)

      if (element.id === obj.id) {
        seteditdata(obj)
        seti_id(obj.id)
        setproject_ref({ "value": obj.project_ref })
        setpriority({ "value": obj.priority })
        settask_type({ "value": obj.task_type })
        setstatus(obj.status)
        setdomain({ "value": obj.domain })
        settitle(obj.title)
        setdescription(obj.description)
        setremarks(obj.remarks)
        setlinked_logs(obj.linked_logs)
        setparent_child(obj.parent_child)
        setopen_type(obj.open_type)
        setdependencies(obj.dependencies)
        setmilestone(obj.milestone)
        setprogress(obj.progress)
        setstart_date(obj.start_date)
        setend_date(obj.end_date)
      }
    })
  }

  const renderHeader = () => {
    let headerElement = ['domain', 'Task Type', 'priority', 'status', 'title', 'assignee']

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

  const renderBody = (element: any, index: any) => {
    return (
      <>
        <tr key={element.id}
          className={getClassname(element.priority)}
          onClick={() => {
            // setpopup2(true)
            setseleted_taskid(element.id)
            history.replace(
              {
                pathname: `/TaskDetails/${getChatID("project", element.id)}`,
                state: element
              }
            )
          }}>
          <td>{element.domain}</td>
          <td>{element.task_type}</td>
          <td>{element.priority}</td>
          <td>{element.status}</td>
          <td>{element.title}</td>
          <td>{element.assigned_to}</td>

        </tr >
        <div className="table_edit_delete_main">
          <div className='table_edit_delete'>
            {editContainer ? null :
              <>
                <img onClick={() => {
                  // console.log("element, indexelement, index,", element, index);
                  editrow_projecttask(element, index)
                  setedittask_popup(true)
                }}
                  className='table_icon' src={edit} />
              </>
            }
          </div>
        </div>
      </>
    )
  }

  const Project_taskTable = (project_data: any) => {
    // console.log("project_data: ", project_data.project_data.ProjectTasks);
    return (
      <div className="project_tables">
        <div className="internal_table" style={{ color: colourObj.color_1 }}>


          <div className="project_table_icons">
            <div className="project_subtitle" style={{ color: colourObj.color_1 }}>Active Tasks:</div>

            <div className="project_task_options">

              <div className="visibility_toggle" onClick={() => {
                history.replace('/TaskList');
              }}>
                <img className='header_icon' src={tasklist} />
                <div className="visibility_container">
                  <p className="label" style={{ color: colourObj.color_1 }}>Task History</p>
                </div>
              </div>

              <div className="visibility_toggle" onClick={() => {
                setpopup2(true);
                setseleted_projectName(project_data.project_data.title);
              }}>
                <img className='header_icon' src={add} />
                <div className="visibility_container">
                  <p className="label" style={{ color: colourObj.color_1 }}>Add Tasks</p>
                </div>
              </div>

              <div className="visibility_toggle" onClick={() => {
                setseleted_projectName(project_data.project_data.title);
                setseleted_projectTaskType("FEATURE");
              }}>
                <img className='header_icon' src={tested} />
                <div className="visibility_container">
                  <p className="label" style={{ color: colourObj.color_1 }}> Request Feature</p>
                </div>
              </div>

              <div className="visibility_toggle" onClick={() => {
                setseleted_projectName(project_data.project_data.title);
                setseleted_projectTaskType("BUG");
              }}>
                <img className='header_icon' src={bug} />
                <div className="visibility_container">
                  <p className="label" style={{ color: colourObj.color_1 }}>Report Bug</p>
                </div>
              </div>

            </div>
          </div>


          <table id='internal_table' style={{ color: colourObj.color_1 }}>
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
              {project_data.project_data.ProjectTasks.map(renderBody)}
            </tbody>
          </table>
        </div>
      </div>
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
          <>
            <Card
              classname="fullwidth"
              card_title="Branch: "
              card_body={(isGantt) && isGantt.map((element: any, key: any) => {
                // console.log("isGantt:::::::::", element);
                return (
                  <div className="project_wrapper">

                    <div className="project_details">

                      <div className="project_left_container">
                        <img className='project_image' src={add} />
                      </div>

                      <div className="project_center_container">
                        <div className="project_title" style={{ color: colourObj.color_1 }}
                          onClick={() => {
                            history.replace(
                              {
                                pathname: `/TaskDetails/${getChatID("project", element.id)}`,
                                state: element
                              }
                            );
                          }}>
                          {element.title + ": " + project_Type(element)}
                        </div>
                        <div className="project_description" style={{ color: colourObj.color_1 }}>
                          {element.description}
                        </div>
                      </div>

                      <div className="project_right_container">
                        <div className="project_right_subcontainer">
                          <div className="project_stats visibility_toggle" style={{ color: colourObj.color_1 }}>Status: {project_Status(element)}
                            <div className="visibility_container right0">
                              {element.start_date !== null && <div className="label right0" style={{ color: colourObj.color_1 }}>Started: {element.start_date}</div>}
                              {element.end_date !== null && <div className="label right0" style={{ color: colourObj.color_1 }}>Completed: {element.end_date}</div>}
                            </div>
                          </div>

                          <div className="project_right_subcontainer">
                            <div className="project_participants_container">
                              <div className="project_participants_subcontainer">
                                <div className="project_stats" style={{ color: colourObj.color_1 }}>Participants:</div>
                                <div className="project_user_options">
                                  <div className="visibility_toggle" onClick={() => {
                                    setpopup3(true);
                                    setseleted_projectName(element.title);
                                    setseleted_projectTaskType("FEATURE");
                                  }}>
                                    <img className='header_icon' src={team} />
                                    <div className="visibility_container">
                                      <p className="label" style={{ color: colourObj.color_1 }}>Add User</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {element.ProjectProfiles.map((element: any) => (
                                <div key={element.id} className="visibility_toggle">
                                  <div className="project_stats left0" style={{ color: colourObj.color_1 }}>{element.user_type + ": " + element.firstname + " " + element.lastname}</div>
                                  <div className="visibility_container">
                                    <div className="label" style={{ color: colourObj.color_1 }}>
                                      {element.company_name + ": " + element.branch_name}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>

                    {ganttChart &&
                      <AppGantt project_data={element} />
                    }

                    {project_taskTables &&
                      <Project_taskTable project_data={element} />
                    }

                    <button className="chart_button"
                      onClick={() => {
                        setganttChart(!ganttChart)
                        setproject_taskTables(!project_taskTables)
                      }}>{project_taskTables === true ? 'Chart' : 'Table'}
                    </button>

                  </div>
                );
              })}
            />
          </>
        }
      </div>
      <Footer />


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
                        value={project_ref?.value}
                        onChange={setproject_ref}
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
                        value={parent_child}
                        onChange={setparent_child}
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
            settask_listItems(task_listItems.map((obj) => {
              console.log("object===", obj.id, editdata.id);

              const getupdatedobj = () => {
                let a = obj
                a.project_ref = project_ref?.key;
                a.priority = priority?.value;
                a.task_type = task_type?.value;
                a.status = String(document.getElementById("status_data").value);
                a.domain = domain?.value;
                a.title = String(document.getElementById("title_data").value);
                a.description = String(document.getElementById("description_data").value);
                a.remarks = String(document.getElementById("remarks_data").value);
                a.image_link = String(document.getElementById("image_link_data").value);
                a.linked_logs = String(document.getElementById("linked_logs_data").value);
                a.parent_child = String(document.getElementById("parent_child_data").value);
                a.open_type = String(document.getElementById("open_type_data").value);
                a.dependencies = String(document.getElementById("dependencies_data").value);
                a.milestone = String(document.getElementById("milestone_data").value);
                a.progress = String(document.getElementById("progress_data").value);
                a.start_date = String(document.getElementById("start_date_data").value);
                a.end_date = String(document.getElementById("end_date_data").value);
                return a;
              }
              return obj.id == editdata.id ? getupdatedobj() : obj;
            }))

            let data = {
              project_ref: project_ref?.key,
              priority: priority?.value,
              task_type: task_type?.value,
              status : String(document.getElementById("status_data").value),
              domain: domain?.value,
              title: String(document.getElementById("title_data").value),
              description: String(document.getElementById("description_data").value),
              remarks: String(document.getElementById("remarks_data").value),
              image_link: String(document.getElementById("image_link_data").value),
              linked_logs : String(document.getElementById("linked_logs_data").value),
              parent_child : String(document.getElementById("parent_child_data").value),
              open_type : String(document.getElementById("open_type_data").value),
              dependencies : String(document.getElementById("dependencies_data").value),
              milestone : String(document.getElementById("milestone_data").value),
              progress : String(document.getElementById("progress_data").value),
              start_date : String(document.getElementById("start_date_data").value),
              end_date : String(document.getElementById("end_date_data").value)
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

    </div >

  );
}
export default ProjectScreen;