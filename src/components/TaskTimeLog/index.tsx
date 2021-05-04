import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import { getTasktimelog } from 'utils/api';
import { ProgressBar } from 'components/Common/Spinner';

import * as add from '../../assets/add.svg'

import { useAuth } from 'store/authStore';
import Card from '../Common/Card';
import Footer from '../Common/Footer';

const TaskTimeLog = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [listItems, setlistItems] = useState([])
  const [companybranchTitle, setcompanybranchTitle] = useState(false)

  const [spinner, setspinner] = useState(true)

  const [popup, setpopup] = useState(false)

  const [Userid, setUserid] = useState(false)

  useEffect(() => {

    props.setheader_options(screen_header_elements)

    setspinner(true)

    getTasktimelog(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log("TaskTime Log Results: ", data.data)
        setlistItems(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth)
  }, [])

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Task</div>
        </div>
        {/* <div className='screen_header_element' onClick={() => { settestselection(true) }}>
          <img className='header_icon' src={play} />
          <div>Run Test</div>
        </div> */}
      </>
    )
  }

  const renderHeader = () => {
    let headerElement = ['Task', 'Assignee', 'Started At', 'Paused At', 'Time Spent']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr key={element.id}>
        <td>{element.task_name}</td>
        <td onClick={() => {
          setcompanybranchTitle(!companybranchTitle)
          setUserid(element.id)
        }}>
          {element.first_name + ' ' + element.last_name}
        </td>
        <td>{element.created_at}</td>
        <td>{element.updated_at}</td>
        <td>{element.time_spent}</td>
      </tr >
    )
  }

  return (
    <div className="main">

      {companybranchTitle &&
        <div className="companybranch_container">
          <div className="companybranch_wrapper">
            {listItems.map((element: any, key: any) => {
              return (
                <div className="companybranch_subwrapper">
                  <div className="header_title" >
                    {"Company: " + element.company}
                  </div>
                  <div className="header_title" >
                    {"Branch: " + element.branch}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      }

      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <>
            <Card
              // card_title={Projecttitle}
              card_body={
                <div className="internal_table">
                  <table id='internal_table'>
                    <thead>
                      <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                      {
                        listItems.map(renderBody)
                      }
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
  )
}

export default TaskTimeLog