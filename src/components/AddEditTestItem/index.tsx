import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import * as send from '../../assets/send.svg'
import '../../components/app.css'
import Footer from 'components/common/Footer';
import { useForm } from 'react-hook-form';
import Header from 'components/common/Header';
import DatePicker from "react-datepicker";
import Spinner from 'components/Common/Spinner';
import Popup from 'components/common/Popup';
import { postAppdata } from 'utils/api';
import TextFieldWithRef from 'components/common/TextFieldWithRef';


const AddEditTestItem = () => {
  const history = useHistory();
  const [number, setnumber] = useState(0)
  const [number00, setnumber00] = useState("00")

  const [isSelect, setisSelect] = useState('value')
  const [isselectslot, setisselectslot] = useState('value')
  const [isbracketSelect, setbracketSelect] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [spinner, setspinner] = useState(false)
  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [isbracketSelecterror, setbracketSelecterror] = useState(false)

  const [name, setname] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false });
  const [amount, setamount] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false });

  const [isnameemptyerror, setnameemptyerror] = useState(false)
  const [isdateemptyerror, setdateemptyerror] = useState(false)
  const [isnumberemptyerror, setnumberemptyerror] = useState(false)
  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [iscombinationemptyerror, setcombinationemptyerror] = useState(false)
  const [isamountemptyerror, setamountemptyerror] = useState(false)

  const [popup, setpopup] = useState(false)
  const [showtable, setshowtable] = useState(false)
  const [list, setlist] = useState([{
    "Name": "",
    "DayNight": "",
    "BracketCombination": "",
    "Number": "",
    "Amount": "",
    "BookedDate": ""
  }])

  const updateinputdata = (data: any) => {

    let buff = []
    list.forEach(element => {
      if (element.Name.length !== 0)
        buff.push(element)
    });
    buff.push(data)
    setlist(buff)
    console.log(buff)
  }


  useEffect(() => {

  }, [])

  const navigate = (param) => {
    console.log("///////////////")
    history.replace('/' + param)
  }

  const renderHeader = () => {
    let headerElement = ['Name', 'Date', 'Slot', 'Combi', 'Number', 'Amount']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {

    return (
      <>
        <tr key={element.Name}>
          <td>{element.Name}</td>
          <td>{element.BookedDate}</td>
          <td>{element.DayNight}</td>
          <td>{element.BracketCombination}</td>
          <td>{element.Number}</td>
          <td>{element.Amount}</td>
        </tr>
      </>
    )
  }

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);


  const parsetime = (time: any) => {
    let d = new Date(time)
    let a = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    console.log(time, d)
    return a
  }

  const Validate = () => {
    let Name = String(document.getElementById("input_value1").value);
    let DayNight = String(document.getElementById("slot").value);
    let BracketCombination = String(document.getElementById("bracket_combination").value);
    // let Num = String(document.getElementById("myNumber").value);
    let Amount = String(document.getElementById("booking_amount").value);

    let temp = true
    if (Name.length === 0 || DayNight.length === 0 || BracketCombination.length === 0 || Amount.length === 0) {
      temp = false
      if (Name.length === 0) {
        setnameemptyerror(true);
        console.log("Name is empty")
      } if (DayNight.length === 0)
        setslotemptyerror(true);
      console.log("DayNight is empty")
      if (BracketCombination.length === 0)
        setcombinationemptyerror(true);
      console.log("BracketCombination is empty")

      if (Amount.length === 0)
        setamountemptyerror(true);
      console.log("Amount is empty")
    }

    return temp
  }


  return (

    <div className="main">
      {spinner ?
        <div className="spinner_fullscreen_div">
          <Spinner />
        </div> :
        null
      }
      <Header screen={"Booking"} />

      <div className="body">

        <div className='title'>Add / Edit Test Item</div>

        <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextFieldWithRef
                label={"Enter Test Name!"}
                labelid={"Test"}
                isActive={name.isActive}
                className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                id="input_value1"
                type="text"
                name={`data.name`}
                value={name.value}
                required
                onChange={(event: any) => {
                  setnameemptyerror(false)
                  let a = event.target.value
                  if (a.length === 0) {
                    setname({ "value": "", "error": "Please enter Client Name!", "isvalid": "false", "isActive": false })
                  }
                  else
                    if (a.length < 4) {
                      setname({ "value": a.replace(/[`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "Minimum 4 characters needed", "isvalid": "false", "isActive": true })
                    }
                    else {
                      setname({ "value": a.replace(/[`~!@#$%^&*()\ \ |+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                }}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextFieldWithRef
                label={"Landscape!"}
                labelid={"device"}
                isActive={amount.isActive}
                id="booking_amount"
                type="text"
                min="1"
                pattern="^(?=.*[0-9])[- +()0-9]+$"
                name={`data.Amount`}
                value={amount.value}
                required
                className={isamountemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                onChange={(event: any) => {
                  setamountemptyerror(false)
                  let a = event.target.value
                  if (a.length === 0) {
                    setamount({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                  }
                  else
                    if (!/^[0-9]+$/.test(a)) {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                    else {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                }}
              />
            </div>
            {isamountemptyerror ? <div className="invalid_entry">Please enter the Device Name!</div> : null}
            <div className="invalid_entry">{amount.error}</div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextFieldWithRef
                label={"Portrait!"}
                labelid={"Remarks"}
                isActive={amount.isActive}
                id="booking_amount"
                type="text"
                min="1"
                pattern="^(?=.*[0-9])[- +()0-9]+$"
                name={`data.Amount`}
                value={amount.value}
                required
                className={isamountemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                onChange={(event: any) => {
                  setamountemptyerror(false)
                  let a = event.target.value
                  if (a.length === 0) {
                    setamount({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                  }
                  else
                    if (!/^[0-9]+$/.test(a)) {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                    else {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                }}
              />
            </div>
            {isamountemptyerror ? <div className="invalid_entry">Please enter the Remarks!</div> : null}
            <div className="invalid_entry">{amount.error}</div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextFieldWithRef
                label={"Enter Device!"}
                labelid={"Device"}
                isActive={amount.isActive}
                id="booking_amount"
                type="text"
                min="1"
                pattern="^(?=.*[0-9])[- +()0-9]+$"
                name={`data.Amount`}
                value={amount.value}
                required
                className={isamountemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                onChange={(event: any) => {
                  setamountemptyerror(false)
                  let a = event.target.value
                  if (a.length === 0) {
                    setamount({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                  }
                  else
                    if (!/^[0-9]+$/.test(a)) {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                    else {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                }}
              />
            </div>
            {isamountemptyerror ? <div className="invalid_entry">Please enter the Device!</div> : null}
            <div className="invalid_entry">{amount.error}</div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextFieldWithRef
                label={"Enter Remarks!"}
                labelid={"Remarks"}
                isActive={amount.isActive}
                id="booking_amount"
                type="text"
                min="1"
                pattern="^(?=.*[0-9])[- +()0-9]+$"
                name={`data.Amount`}
                value={amount.value}
                required
                className={isamountemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                onChange={(event: any) => {
                  setamountemptyerror(false)
                  let a = event.target.value
                  if (a.length === 0) {
                    setamount({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                  }
                  else
                    if (!/^[0-9]+$/.test(a)) {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                    else {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                }}
              />
            </div>
            {isamountemptyerror ? <div className="invalid_entry">Please enter the Device!</div> : null}
            <div className="invalid_entry">{amount.error}</div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextFieldWithRef
                label={"Enter Image Link!"}
                labelid={"Image_Link"}
                isActive={amount.isActive}
                id="booking_amount"
                type="text"
                min="1"
                pattern="^(?=.*[0-9])[- +()0-9]+$"
                name={`data.Amount`}
                value={amount.value}
                required
                className={isamountemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
                onChange={(event: any) => {
                  setamountemptyerror(false)
                  let a = event.target.value
                  if (a.length === 0) {
                    setamount({ "value": "", "error": "", "isvalid": "false", "isActive": false })
                  }
                  else
                    if (!/^[0-9]+$/.test(a)) {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                    else {
                      setamount({ "value": a.replace(/[^0-9]/, ''), "error": "", "isvalid": "false", "isActive": true })
                    }
                }}
              />
            </div>
            {isamountemptyerror ? <div className="invalid_entry">Please enter the Device!</div> : null}
            <div className="invalid_entry">{amount.error}</div>
          </div>



        </form>

        <div className="add_button_container">
          <button
            onClick={() => {
              let Name = String(document.getElementById("input_value1").value);
              let DayNight = String(document.getElementById("slot").value);
              let BracketCombination = String(document.getElementById("bracket_combination").value);
              // let Num = String(document.getElementById("myNumber").value);
              let Amount = String(document.getElementById("booking_amount").value);
              if (Validate()) {
                setshowtable(true)
                let temp = {
                  "Name": Name,
                  "BookedDate": parsetime(startDate),
                  "DayNight": DayNight,
                  "BracketCombination": BracketCombination,
                  "Number": String(document.getElementById("myNumber").value),
                  "Amount": Amount,
                }
                updateinputdata(temp)
              }
            }}
            className="add_edit_button">
            <div className="add_edit_buttontext">Add</div>
          </button>
        </div>

        {showtable ?
          <><div className="internal_table">

            <table id='internal_table'>
              <thead>
                <tr>{renderHeader()}</tr>
              </thead>
              <tbody>
                {
                  list.map(renderBody)
                }
              </tbody>
            </table>
          </div>
            <div className='senddiv'>
              <img onClick={() => {
                console.log("***SEND***")
                setpopup(true)
              }}
                className='sendicon' src={send} />
            </div></>
          :
          null
        }
      </div>

      <Footer />

    </div >

  )
}

export default AddEditTestItem
