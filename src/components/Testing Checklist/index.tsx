import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import { getTestlog } from 'utils/api';
import { ProgressBar } from 'components/Common/Spinner';

import * as add from '../../assets/add.svg'
import * as play from '../../assets/play.svg'
import * as filter from '../../assets/filter.png'

import AddEditTest from 'components/Forms/AddEditTest';
import TestSelection from 'components/Forms/TestSelection';
import { useAuth } from 'store/authStore';
import { getProject } from 'utils/api';
import Card from '../Common/Card';
import Footer from '../Common/Footer';

const TestingChecklist = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])
  const [unique_title, setunique_title] = useState([])

  const [users, setusers] = useState('all')

  const [filterindicator, setfilterindicator] = useState(false)

  const [spinner, setspinner] = useState(true)

  const [userID, setuserID] = useState("")

  const [popup, setpopup] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [testselection, settestselection] = useState(false)
  const [seleted_taskid, setseleted_taskid] = useState('')

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")


  let params = useParams();
  useEffect(() => {

    props.setheader_options(screen_header_elements)

    setspinner(true)

    getTestlog(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>>>>>>", data.data.results)
        setlistItems1(data.data.results)

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth)


    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>123123>>>>>", data.data.results)
        setlistItems2(data.data.results)
        let title: Iterable<any> | null | undefined = []
        data.data.results.forEach((element: any) => {
          title.push(element.title)
        });
        setunique_title(Array.from(new Set(title)));
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, users)
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
    let headerElement = ['No.', 'Project name', 'Title', 'Task Type', 'priority', 'domain', 'Description', 'Image link', 'Portrait', 'Landscape', 'Interface', 'track', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr>
        <td>...</td>
        <td>...</td>
        <td onClick={() => {
          setpopup2(true)
          // console.log(">><<", popup2)
          setseleted_taskid(element.id)
        }}>{element.title}</td>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.domain}</td>
        <td>{element.description}</td>
        <td>...</td>
        <td>...</td>
        <td>{element.assigned_to}</td>
        <td>{element.image_link}</td>
        <td>
          <div className='screen_header_element'
            onClick={() => {
              setpopup3(true)
              setseleted_taskid(element.id)
              // settask_active(!task_active)
              // console.log("pppppppppppp", setpopup3)
            }}>
            <img className='header_icon' src={play} />
          </div>
        </td>
        <td>{element.status}</td>
      </tr >
    )
  }

  const Projecttitle = () => {
    return listItems2.map((ele: any, key: any) => {
      return <div>{" Project:"}<span>{ele.title}</span></div>
    })
  }

  return (
    <div className="main">
      {popup &&
        <AddEditTest
          setPopup={() => {
            setpopup(false)
          }}
        />
      }

      {testselection &&
        <TestSelection
          setTest={() => {
            settestselection(false)
          }}
        />
      }

      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <>
            <div className='main_selector_div'>
              <select
                className="projectname_dropdown"
                id="noformat_dropdown"
                value={all_project_ref}
                onChange={(e) => {
                  console.log(e.target.value)
                  setall_project_ref(e.target.value)
                }} >
                <option hidden value="">Project Name</option>
                {
                  unique_project_ref.map((element) => {
                    return <option value={element}>{element}</option>
                  })
                }
              </select>
            </div>

            <div className="bidlog_filterfield_container">

              <button
                onClick={() => {

                }}>Filter <div className="filter_icon_container"><img className='filter_icon' src={filter} /></div></button>

              {filterindicator ?
                <button
                  onClick={() => {
                    window.location.reload()
                  }}>X</button>
                :
                null
              }

            </div>

            <Card
              card_title={Projecttitle}
              card_body={
                <div className="internal_table">
                  <table id='internal_table'>
                    <thead>
                      <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                      {
                        listItems1.map(renderBody)
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

export default TestingChecklist