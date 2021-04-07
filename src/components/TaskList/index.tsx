import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { getMainTask, listingTask } from 'utils/api';
import Spinner from 'components/Common/Spinner';

import * as filter from '../../assets/filter.png'
import AddEditTask from 'components/Forms/AddEditTask';

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

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [unique_title, setunique_title] = useState([])
  const [unique_task_type, setunique_task_type] = useState([])
  const [unique_priority, setunique_priority] = useState([])
  const [unique_status, setunique_status] = useState([])
  const [unique_domain, setunique_domain] = useState([])
  const [unique_description, setunique_description] = useState([])
  const [unique_assignee, setunique_assignee] = useState([])
  const [unique_updated_by, setunique_updated_by] = useState([])

  const [filterindicator, setfilterindicator] = useState(false)

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [popup, setpopup] = useState(false)

  let params = useParams();
  useEffect(() => {
    // let usertype1 = ""
    // let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    // if (UserDetails !== null) {
    //   usertype1 = UserDetails.user_type
    //   let user_id = UserDetails.user_id
    //   console.log(screen, user_id, usertype1)
    //   setusertype(usertype1)
    //   setuserID(user_id)
    // }
    setspinner(true)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // if (token === null)
    //   history.push("/")
    // if (params.id === undefined) {
    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let project_ref: Iterable<any> | null | undefined = []
        let title: Iterable<any> | null | undefined = []
        let task_type: Iterable<any> | null | undefined = []
        let priority: Iterable<any> | null | undefined = []
        let status: Iterable<any> | null | undefined = []
        let domain: Iterable<any> | null | undefined = []
        let description: Iterable<any> | null | undefined = []
        let assignee: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          project_ref.push(element.project_ref)
          title.push(element.title)
          task_type.push(element.task_type)
          priority.push(element.priority)
          status.push(element.status)
          domain.push(element.domain)
          description.push(element.description)
          assignee.push(element.assignee)
        });
        setunique_project_ref(Array.from(new Set(project_ref)));
        setunique_title(Array.from(new Set(title)))
        setunique_task_type(Array.from(new Set(task_type)))
        setunique_priority(Array.from(new Set(priority)))
        setunique_status(Array.from(new Set(status)))
        setunique_domain(Array.from(new Set(domain)))
        setunique_description(Array.from(new Set(description)))
        setunique_assignee(Array.from(new Set(assignee)))
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

  }, [])



  const renderHeader = () => {
    let headerElement = ['Project ref', 'title', 'Task Type', 'priority', 'domain', 'description', 'assignee', 'image_link', 'status']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    return (
      <tr key={element.project_ref}>
        <td>{element.project_ref}</td>
        <td>{element.title}</td>
        <td>{element.task_type}</td>
        <td>{element.priority}</td>
        <td>{element.domain}</td>
        <td>{element.description}</td>
        <td>{element.assignee}</td>
        <td>{element.image_link}</td>
        <td>{element.status}</td>
      </tr>
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

      {popup ?
        <AddEditTask
          setPopup={() => {
            setpopup(false)
          }}
        />
        :
        <div onClick={() => { setpopup(true) }}>click me </div>
      }

      <div className="body">

        <div className="bidlog_filterfield_container">

          <select
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

          {/* <select
            className="title bidrecord_dropdown"
            id="dropdown"
            value={""}
            onChange={(e) => {
              console.log(e.target.value)
            }} >
            <option hidden value="">Booked Date</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </select> */}

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
          </select>

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

          <select
            className="bidrecord_dropdown"
            id="amountpicker"
          >
            <option value={""}>Amount</option>
            {
              unique_project_ref.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          <button className="bidrecord_filterandclose_button"
            onClick={() => {
              let data = {
                "amount": document.getElementById("amountpicker").value,
                "bookeddate": document.getElementById("biddatepicker").value,
                "bracketcombination": document.getElementById("bracketcombinationpicker").value,
                "dayornight": document.getElementById("dayornightpicker").value,
                "name": document.getElementById("customerpicker").value,
                "number": document.getElementById("numberpicker").value,
                // "user": document.getElementById("userpicker").value,
              }
              console.log(data);
              let token = JSON.parse(String(localStorage.getItem("AuthToken")))
              getBidlogfiltereddata(async (data: any, errorresponse: any) => {
                if (data.status === 200) {
                  setspinner(false)
                  setlistItems(data.data)
                  let project_name: Iterable<any> | null | undefined = []
                  let title: Iterable<any> | null | undefined = []
                  let description: Iterable<any> | null | undefined = []
                  let assignee: Iterable<any> | null | undefined = []
                  let updated_by: Iterable<any> | null | undefined = []
                  // let number_arry: Iterable<any> | null | undefined = []
                  // let user_arry: Iterable<any> | null | undefined = []
                  data.data.forEach((element: any) => {
                    project_name.push(element.project_name)
                    title.push(element.title)
                    description.push(element.description)
                    assignee.push(element.assignee)
                    updated_by.push(element.updated_by)
                    // number_arry.push(element.number)
                    // user_arry.push(element.user)
                  });
                  setunique_project_name(Array.from(new Set(project_name)));
                  setunique_title(Array.from(new Set(title)))
                  setunique_description(Array.from(new Set(description)))
                  setunique_assignee(Array.from(new Set(assignee)))
                  setunique_updated_by(Array.from(new Set(updated_by)))
                  // setunique_number_arry(Array.from(new Set(number_arry)))
                  // setunique_user_arry(Array.from(new Set(user_arry)))

                  console.log(
                    unique_project_name,
                    unique_title,
                    unique_description,
                    unique_assignee,
                    unique_updated_by,
                    // unique_number_arry,
                    // unique_user_arry
                  );
                  setfilterindicator(true)
                } else {
                  setspinner(false)
                  console.log('error ' + JSON.stringify(data));
                  console.log('error ' + JSON.stringify(errorresponse));
                }
              }, token, data)

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

      </div>

      <Footer />
    </div >
  )
}

export default TaskList
function data(arg0: (data: any, errorresponse: any) => Promise<void>, token: any, data: any) {
  throw new Error('Function not implemented.');
}

