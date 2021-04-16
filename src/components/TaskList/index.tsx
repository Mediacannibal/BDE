import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { getMainTask } from 'utils/api';
import Spinner from 'components/Common/Spinner';

import * as filter from '../../assets/filter.png'
import AddEditTask from 'components/Forms/AddEditTask';
import * as add from '../../assets/add.svg'
import AddEditTaskLog from 'components/Forms/AddEditTaskLog';

const TaskList = (props: any) => {

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

  const [filterindicator, setfilterindicator] = useState(false)

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [popup1, setpopup1] = useState(false)
  const [popup2, setpopup2] = useState(false)


  let params = useParams();
  useEffect(() => {
    props.setheader_options(screen_header_elements)

    setspinner(true)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))

    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let project_title = 
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)
  }, [])



  const renderHeader = () => {
    let headerElement = ['Project', 'title', 'Task Type', 'priority', 'domain', 'description', 'assignee', 'image_link', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderHeader2 = () => {
    let headerElement = ['title', 'Task Type', 'priority', 'domain', 'description', 'assignee', 'image_link', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    return (
      <tr key={element.project_ref}>
        {(all_project_ref.length === 0) ?
          <td> {element.project_ref}</td>
          : null}
        <td onClick={() => {
          setpopup2(true)
          console.log(">><<", popup2)
        }}>{element.title}</td>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.domain}</td>
        <td>{element.description}</td>
        <td>{element.assignee}</td>
        <td>{element.image_link}</td>
        <td>{element.status}</td>
      </tr >
    )
  }

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup1(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Task</div>
        </div>
      </>
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

      {popup1 &&
        <AddEditTask
          setPopup={() => {
            setpopup1(false)
          }}
        />
      }

      {
        popup2 &&
        <AddEditTaskLog
          setPopup={() => {
            setpopup2(false)
          }}
        />
      }

      <div className="body">

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

          {/* <select
            className="customer bidrecord_dropdown"
            id="customerpicker"
          >
            <option hidden value="">Customer</option>
            {
              unique_updated_by.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          <select
            className="bidrecord_dropdown"
            id="biddatepicker"
          >
            <option hidden value="">Bid Date</option>
            {
              unique_title.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          <select
            className="bidrecord_dropdown"
            id="dayornightpicker"
          >
            <option hidden value="">Slot</option>
            {
              unique_assignee.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          <select
            className="bidrecord_dropdown"
            id="bracketcombinationpicker"
          >
            <option hidden value="">Combi</option>
            {
              unique_description.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select> */}

          {/* <select
            className="bidrecord_dropdown"
            id="numberpicker"
          >
            <option hidden value="">Number</option>
            {
              unique_number_arry.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select> */}

          {/* <select
            className="bidrecord_dropdown"
            id="amountpicker"
          >
            <option value={""}>Amount</option>
            {
              unique_project_ref.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select> */}

          <button className="bidrecord_filterandclose_button"
            onClick={() => {
              let data = {
                "project_ref": all_project_ref,
                // "amount": document.getElementById("amountpicker").value,
                // "bookeddate": document.getElementById("biddatepicker").value,
                // "bracketcombination": document.getElementById("bracketcombinationpicker").value,
                // "dayornight": document.getElementById("dayornightpicker").value,
                // "name": document.getElementById("customerpicker").value,
                // "number": document.getElementById("numberpicker").value,
                // // "user": document.getElementById("userpicker").value,
              }
              console.log(data);
              let token = JSON.parse(String(localStorage.getItem("AuthToken")))
              getMainTask(async (data: any, errorresponse: any) => {
                if (data.status === 200) {
                  setspinner(false)
                  setlistItems(data.data)
                  setfilterindicator(true)
                } else {
                  setspinner(false)
                  console.log('error ' + JSON.stringify(data));
                  console.log('error ' + JSON.stringify(errorresponse));
                }
              }, token, data[0])

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

        <div>Project:<div>{title}</div></div>

        <div className="internal_table">
          <table id='internal_table'>
            <thead>
              {(all_project_ref.length === 0) ?
                <tr>{renderHeader()}</tr>
                :
                <tr>{renderHeader2()}</tr>
              }
            </thead>
            <tbody>
              {
                listItems.map(renderBody)
              }
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div >
  )
}

export default TaskList
function data(arg0: (data: any, errorresponse: any) => Promise<void>, token: any, data: any) {
  throw new Error('Function not implemented.');
}

