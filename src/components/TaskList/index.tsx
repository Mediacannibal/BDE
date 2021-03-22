import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory, useParams } from 'react-router-dom';
import '../../components/app.css'
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
// import { getBidlogbyagentdata, getBidlogbyagentnumberdata, getBidlogdata } from 'utils/api';
import Spinner from 'components/Common/Spinner';

import * as filter from '../../assets/filter.png'

const TaskList = () => {

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
          setspinner(false)
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
        getBidlogbyagentdata(async (data: any, errorresponse: any) => {
          if (data.status === 200) {
            setspinner(false)
            setlistItems(data.data)
          } else {
            setspinner(false)
            console.log('error ' + JSON.stringify(data));
            console.log('error ' + JSON.stringify(errorresponse));
          }
        }, token, params.id)
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

        <div className='title'>
          Bid Records
          {(usertype === "SUPERUSER") ?
            <select
              className="agent bidrecord_noformat_dropdown"
              id="noformat_dropdown"
              value={""}
              onChange={(e) => {
                console.log(e.target.value)
              }} >
              <option hidden value="">All Agents</option>
              {
                unique_user_arry.map((element) => {
                  return <option value={element}>{element}</option>
                })
              }
            </select>
            :
            null}
        </div>

        <div className="bidlog_filterfield_container">

          <select
            className="customer bidrecord_dropdown"
            id="customerpicker"
          >
            <option hidden value="">Customer</option>
            {
              unique_name_arry.map((element) => {
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
            {
              unique_bookeddate_arry.map((element) => {
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
              unique_dayornight_arry.map((element) => {
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
              unique_bracketcombination_arry.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          <select
            className="bidrecord_dropdown"
            id="numberpicker"
          >
            <option hidden value="">Number</option>
            {
              unique_number_arry.map((element) => {
                return <option value={element}>{element}</option>
              })
            }
          </select>

          <select
            className="bidrecord_dropdown"
            id="amountpicker"
          >
            <option value={""}>Amount</option>
            {
              unique_amount_arry.map((element) => {
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

export default TaskList
