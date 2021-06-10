import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import { ProgressBar } from 'components/Common/Spinner';

import * as filter from '../../assets/filter.png'
import { CommonAPi } from 'utils/api';
import AddEditBug from 'components/Forms/AddEditBug';
import * as add from '../../assets/add.svg'
import { useAuth } from 'store/authStore';
import Card from '../Common/Card';
import Footer from '../Common/Footer';
import ReactGA from 'react-ga';
import { ColourObject } from 'store/ColourStore';


const BugList = (props: any) => {
  const { auth } = useAuth();
  const history = useHistory();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [listItems1, setlistItems1] = useState([])
  const [listItems2, setlistItems2] = useState([])

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  const [popup, setpopup] = useState(false)
  const [popup2, setpopup2] = useState(false)
  const [popup3, setpopup3] = useState(false)

  const [seleted_taskid, setseleted_taskid] = useState('')

  const [filterindicator, setfilterindicator] = useState(false)

  const [spinner, setspinner] = useState(true)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    props.setheader_options(screen_header_elements)

    setspinner(true)

    if (!Colour) {
      loadColour();
    }


    CommonAPi(
      {
        path: `tasks/maintask/?task_type=bug&user=`,
        method: "get",
        auth: auth ? auth : false,
      },
      (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Project Tasks:", data.data)
          setlistItems1(data.data.results)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })
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

  const renderHeader1 = () => {
    let headerElement = ['Project', 'Bug Title', 'Task Type', 'priority', 'domain', 'description', 'Date Reported', 'Protrait', 'Landscape', 'Android', 'IOS', 'Browser', 'image_link']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody1 = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr key={element.id} className={getClassname(element.priority)}>
        <td>{element.project_ref}</td>
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
        <td>...</td>
        <td>...</td>
      </tr >
    )
  }

  const renderHeader2 = () => {
    let headerElement = ['Project', 'Title', 'Task Type', 'priority', 'domain', 'Description', 'Api Name', 'Api Method', 'Path']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody2 = (element: any) => {
    // const [task_active, settask_active] = useState(false)
    return (
      <tr key={element.id} className={getClassname(element.priority)}>
        <td>{element.project_ref}</td>
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
              card_title={Projecttitle}
              card_body={
                <div className="internal_table" style={{ color: colourObj.color_1 }}>
                  <table id='internal_table'>
                    <thead>
                      <tr>{renderHeader2()}</tr>
                    </thead>
                    <tbody>
                      {
                        listItems1.map(renderBody2)
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

export default BugList;
