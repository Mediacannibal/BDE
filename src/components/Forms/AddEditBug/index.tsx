import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import * as send from '../../../assets/send.svg'
import '../../../components/app.css'
import Footer from 'components/common/Footer';
import { useForm } from 'react-hook-form';
import Spinner from 'components/Common/Spinner';
import Popup from 'components/Common/Popup'
import TextField from 'components/common/TextFieldWithRef';
import { addBug } from 'utils/api';
import * as trash from '../../../assets/trash.svg'
import * as edit from '../../../assets/edit.png'

const AddEditBug = () => {
  const history = useHistory();
  const [number, setnumber] = useState(0)
  const [number00, setnumber00] = useState("00")
  const [name, setname] = useState('');
  const [amount, setamount] = useState('');

  const [isSelect, setisSelect] = useState('value')
  const [isselectslot, setisselectslot] = useState('value')
  const [bugtitle, setbugtitle] = useState('')
  const [device, setdevice] = useState('')
  const [remarks, setremarks] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  const [spinner, setspinner] = useState(false)
  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [inputvalue, setinputvalue] = useState("")


  const [emptybugtitle, setemptybugtitle] = useState(false)
  const [emptydevice, setemptydevice] = useState(false)
  const [emptyremarkse, setemptyremarkse] = useState(false)



  const [isnameemptyerror, setnameemptyerror] = useState(false)
  const [isdateemptyerror, setdateemptyerror] = useState(false)
  const [isnumberemptyerror, setnumberemptyerror] = useState(false)
  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [iscombinationemptyerror, setcombinationemptyerror] = useState(false)
  const [isamountemptyerror, setamountemptyerror] = useState(false)

  const [ispopup, setispopup] = useState(false)
  const [showtable, setshowtable] = useState(false)
  const [list, setlist] = useState([{
    "bug_title": "",
    "orientation": "",
    "device": "",
    "remarks": "",
    "image_link": "",
  }])

  const updateinputdata = (data: any) => {

    let buff = []
    list.forEach(element => {
      if (element.bug_title.length !== 0)
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
    let headerElement = ['', 'bug title', 'orientation', 'device', 'remarks', 'image', '']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const editrow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index) { a.push(x[i]) }
      else {
        setname(x[i].bug_title)
        setisselectslot(x[i].orientation)
        setisSelect(x[i].device)
        setnumber(Number(x[i].remarks))
        setamount(x[i].image_link)

        a.push(x[i])

        console.log(a)
      }
    }
    setlist(a);
  }

  const reversedate = (data: any) => {
    let date = new Date(data)
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  }

  const removerow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index)
        a.push(x[i])
    }
    setlist(a);
  }
  const renderBody = (element: any, index: any) => {

    return (
      <>
        <tr key={element.bug_title}>
          <div className='senddiv'>
            <img onClick={() => {
              editrow(element, index)
              console.log(">>>>>>>>>>>>>>>>>>", element)
            }}
              className='sendicon' src={edit} />
          </div>
          <td>{element.bug_title}</td>
          <td>{element.orientation}</td>
          <td>{element.device}</td>
          <td>{element.remarks}</td>
          <td>{element.image_link}</td>
          <div className='senddiv'>
            <img onClick={() => removerow(element, index)}
              className='sendicon' src={trash} />
          </div>
        </tr>
      </>
    )
  }

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
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
    let bug_title = String(document.getElementById("bugtitle_data").value);
    let orientation = String(document.getElementById("orientation").value);
    let device = String(document.getElementById("device_data").value);
    let remarks = String(document.getElementById("remarks_data").value);
    let image_link = String(document.getElementById("activity_input_value").value);
    let temp = true
    if (bug_title.length === 0 || orientation.length === 0 || device.length === 0 || remarks.length === 0 || image_link.length === 0) {
      temp = false
      if (bug_title.length === 0) {
        setnameemptyerror(true);
        console.log("Bug Title is empty")
      } if (orientation.length === 0)
        setslotemptyerror(true);
      console.log("Orientation is empty")
      if (device.length === 0)
        setcombinationemptyerror(true);
      console.log("device is empty")
      if (remarks.length === 0)
        setamountemptyerror(true);
      console.log("remarks is empty")
      if (image_link.length === 0)
        setamountemptyerror(true);
      console.log("image_link is empty")
    }

    return temp
  }

  const _onChangeHandler = (data: any) => {
    console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    // imageUpload(Callback, formdata)
  }

  return (

    <div className="popup_bg">
      < div className="popup_container">
        <div className="popup">
          <div className='title'>Add / Edit Bug Item</div>

          <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputfield_sub_container">
              <div className="textinput_box_container">
                <TextField
                  label={"Bug Title"}
                  id="bugtitle_data"
                  name={`data.BugTitle`}
                  inputtype="Text"
                  type="text"
                  min_length="1"
                  required={true}
                  valid={setemptybugtitle}
                  value={setbugtitle}
                  setvalue={bugtitle}
                />
              </div>
            </div>

            <div className="inputfield_sub_container">
              <div className="Booking_slot_dropdown">
                <select id="orientation" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                  required={isslotemptyerror}
                  value={isselectslot}
                  onChange={(e) => {
                    setslotemptyerror(false)
                    setisselectslot(e.target.value)
                  }}
                >
                  <option hidden value="">ORIENTATION</option>
                  <option value="DAY">LANDSCAPE</option>
                  <option value="NIGHT">PORTRAIT</option>
                </select>
              </div>
              {isslotemptyerror ? <div className="invalid_entry">Please select a Orientation!</div> : null}
            </div>

            <div className="inputfield_sub_container">
              <div className="textinput_box_container">
                <TextField
                  label={"Device"}
                  id="device_data"
                  name={`data.Device`}
                  inputtype="Text"
                  type="text"
                  min_length="1"
                  required={true}
                  valid={setemptydevice}
                  value={setdevice}
                  setvalue={device}
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
                  min_length="1"
                  required={true}
                  valid={setemptyremarkse}
                  value={setremarks}
                  setvalue={remarks}
                />
              </div>
            </div>

            <div className="inputfield_sub_container">
              <div className="upload-wrap">
                <button type="button" className="nice-button">upload_file</button>
                <input type="file" name="file" className="upload-btn" id="activity_input_value" onChange={_onChangeHandler} />
              </div>
              {
                (inputvalue !== null) ? <div>
                  <img
                    className='activity_selectedimage' src={inputvalue} />
                </div> : null
              }
            </div>
          </form>

          {/* <div className="add_button_container">
            <button
              onClick={() => {
                let bug_title = String(document.getElementById("bugtitle_data").value);
                let orientation = String(document.getElementById("orientation").value);
                let device = String(document.getElementById("device_data").value);
                let remarks = String(document.getElementById("remarks_data").value);
                let image_link = String(document.getElementById("activity_input_value").value);
                if (Validate()) {
                  setshowtable(true)
                  let temp = {
                    "bug_title": bug_title,
                    "orientation": orientation,
                    "device": device,
                    "remarks": remarks,
                    "image_link": image_link,
                  }
                  updateinputdata(temp)

                  setname('')
                  setisselectslot('value')
                  setisSelect('value')
                  setnumber(0)
                  setamount('')
                }
              }}
              className="add_edit_button">
              <div className="add_edit_buttontext">Add</div>
            </button>
          </div> */}

          <div className='senddiv'>
            <img onClick={() => {
              console.log("***SEND***")
              setispopup(true)
            }}
              className='sendicon' src={send} />
          </div>

          <div
            onClick={() => {
              console.log("***CANCEL***")
              history.push("/BugList")
            }}
            className='menu_popup_cancel_button'>x</div>

          {ispopup ?
            <>
              <div>
                <Popup
                  title={"Add / Edit Bug?"}
                  desc1={"The following Bug will be placed!"}
                  desc2={"Please click 'Confirm' to proceed?"}
                  listitems2={list}
                  confirmClick1={() => {
                    console.log("***SUBMIT***", list)
                    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
                    addBug(async (data: any, errorresponse: any) => {
                      if (data.status === 200) {
                        setispopup(false)
                        console.log('Sucess ' + JSON.stringify(data));
                        window.location.reload()
                        // alert("successfully added")
                        setbackendresponse("Successfully Added!")
                        setbackendresponse_popup(true)
                      } else {
                        setispopup(false)
                        setbackendresponse("Failed, Please Try Again!")
                        console.log('error ' + JSON.stringify(data));
                        console.log('error ' + JSON.stringify(errorresponse));
                      }
                    }, token, list)
                  }}
                  cancelClick2={() => {
                    console.log("***CANCEL***")
                    setispopup(false)
                  }}
                />
              </div>
            </>
            :
            null
          }
        </div>
      </div >
    </div >

  )
}

export default AddEditBug
