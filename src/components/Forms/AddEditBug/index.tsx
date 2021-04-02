import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import TextField from 'components/common/TextFieldWithRef';
import { addBug } from 'utils/api';


const AddEditBug = ({ setPopup }) => {
  const history = useHistory();

  const [isselectslot, setisselectslot] = useState('value')
  const [bugtitle, setbugtitle] = useState('')
  const [device, setdevice] = useState('')
  const [remarks, setremarks] = useState('')

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [inputvalue, setinputvalue] = useState("")

  const [isbugtitleemptyerror, setbugtitleemptyerror] = useState(false)
  const [isdeviceemptyerror, setdeviceemptyerror] = useState(false)
  const [isremarksemptyerror, setremarksemptyerror] = useState(false)
  const [isslotemptyerror, setslotemptyerror] = useState(false)

  const [ispopup, setispopup] = useState(false)
  const [list, setlist] = useState([{
    "bug_title": "",
    "orientation": "",
    "device": "",
    "remarks": "",
    "image_link": "",
  }])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };
  console.log(errors);

  const _onChangeHandler = (data: any) => {
    console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    // imageUpload(Callback, formdata)
  }

  return (
    <>
      { !ispopup ?
        <Popup
          title={"Add / Edit Bug"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Bug Title"}
                    id="bugtitle_data"
                    name={`data.BugTitle`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isbugtitleemptyerror}
                    setvalid={setbugtitleemptyerror}
                    value={bugtitle}
                    onChange={setbugtitle}
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
                    min_length="3"
                    required={true}
                    valid={isdeviceemptyerror}
                    setvalid={setdeviceemptyerror}
                    value={device}
                    onChange={setdevice}
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
                    valid={isremarksemptyerror}
                    setvalid={setremarksemptyerror}
                    value={remarks}
                    onChange={setremarks}
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
          }
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
          }}
          cancelClick={setPopup}
        />
        :
        <Popup
          title={"Add / Edit Bug?"}
          desc1={"The following Bug will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
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
          cancelClick={() => {
            console.log("***CANCEL***")
            setispopup(false)
          }}
        />
      }
    </>
  )
}

export default AddEditBug
