import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import { ProgressBar } from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';
import { getMainTask, getProject } from 'utils/api';

import { useAuth } from 'store/authStore';
import Card from 'components/Common/Card';
import Footer from '../Common/Footer';

const HomeScreen = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();
  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(true)
  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])
  const [parent_child, setparent_child] = useState('')

  const [task, settask] = useState('')
  const [user_list, setuser_list] = useState('')
  const [users, setusers] = useState('all')


  useEffect(() => {
    props.setheader_options(screen_header_elements)

    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log("Project List", data.data)
        setlistItems1(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, users)

    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>>>>>>", data.data)
        setlistItems2(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, task, user_list, parent_child)

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
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody1 = (element: any) => {
    return (
      <tr>
        <td>{element.title}</td>
      </tr>
    )
  }

  const renderHeader2 = () => {
    let headerElement = ['Task Type', 'priority', 'status', 'title', 'assignee']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody2 = (element: any) => {
    return (
      <tr className={getClassname(element.priority)}>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.status}</td>
        <td>{element.title}</td>
        <td>{element.assigned_to}</td>
      </tr>
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
                <div className="internal_table">
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
                <div className="internal_table">
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
                  <div className="card_details">1,000 Tasks Completed</div>
                  <div className="card_details">500 Features Added</div>
                  <div className="card_details">50,000 Bugs Squashed</div>
                </>
              }
            />
            <Card
              card_title="Analystics"
              card_body={
                <>
                  <div className="card_details">Visitors 10,000</div>
                  <div className="card_details">Countries</div>
                  <div className="card_details">Devices</div>
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

export default HomeScreen
function gtProject(arg0: (data: any, errorresponse: any) => Promise<void>) {
  throw new Error('Function not implemented.');
}

