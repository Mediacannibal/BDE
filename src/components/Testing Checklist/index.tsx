import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { testListing } from 'utils/api';
import Spinner from 'components/Common/Spinner';

import * as filter from '../../assets/filter.png'
import AddEditTest from 'components/Forms/AddEditTest';

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
    setspinner(false)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // history.push("/")
    // if (params.id === undefined) {
    testListing(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let number: Iterable<any> | null | undefined = []
        let test: Iterable<any> | null | undefined = []
        let portrait: Iterable<any> | null | undefined = []
        let landscape: Iterable<any> | null | undefined = []
        let device: Iterable<any> | null | undefined = []
        let remarks: Iterable<any> | null | undefined = []
        let image_link: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          number.push(element.number)
          test.push(element.test)
          portrait.push(element.portrait)
          landscape.push(element.landscape)
          device.push(element.device)
          remarks.push(element.remarks)
          image_link.push(element.image_link)
        });
        setunique_number(Array.from(new Set(number)));
        setunique_test(Array.from(new Set(test)))
        setunique_portrait(Array.from(new Set(portrait)))
        setunique_landscape(Array.from(new Set(landscape)))
        setunique_device(Array.from(new Set(device)))
        setunique_remarks(Array.from(new Set(remarks)))
        setunique_image_link(Array.from(new Set(image_link)))

        console.log(
          unique_number,
          unique_test,
          unique_portrait,
          unique_landscape,
          unique_device,
          unique_remarks,
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


  const renderHeader = () => {
    let headerElement = ['No.', 'Test', 'Portrait', 'Landscape', 'Device', 'Remarks', 'Image link']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    console.log(element.user, userID)
    return (
      <tr key={element.test}>
        <td>{element.number}</td>
        <td>{element.test}</td>
        <td>{element.portrait}</td>
        <td>{element.landscape}</td>
        <td>{element.device}</td>
        <td>{element.remarks}</td>
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

      {popup ?
        <AddEditTest
          setPopup={() => {
            setpopup(false)
          }}
        />
        :
        <div onClick={() => { setpopup(true) }}>click me </div>
      }

      <div className="body">
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