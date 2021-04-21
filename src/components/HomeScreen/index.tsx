import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import Spinner from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';
import { getMainTask, getProject } from 'utils/api';

import * as up_down_arrow from '../../assets/up_down.svg'


const HomeScreen = (props: any) => {

  const history = useHistory();

  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(false)

  const [listItems1, setlistItems1] = useState([
    {
      "zero": "1",
      "Row_name": "Customer 1",
      "one": "00",
      "two": "90",
      "three": "60",
      "four": "20",
      "five": "30",
      "six": "40",
    }
  ])
  const [listItems2, setlistItems2] = useState([])


  useEffect(() => {
    props.setheader_options(screen_header_elements)

    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        // console.log(">>>>>>>>>>>", data.data)
        setlistItems1(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)


    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        // console.log(">>>>>>>>>>>", data.data)
        setlistItems2(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

  }, [])



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
    let headerElement = ['title', 'Task Type', 'priority', 'assignee', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody2 = (element: any) => {
    return (
      <tr>
        <td>{element.title}</td>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.assigned_to}</td>
        <td>{element.status}</td>
      </tr>
    )
  }

  const Card = ({ card_title, card_body }) => {
    const [card_open, setCard_open] = useState(true)
    return (
      <div className='dashboard_card'>
        <div className='card_title'>
          {card_title}
          <img className={card_open ? 'open_close_arrow_icon' : 'open_close_arrow_icon rotate180'} src={up_down_arrow} onClick={() => { setCard_open(!card_open) }} />
        </div>
        {card_open &&
          <div className='card_details_wrapper'>
            {card_body}
          </div>
        }
      </div>
    )
  }

  return (
    <div className="main">
      {spinner ?
        <div className="spinner_fullscreen_div">
          <Spinner />
        </div> :
        null
      }

      {popup &&
        <AddEditProject
          setPopup={() => {
            setpopup(false)
          }}
        />
      }
      <div className="body">
        <Card card_title="Active Projects" card_body={
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
        <Card card_title="Pending Tasks" card_body={
          <div className="internal_table">
            <table id='internal_table'>
              <thead>
                <tr>{renderHeader2()}</tr>
              </thead>
              <tbody>
                {
                  listItems2.map(renderBody2)
                }
              </tbody>
            </table>
          </div>
        }
        />
        <Card card_title="Stats" card_body={
          <>
            <div className="card_details">1,000 Tasks Completed</div>
            <div className="card_details">500 Features Added</div>
            <div className="card_details">50,000 Bugs Squashed</div>
          </>
        }
        />
        <Card card_title="Analystics" card_body={
          <>
            <div className="card_details">Visitors 10,000</div>
            <div className="card_details">Countries</div>
            <div className="card_details">Devices</div>
          </>
        }
        />
      </div>
    </div >
  );
}

export default HomeScreen
function gtProject(arg0: (data: any, errorresponse: any) => Promise<void>) {
  throw new Error('Function not implemented.');
}

