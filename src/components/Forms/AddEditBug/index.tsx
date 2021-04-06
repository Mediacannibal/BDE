import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import McInput from 'components/Common/McInput';
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

  const [isbugtitleemptyerror, setbugtitleemptyerror] = useState(true)
  const [isdeviceemptyerror, setdeviceemptyerror] = useState(true)
  const [isremarksemptyerror, setremarksemptyerror] = useState(true)
  const [isslotemptyerror, setslotemptyerror] = useState(true)

  const [ispopup, setispopup] = useState(false)
  const [list, setlist] = useState([{
    "bug_title": "",
    "orientation": "",
    "device": "",
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
      {!ispopup ?
        <Popup
          title={"Add / Edit Bug"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
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

<<<<<<< HEAD
              <div className="input_checkbox">
                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Portrait" className="checkbox" name="Portrait" value="Portrait" />
                  <div className="checkbox_text">Portrait</div>
                </div>

                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape" />
                  <div className="checkbox_text">Landscape</div>
                </div>
              </div>

              <div className="user_band">

=======
              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <McInput
                    type={"picker"}
                    name={"ORIENTATION"}
                    id="orientation"
                    required={true}
                    valid={isslotemptyerror}
                    setvalid={setslotemptyerror}
                    value={isselectslot}
                    onchange={setisselectslot}
                    options={[
                      { "key": "0", "value": "LANDSCAPE" },
                      { "key": "1", "value": "PORTRAIT" }]}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
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
                  <McInput
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
>>>>>>> 4d584de600df65b17574ea5ec0e9c4efe9987739
              </div>

              <div className="input_devices">
                <div className="input_checkbox">
                  <div className="checkbox_sub_container">
                    <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                      onChange={(e) => {
                        console.log(e);
                        // setandroidcheckbox(!androidcheckbox);
                      }} />
                    <div className="checkbox_text">Android</div>
                  </div>

                  {/* {androidcheckbox ?
                      <div className="inputfield_sub_container">
                        <div className="textinput_box_container">
                          <TextField
                            label={"Android"}
                            id="android_data"
                            name={`data.android`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            valid={isandroidemptyerror}
                            setvalid={setandroidemptyerror}
                            value={android}
                            onChange={setandroid} />
                        </div>
                      </div>
                      :
                      null} */}
                </div>

                <div className="input_checkbox">
                  <div className="checkbox_sub_container">
                    <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                      onChange={(e) => {
                        console.log(e);
                        // setioscheckbox(!ioscheckbox);
                      }} />
                    <div className="checkbox_text">IOS</div>
                  </div>

                  {/* {ioscheckbox ?
                        <div className="inputfield_sub_container">
                          <div className="textinput_box_container">
                            <TextField
                              label={"IOS"}
                              id="ios_data"
                              name={`data.ios`}
                              inputtype="Text"
                              type="text"
                              min_length="3"
                              required={true}
                              valid={isiosemptyerror}
                              setvalid={setiosemptyerror}
                              value={ios}
                              onChange={setios} />
                          </div>
                        </div>
                        :
                        null} */}

                </div>

                <div className="input_checkbox">
                  <div className="checkbox_sub_container">
                    <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                      onChange={(e) => {
                        console.log(e);
                        // setbrowsercheckbox(!browsercheckbox);
                      }} />
                    <div className="checkbox_text">Browser</div>
                  </div>

                  {/* {browsercheckbox ?
                      <div className="inputfield_sub_container">
                        <div className="textinput_box_container">
                          <TextField
                            label={"Browser"}
                            id="browser_data"
                            name={`data.browser`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            valid={isbrowseremptyerror}
                            setvalid={setbrowseremptyerror}
                            value={browser}
                            onChange={setbrowser} />
                        </div>
                      </div>
                      :
                      null} */}
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
