import { ProgressBar } from 'components/Common/Spinner'
import AddEditProject from 'components/Forms/AddEditProject'
import React, { useEffect, useState } from 'react'
import './style.css'
import * as add from '../../assets/add.svg'
import * as play from 'assets/play.svg'
import { useAuth } from 'store/authStore';
import Card from 'components/Common/Card'
import { getMainTask, getProject, userListing } from 'src/utils/api'


const ProjectScreen = (props: any) => {
  const { auth } = useAuth();
  const [unique_branch, setunique_branch] = useState(false)
  const [unique_project_type, setunique_project_type] = useState(false)
  const [unique_title, setunique_title] = useState(false)
  const [unique_description, setunique_description] = useState(false)
  const [unique_file_links, setunique_file_links] = useState(false)
  const [unique_linked_tasks, setunique_linked_tasks] = useState(false)
  const [unique_status, setunique_status] = useState(false)
  const [unique_start_date, setunique_start_date] = useState(false)
  const [unique_end_date, setunique_end_date] = useState(false)

  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(true)

  const [listItems, setlistItems] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [popup1, setpopup1] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [seleted_taskid, setseleted_taskid] = useState('')

  const [task, settask] = useState('')
  const [user_list, setuser_list] = useState('')
  const [users, setusers] = useState('all')

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

    getProject((data: any, errorresponse: any) => {

      if (data.status === 200) {
        setspinner(false)
        console.log('ProjectTasks: ', data.data.results);
        setlistItems2(data.data.results)
        // console.log("<><><><><>", data.data);
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      };
    }, auth, users)
  }, [])

  const renderHeader1 = () => {
    let headerElement = ['Company Name', 'Branch Name', 'First Name', 'Last Name', 'user type']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody1 = (element: any) => {

    return (
      <>
        <tr key={element.id} >
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
    let headerElement = ['title', 'Task Type', 'priority', 'domain', 'assignee', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody2 = (element: any) => {
    return (
      <tr key={element.id}>
        <td onClick={() => {
          setpopup2(true)
          setseleted_taskid(element.id)
        }}>{element.title}</td>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.domain}</td>
        <td>{element.assigned_to}</td>
        <td>{element.status}</td>
      </tr >
    )
  }

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Project</div>
        </div>
      </>
    )
  }


  return (

    <div className="main">

      {popup &&
        <AddEditProject
          setPopup={() => {
            setpopup(false)
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
                      </div>
                    </div>
                  </div>
                )
              })
            }
          />
        }
      </div>

    </div >

  );
}
export default ProjectScreen