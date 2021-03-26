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
import Popup from 'components/Common/Popup'
import { postAppdata } from 'utils/api';
import TextFieldWithRef from 'components/common/TextFieldWithRef';
import TextField from 'components/common/TextFieldWithRef';


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
              <TextField
                label={"Test Name"}
                id="TestName_data"
                name={`data.TestName`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"LandScape"}
                id="LandScape_data"
                name={`data.LandScape`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Portrait"}
                id="Portrait_data"
                name={`data.Portrait`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Device"}
                id="PDevice_data"
                name={`data.Device`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Remarks"}
                id="remarks_data"
                name={`data.Remarks`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Image Link"}
                id="imagelink_data"
                name={`data.ImageLink`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
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
