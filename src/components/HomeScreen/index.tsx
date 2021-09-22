import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import * as edit from '../../assets/edit.png'
import { ProgressBar } from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';
import Card from 'components/Common/Card';
import Footer from '../Common/Footer';
import ReactGA from 'react-ga';
import { ColourObject } from 'store/ColourStore';
import UpDownArrow from 'components/Common/updownArrow';
import { getChatID } from 'utils/GlobalFunctions';
import * as defaultusericon from '../../assets/user_icon.svg'
import { projectStore } from '../../store/projectStore';
import { taskStore } from '../../store/taskStore';
import { assignprojectStore } from 'store/assignprojectStore';
import { assigntaskStore } from 'store/assigntaskStore';

const HomeScreen = (props: any) => {
  // STORE
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { projectField, setprojectField, loadProjectbyUserID, loadProjectsDetail } = projectStore()
  const { taskField, settaskField, loadTaskDetail } = taskStore()
  const { assignprojectField, loadassignprojectDetail } = assignprojectStore()
  const { assigntaskField, loadassigntaskDetail } = assigntaskStore()
  // *******

  const history = useHistory();

  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(false)
  const [editContainer, seteditContainer] = useState(false)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    props.setheader_options(screen_header_elements)

    if (!Colour) {
      loadColour();
    }

    if (!projectField) {
      // loadProjectbyUserID();
      loadProjectsDetail();
    }

    if (!taskField) {
      loadTaskDetail();
    }

    if (!assignprojectField) {
      loadassignprojectDetail();
    }

    if (!assigntaskField) {
      loadassigntaskDetail();
    }

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
    // console.log("home <><><><> ?? ]]] ", element);

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
        <td>{getphotoimage(element.assign_log.assigned_by?.photo_url)}</td>
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
            <img className='user_icon' src={(obj === null) ? defaultusericon : obj} />
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
                        (assignprojectField) && assignprojectField.map(renderBody1)
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
                      {(assigntaskField) && assigntaskField.map(renderBody2)}
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

