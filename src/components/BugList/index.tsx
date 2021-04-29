import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import Spinner, { ProgressBar } from 'components/Common/Spinner';
import * as play from '../../assets/play.svg'

import * as filter from '../../assets/filter.png'
import { getBuglog, getMainTask, listingBug } from 'utils/api';
import AddEditBug from 'components/Forms/AddEditBug';
import * as add from '../../assets/add.svg'
import { useAuth } from 'store/authStore';
import { getProject } from 'src/utils/api';
import Card from '../Common/Card';


const BugList = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])
  const [unique_title, setunique_title] = useState([])

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  const [popup, setpopup] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [seleted_taskid, setseleted_taskid] = useState('')

  const [filterindicator, setfilterindicator] = useState(false)

  const [spinner, setspinner] = useState(true)

  useEffect(() => {
    props.setheader_options(screen_header_elements)

    setspinner(true)

    getBuglog(async (data: any, errorresponse: any) => {
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
    }, auth)
  }, [])

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Bug</div>
        </div>
      </>
    )
  }

  const renderHeader = () => {
    let headerElement = ['Bug Title', 'title', 'Task Type', 'priority', 'domain', 'description', 'Date Reported', 'Protrait', 'Landscape', 'Android', 'IOS', 'Browser', 'image_link', 'track', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr>
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
        <td>...</td>
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
        <AddEditBug
          setPopup={() => {
            setpopup(false)
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

              <button className="bidrecord_filterandclose_button"
                onClick={() => {

                }}>Filter <div className="filter_icon_container"><img className='filter_icon' src={filter} /></div></button>

              {filterindicator ?
                <button className="bidrecord_filterandclose_button"
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

export default BugList
