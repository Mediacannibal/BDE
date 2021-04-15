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

  const [unique_project_type, setunique_project_type] = useState([])
  const [unique_project_title, setunique_project_title] = useState([])
  const [unique_project_status, setunique_project_status] = useState([])

  const [unique_task_title, setunique_task_title] = useState([])

  const [listItems, setlistItems] = useState([
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

  useEffect(() => {
    props.setheader_options(screen_header_elements)

    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let project_type: Iterable<any> | null | undefined = []
        let title: Iterable<any> | null | undefined = []
        let status: Iterable<any> | null | undefined = []

        data.data.forEach((element: any) => {
          project_type.push(element.project_type)
          title.push(element.title)
          status.push(element.status)
        });
        setunique_project_type(Array.from(new Set(project_type)));
        setunique_project_title(Array.from(new Set(title)))
        setunique_project_status(Array.from(new Set(status)))

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

  }, [])

  let token = JSON.parse(String(localStorage.getItem("AuthToken")))
  getMainTask(async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log(">>>>>>>>>>>", data.data)
      setlistItems(data.data)
      let title: Iterable<any> | null | undefined = []
      data.data.forEach((element: any) => {
        title.push(element.title)
      });
      setunique_task_title(Array.from(new Set(title)))
    } else {
      setspinner(false)
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  }, token)

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
          unique_project_title.map((element) => {
            return <div className="card_details">{element}</div>
          })}
        />
        <Card card_title="Pending Tasks" card_body={
          unique_project_title.map((element) => {
            return <div className="card_details">{element}</div>
          })}
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
function gwtProject(arg0: (data: any, errorresponse: any) => Promise<void>, token: any) {
  throw new Error('Function not implemented.');
}

