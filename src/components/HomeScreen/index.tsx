import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import { ProgressBar } from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';
import { CommonAPi, getMainTask } from 'utils/api';

import { useAuth } from 'store/authStore';
import Card from 'components/Common/Card';
import Footer from '../Common/Footer';
import ReactGA from 'react-ga';
import { ColourObject } from 'store/ColourStore';
import McInput from 'components/Common/McInput';
import * as eye from '../../assets/eye-visibility.svg'
import * as eye_invisible from '../../assets/eye-invisible.svg'
import UpDownArrow from 'components/Common/updownArrow';
import { getChatID } from 'utils/GlobalFunctions';
import * as defaultusericon from '../../assets/user_icon.svg'

const HomeScreen = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();
  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(true)
  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [task, settask] = useState('')
  const [user_list, setuser_list] = useState('')
  const [parent_child, setparent_child] = useState('')
  const [project, setproject] = useState('')
  const [task_priority, settask_priority] = useState('')
  const [task_domain, settask_domain] = useState('')
  const [users, setusers] = useState('')

  const [isselectslot, setisselectslot] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [password, setpassword] = useState('')

  const [passwordShown, setpasswordShown] = useState(false);

  const [slotvalid, setSlotvalid] = useState(false)
  const [titlevalid, setTitlevalid] = useState(false)
  const [descriptionvaild, setDescriptionvaild] = useState(false)
  const [passwordvalid, setpasswordvalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)


  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    props.setheader_options(screen_header_elements)

    if (!Colour) {
      loadColour();
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
          console.log("Project Tasks: ", data.data.results)
          setlistItems1(data.data.results)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })

    getMainTask(
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Task Assigned: ", data.data.results.Assigned)
          // console.log("Task Open: ", data.data.results.Open)

          setlistItems2(data.data.results.Assigned)

        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data))
          console.log('error ' + JSON.stringify(errorresponse))
        }
      },
      auth,
      // task,
      // users,
      // parent_child,
      // task_domain,
      // task_priority,
      // project_ref,
      // project_id
    )
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

  const renderHeader1 = () => {
    let headerElement = ['Title']

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

  const renderBody1 = (element: any) => {
    return (
      <tr key={element.id}
        onClick={() => {
          history.replace(
            {
              pathname: `/TaskDetails/${getChatID("project", element.id)}`,
              state: element
            }
          )
        }}
      >
        <td>{element.title}</td>
      </tr>
    )
  }

  const renderHeader2 = () => {
    let headerElement = ['Task Type', 'priority', 'status', 'title', 'assignee']

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

  const renderBody2 = (element: any) => {
    let assigned_to = element?.assigned_to;

    return (
      <tr key={element.id} className={getClassname(element.priority)}
        onClick={() => {
          history.replace(
            {
              pathname: `/TaskDetails/${getChatID("task", element.id)}`,
              state: element
            }
          )
        }}
      >
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.status}</td>
        <td>{element.title}</td>
        <td>{getphotoimage(assigned_to)}</td>
      </tr>
    )
  }

  const getphotoimage = (obj: any) => {
    if (obj === null || obj.length === 0)
      return null
    else
      return (
        <>
          <div className="assign_wrap">
            <img className='user_icon' src={(obj[0].photo_url === null) ? defaultusericon : obj[0].photo_url} />
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
          <>
            <Card
              card_title="Active Projects"
              card_body={
                <div className="internal_table" style={{ color: colourObj.color_1 }}>
                  <table id='internal_table'>
                    <thead>
                      <tr>{renderHeader1()}</tr>
                    </thead>
                    <tbody>
                      {
                        listItems1.map(renderBody1)
                      }
                    </tbody>
                  </table>
                </div>
              }
            />
            <Card
              card_title="Pending Tasks"
              card_body={
                <div className="internal_table" style={{ color: colourObj.color_1 }}>
                  <table id='internal_table'>
                    <thead>
                      <tr>{renderHeader2()}</tr>
                    </thead>
                    <tbody>
                      {listItems2.map(renderBody2)}
                    </tbody>
                  </table>
                </div>
              }
            />
            <Card
              card_title="Stats"
              card_body={
                <>
                  <div className="card_details" style={{ color: colourObj.color_1 }}>1,000 Tasks Completed</div>
                  <div className="card_details" style={{ color: colourObj.color_1 }}>500 Features Added</div>
                  <div className="card_details" style={{ color: colourObj.color_1 }}>50,000 Bugs Squashed</div>
                </>
              }
            />
            <Card
              card_title="Analystics"
              card_body={
                <>
                  <div className="card_details" style={{ color: colourObj.color_1 }}>Visitors 10,000</div>
                  <div className="card_details" style={{ color: colourObj.color_1 }}>Countries</div>
                  <div className="card_details" style={{ color: colourObj.color_1 }}>Devices</div>
                </>
              }
            />
          </>
        }
      </div>
      <Footer />
    </div >
  );
}

export default HomeScreen;
function gtProject(arg0: (data: any, errorresponse: any) => Promise<void>) {
  throw new Error('Function not implemented.');
}

