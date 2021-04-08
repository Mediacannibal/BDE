import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import Spinner from 'components/Common/Spinner';

import * as filter from '../../assets/filter.png'
import { getMainTask, listingBug } from 'utils/api';
import AddEditBug from 'components/Forms/AddEditBug';
import * as add from '../../assets/add.svg'

const BugList = (props: any) => {

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

  const [unique_bug_title, setunique_bug_title] = useState([])
  const [unique_protrait, setunique_protrait] = useState([])
  const [unique_landscape, setunique_landscape] = useState([])
  const [unique_android, setunique_android] = useState([])
  const [unique_ios, setunique_ios] = useState([])
  const [unique_browser, setunique_browser] = useState([])
  const [unique_image_link, setunique_image_link] = useState([])

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  const [popup, setpopup] = useState(false)

  const [filterindicator, setfilterindicator] = useState(false)

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  useEffect(() => {
    // let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    // if (UserDetails !== null) {
    //   let usertype1 = UserDetails.user_type
    //   let user_id = UserDetails.user_id
    //   console.log(screen, user_id, usertype1)
    //   setusertype(usertype1)
    //   setuserID(user_id)
    // }
  }, [])

  let params = useParams();
  useEffect(() => {
    props.setheader_options(screen_header_elements)
    setspinner(false)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // if (token === null)
    //   // history.push("/")
    //   if (params.id === undefined) {
    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        console.log("!!!!!!!!!!!!!!!!", data.data)
        setspinner(false)
        setlistItems(data.data)
        let bug_title: Iterable<any> | null | undefined = []
        let protrait: Iterable<any> | null | undefined = []
        let landscape: Iterable<any> | null | undefined = []
        let android: Iterable<any> | null | undefined = []
        let ios: Iterable<any> | null | undefined = []
        let browser: Iterable<any> | null | undefined = []
        let image_link: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          bug_title.push(element.bug_title)
          protrait.push(element.protrait)
          landscape.push(element.landscape)
          android.push(element.android)
          ios.push(element.ios)
          browser.push(element.browser)
          image_link.push(element.image_link)
        });
        setunique_bug_title(Array.from(new Set(bug_title)));
        setunique_protrait(Array.from(new Set(protrait)))
        setunique_landscape(Array.from(new Set(landscape)))
        setunique_android(Array.from(new Set(android)))
        setunique_ios(Array.from(new Set(ios)))
        setunique_browser(Array.from(new Set(browser)))
        setunique_image_link(Array.from(new Set(image_link)))

        console.log(
          unique_bug_title,
          unique_protrait,
          unique_landscape,
          unique_android,
          unique_ios,
          unique_browser,
          unique_image_link,
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
          <div>Add Bug</div>
        </div>
      </>
    )
  }

  const renderHeader = () => {
    let headerElement = ['Bug Title', 'Date Reported', 'Protrait', 'Landscape', 'Android', 'IOS', 'Browser', 'image_link']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    console.log(element.user, userID)
    return (
      <tr key={element.bug_title}>
        <td>{element.bug_title}</td>
        <td>****</td>
        <td>{element.protrait}</td>
        <td>{element.landscape}</td>
        <td>{element.android}</td>
        <td>{element.ios}</td>
        <td>{element.browser}</td>
        <td>{element.image_link}</td>
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
        <AddEditBug
          setPopup={() => {
            setpopup(false)
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

          <select
            className="customer bidrecord_dropdown"
            id="customerpicker"
          >
            <option hidden value="">Customer</option>
            {
              unique_bug_title.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          {/* <select
            className="bookeddate bidrecord_dropdown"
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
            {/* {
              unique_orientation.map((element) => {
                return <option value={element}>{element}</option>
              })
            } */}
          </select>

          <select
            className="bidrecord_dropdown"
            id="dayornightpicker"
          >
            <option hidden value="">Slot</option>
            {/* {
              unique_device.map((element) => {
                return <option value={element}>{element}</option>
              })
            } */}
          </select>

          <select
            className="bidrecord_dropdown"
            id="bracketcombinationpicker"
          >
            <option hidden value="">Combi</option>
            {/* {
              unique_remarks.map((element) => {
                return <option value={element}>{element}</option>
              })
            } */}
          </select>

          <select
            className="bidrecord_dropdown"
            id="numberpicker"
          >
            <option hidden value="">Number</option>
            {
              unique_image_link.map((element) => {
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
                  let amount_arry: Iterable<any> | null | undefined = []
                  let bookeddate_arry: Iterable<any> | null | undefined = []
                  let bracketcombination_arry: Iterable<any> | null | undefined = []
                  let dayornight_arry: Iterable<any> | null | undefined = []
                  let name_arry: Iterable<any> | null | undefined = []
                  let number_arry: Iterable<any> | null | undefined = []
                  let user_arry: Iterable<any> | null | undefined = []
                  data.data.forEach((element: any) => {
                    amount_arry.push(element.amount)
                    bookeddate_arry.push(element.bookeddate)
                    bracketcombination_arry.push(element.bracketcombination)
                    dayornight_arry.push(element.dayornight)
                    name_arry.push(element.name)
                    number_arry.push(element.number)
                    // user_arry.push(element.user)
                  });
                  setunique_amount_arry(Array.from(new Set(amount_arry)));
                  setunique_bookeddate_arry(Array.from(new Set(bookeddate_arry)))
                  setunique_bracketcombination_arry(Array.from(new Set(bracketcombination_arry)))
                  setunique_dayornight_arry(Array.from(new Set(dayornight_arry)))
                  setunique_name_arry(Array.from(new Set(name_arry)))
                  setunique_number_arry(Array.from(new Set(number_arry)))
                  // setunique_user_arry(Array.from(new Set(user_arry)))

                  console.log(
                    unique_amount_arry,
                    unique_bookeddate_arry,
                    unique_bracketcombination_arry,
                    unique_dayornight_arry,
                    unique_name_arry,
                    unique_number_arry,
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

export default BugList
