import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import { getTasktimelog } from 'utils/api';
import { ProgressBar } from 'components/Common/Spinner';

import * as add from '../../assets/add.svg'
import * as play from '../../assets/play.svg'

import { useAuth } from 'store/authStore';
import Card from '../Common/Card';
import Footer from '../Common/Footer';

const TaskTimeLog = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [listItems, setlistItems] = useState([])

  const [spinner, setspinner] = useState(true)

  const [popup, setpopup] = useState(false)

  const [testselection, settestselection] = useState(false)

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
          <div>Add Test</div>
        </div>
        <div className='screen_header_element' onClick={() => { settestselection(true) }}>
          <img className='header_icon' src={play} />
          <div>Run Test</div>
        </div>
      </>
    )
  }

  const renderHeader = () => {
    let headerElement = ['Task', 'Created By', 'Created At', 'Updated At']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr>
        <td>{element.task_ref}</td>
        <td>{element.created_by}</td>
        <td>{element.created_at}</td>
        <td>{element.updated_at}</td>
      </tr >
    )
  }

  return (
    <div className="main">

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