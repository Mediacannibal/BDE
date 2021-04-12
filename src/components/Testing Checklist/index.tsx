import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { getMainTask, testListing } from 'utils/api';
import Spinner from 'components/Common/Spinner';

import * as add from '../../assets/add.svg'
import * as play from '../../assets/play.svg'
import AddEditTest from 'components/Forms/AddEditTest';
import TestSelection from 'components/Forms/TestSelection';

const TestingChecklist = (props: any) => {

  const [listItems, setlistItems] = useState([
    {
      "zero": "1",
      "Row_name": "Customer 1",
      "one": "00",
      "two": "90",
      "three": "60",
      "four": "20",
      "five": "30",
    }
  ])

  const [unique_number, setunique_number] = useState([])
  const [unique_test, setunique_test] = useState([])
  const [unique_portrait, setunique_portrait] = useState([])
  const [unique_landscape, setunique_landscape] = useState([])
  const [unique_device, setunique_device] = useState([])
  const [unique_remarks, setunique_remarks] = useState([])
  const [unique_image_link, setunique_image_link] = useState([])

  const [filterindicator, setfilterindicator] = useState(false)

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [popup, setpopup] = useState(false)
  const [testselection, settestselection] = useState(false)

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  // let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
  // if (UserDetails !== null) {
  //   let usertype1 = UserDetails.user_type
  //   let user_id = UserDetails.user_id
  //   console.log(screen, user_id, usertype1)
  //   setusertype(usertype1)
  //   setuserID(user_id)
  // }


  let params = useParams();
  useEffect(() => {

    props.setheader_options(screen_header_elements)
    // console.log("hello, hi, good day",screen_header_elements)

    setspinner(false)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // history.push("/")
    // if (params.id === undefined) {
      getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let project_ref_array: Iterable<any> | null | undefined = []
        let number: Iterable<any> | null | undefined = []
        let test: Iterable<any> | null | undefined = []
        let portrait: Iterable<any> | null | undefined = []
        let landscape: Iterable<any> | null | undefined = []
        let device: Iterable<any> | null | undefined = []
        let image_link: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          project_ref_array.push(element.project_ref)
          number.push(element.number)
          test.push(element.test)
          portrait.push(element.portrait)
          landscape.push(element.landscape)
          device.push(element.device)
          image_link.push(element.image_link)
        });
        setunique_project_ref(Array.from(new Set(project_ref_array)));
        setunique_number(Array.from(new Set(number)));
        setunique_test(Array.from(new Set(test)))
        setunique_portrait(Array.from(new Set(portrait)))
        setunique_landscape(Array.from(new Set(landscape)))
        setunique_device(Array.from(new Set(device)))
        setunique_image_link(Array.from(new Set(image_link)))

        console.log(
          unique_number,
          unique_test,
          unique_portrait,
          unique_landscape,
          unique_device,
          unique_image_link
        );

      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)
    // }
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
    let headerElement = ['No.', 'Project name', 'Title', 'Descriptioon', 'Image link', 'Orientation', 'Interface']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    console.log(element.user, userID)
    return (
      <tr key={element.test}>
        <td>{element.number}</td>
        <td>{element.project_name}</td>
        <td>{element.title}</td>
        <td>{element.description}</td>
        <td>{element.image_link}</td>
        <td>...</td>
        <td>...</td>
      </tr>
    )
  }

  const parsetime = (time: any) => {
    let d = new Date(time)
    let a = d.getDate() + '/' + String(d.getMonth() + 1) + '/' + d.getFullYear() + "," + d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    // console.log(time, d)
    return a
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
              let data = {
                // "project_ref": all_project_ref,
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
                  // let project_ref_array: Iterable<any> | null | undefined = []
                  // let title: Iterable<any> | null | undefined = []
                  // let description: Iterable<any> | null | undefined = []
                  // let assignee: Iterable<any> | null | undefined = []
                  // let updated_by: Iterable<any> | null | undefined = []
                  // let number_arry: Iterable<any> | null | undefined = []
                  // let user_arry: Iterable<any> | null | undefined = []
                  data.data.forEach((element: any) => {
                    // project_ref_array.push(element.project_ref)
                    // title.push(element.title)
                    // description.push(element.description)
                    // assignee.push(element.assignee)
                    // updated_by.push(element.updated_by)
                    // number_arry.push(element.number)
                    // user_arry.push(element.user)
                  });
                  // setunique_project_ref(Array.from(new Set(project_ref_array)));
                  // setunique_title(Array.from(new Set(title)))
                  // setunique_description(Array.from(new Set(description)))
                  // setunique_assignee(Array.from(new Set(assignee)))
                  // setunique_updated_by(Array.from(new Set(updated_by)))
                  // setunique_number_arry(Array.from(new Set(number_arry)))
                  // setunique_user_arry(Array.from(new Set(user_arry)))

                  console.log(
                    // all_project_ref,
                    // unique_title,
                    // unique_description,
                    // unique_assignee,
                    // unique_updated_by,
                    // unique_number_arry,
                    // unique_user_arry
                  );
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

export default TestingChecklist