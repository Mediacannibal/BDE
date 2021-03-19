import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import * as sendIcon from '../../assets/send.png'
import * as AttachmentImg from '../../assets/attach-paperclip-symbol.png'
// import { getBidlogbyagentdata, getBidlogbyagentnumberdata, getBidlogdata } from 'utils/api';
import Spinner from 'components/Common/Spinner';

const TaskDetails = () => {

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

  const [unique_amount_arry, setunique_amount_arry] = useState([])
  const [unique_bookeddate_arry, setunique_bookeddate_arry] = useState([])
  const [unique_bracketcombination_arry, setunique_bracketcombination_arry] = useState([])
  const [unique_dayornight_arry, setunique_dayornight_arry] = useState([])
  const [unique_name_arry, setunique_name_arry] = useState([])
  const [unique_number_arry, setunique_number_arry] = useState([])
  const [unique_user_arry, setunique_user_arry] = useState([])

  const [filterindicator, setfilterindicator] = useState(false)

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [tasknameinput, settasknameinput] = useState(false)
  const [taskpriorityinput, settaskpriorityinput] = useState(false)
  const [taskDueinput, settaskDueinput] = useState(false)
  const [taskasigneeinput, settaskasigneeinput] = useState(false)
  const [taskDescriptioninput, settaskDescriptioninput] = useState(false)
  const [taskHistoryinput, settaskHistoryinput] = useState(false)
  const [mic, setmic] = useState(true)


  useEffect(() => {
    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      let usertype1 = UserDetails.user_type
      let user_id = UserDetails.user_id
      console.log(screen, user_id, usertype1)
      setusertype(usertype1)
      setuserID(user_id)
    }
  }, [])

  let params = useParams();
  useEffect(() => {
    setspinner(true)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    if (token === null)
      // history.push("/")


      if (params.id === undefined) {
        // getBidlogdata(async (data: any, errorresponse: any) => {
        //   if (data.status === 200) {
        //     setspinner(false)
        //     setlistItems(data.data)
        //     let amount_arry: Iterable<any> | null | undefined = []
        //     let bookeddate_arry: Iterable<any> | null | undefined = []
        //     let bracketcombination_arry: Iterable<any> | null | undefined = []
        //     let dayornight_arry: Iterable<any> | null | undefined = []
        //     let name_arry: Iterable<any> | null | undefined = []
        //     let number_arry: Iterable<any> | null | undefined = []
        //     let user_arry: Iterable<any> | null | undefined = []
        //     data.data.forEach((element: any) => {
        //       amount_arry.push(element.amount)
        //       bookeddate_arry.push(element.bookeddate)
        //       bracketcombination_arry.push(element.bracketcombination)
        //       dayornight_arry.push(element.dayornight)
        //       name_arry.push(element.name)
        //       number_arry.push(element.number)
        //       user_arry.push(element.user)
        //     });
        //     setunique_amount_arry(Array.from(new Set(amount_arry)));
        //     setunique_bookeddate_arry(Array.from(new Set(bookeddate_arry)))
        //     setunique_bracketcombination_arry(Array.from(new Set(bracketcombination_arry)))
        //     setunique_dayornight_arry(Array.from(new Set(dayornight_arry)))
        //     setunique_name_arry(Array.from(new Set(name_arry)))
        //     setunique_number_arry(Array.from(new Set(number_arry)))
        //     setunique_user_arry(Array.from(new Set(user_arry)))

        //     console.log(
        //       unique_amount_arry,
        //       unique_bookeddate_arry,
        //       unique_bracketcombination_arry,
        //       unique_dayornight_arry,
        //       unique_name_arry,
        //       unique_number_arry,
        //       unique_user_arry
        //     );


        //   } else {
        //     setspinner(false)
        //     console.log('error ' + JSON.stringify(data));
        //     console.log('error ' + JSON.stringify(errorresponse));
        //   }
        // }, token)
      }
      else {



        if (params.number !== undefined && params.pattren !== undefined) {


          console.log("================>", params.id, params.number, params.pattren)

          // getBidlogbyagentnumberdata(async (data: any, errorresponse: any) => {
          //   if (data.status === 200) {
          //     setspinner(false)
          //     setlistItems(data.data)
          //   } else {
          //     setspinner(false)
          //     console.log('error ' + JSON.stringify(data));
          //     console.log('error ' + JSON.stringify(errorresponse));
          //   }
          // }, token, params.id, params.number, params.pattren)


        }
        else {
          // getBidlogbyagentdata(async (data: any, errorresponse: any) => {
          //   if (data.status === 200) {
          //     setspinner(false)
          //     setlistItems(data.data)
          //   } else {
          //     setspinner(false)
          //     console.log('error ' + JSON.stringify(data));
          //     console.log('error ' + JSON.stringify(errorresponse));
          //   }
          // }, token, params.id)
        }
      }

  }, [])


  const renderHeader = () => {
    let headerElement = ['Name', 'Date/Time Booked', 'Date', 'Slot', 'Combi', 'Number', 'Amount',]

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    console.log(element.user, userID)
    if (usertype !== "SUPERUSER") {
      if (element.user === userID) {
        return (
          <tr key={element.id}>
            <td className='bidlog_table_column1'>
              {element.name}
            </td>
            <td>{parsetime(element.bookingtimestamp)}</td>
            <td>{element.bookeddate}</td>
            <td>{element.dayornight}</td>
            <td>{element.bracketcombination}</td>
            <td>{element.number}</td>
            <td>{element.amount}</td>
          </tr>
        )
      }
      else {
        return (
          null
        )
      }
    }
    else {
      return (
        <tr key={element.id}>
          <td className='bidlog_table_column1'>
            {element.name}
          </td>
          <td>{parsetime(element.bookingtimestamp)}</td>
          <td>{element.bookeddate}</td>
          <td>{element.dayornight}</td>
          <td>{element.bracketcombination}</td>
          <td>{element.number}</td>
          <td>{element.amount}</td>
        </tr>
      )
    }
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
      <Header screen={"BidLog"} />

      <div className="body">

        <div className='title'>Task Details</div>

        <div className="MAINsomwethin">

          <div className="task_details">

            <div className="column">
              <div className="subtitle">Task:{tasknameinput ? <input></input> : <div>Add image</div>} </div>
            </div>

            <div className="column">
              <div className="subtitle">Priority: {taskpriorityinput ? <input></input> : <div>Add Table</div>} </div>
              <div className="subtitle">Due Date:{taskDueinput ? <input></input> : <div>15-03-2021</div>}</div>
              <div className="subtitle">Assignee:{taskasigneeinput ? <input></input> : <div>Kiran</div>}</div>

            </div>

          </div>

          <div className="tasklog">
            <div className="subtitle">Descrition:{taskDescriptioninput ? <input></input> : <div>Some description</div>}</div>
            <div className="subtitle">History:{taskHistoryinput ? <input></input> : <div>Some history</div>}</div>
          </div>

          <div className="chat_container">
            <div className="subtitle">CHAT</div>
            <div className="chatbox">
              <div className="bottom_container">
                <div className="icon_container" onClick={() => { }}>
                  <img className="iconimg" src={AttachmentImg} />
                </div>
                <input className="message_box" placeholder="Type a message" />
                <div className="icon_container" onClick={() => { }}>
                  <img className="iconimg" src={sendIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div >
  )
}

export default TaskDetails
