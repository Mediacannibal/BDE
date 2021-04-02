import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import TextField from 'components/common/TextFieldWithRef';
import { addTest } from 'utils/api';


const AddEditTest = ({ setPopup }) => {
  const history = useHistory();
  const [number, setnumber] = useState(0)

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [test, settest] = useState('');
  const [portrait, setportrait] = useState('');
  const [device, setdevice] = useState('');
  const [remarks, setremarks] = useState('');

  const [isnumberemptyerror, setnumberemptyerror] = useState(false)
  const [istestemptyerror, settestemptyerror] = useState(false)
  const [isportraitemptyerror, setportraitemptyerror] = useState(false)
  const [isdeviceemptyerror, setdeviceemptyerror] = useState(false)
  const [isremarksemptyerror, setremarksemptyerror] = useState(false)

  const [inputvalue, setinputvalue] = useState("")

  const [ispopup, setispopup] = useState(false)

  const [list, setlist] = useState([{
    "number": "",
    "test": "",
    "portrait": "",
    "landscape": "",
    "device": "",
    "remarks": "",
    "image_link": ""
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
          title={"Add / Edit Test"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Number of Test"}
                    id="number_data"
                    name={`data.number`}
                    inputtype="number"
                    type="number"
                    min_length="1"
                    required={true}
                    valid={isnumberemptyerror}
                    setvalid={setnumberemptyerror}
                    value={number}
                    onChange={setnumber}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Test"}
                    id="test_data"
                    name={`data.test`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={istestemptyerror}
                    setvalid={settestemptyerror}
                    value={test}
                    onChange={settest}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Portrait"}
                    id="portrait_data"
                    name={`data.Portrait`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isportraitemptyerror}
                    setvalid={setportraitemptyerror}
                    value={portrait}
                    onChange={setportrait}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Landscape"}
                    id="landscape_data"
                    name={`data.landscape`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isportraitemptyerror}
                    setvalid={setportraitemptyerror}
                    value={portrait}
                    onChange={setportrait}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Device"}
                    id="device_data"
                    name={`data.device`}
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
                    name={`data.remarks`}
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
          title={"Add / Edit Test?"}
          desc1={"The following Test will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            console.log("***SUBMIT***", list)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            addTest(async (data: any, errorresponse: any) => {
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

export default AddEditTest
