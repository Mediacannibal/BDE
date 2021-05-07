import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import McInput from 'components/Common/McInput';
import { createMainTask } from 'utils/api';
import { useAuth } from 'store/authStore';

const AddEditBug = ({ setPopup }) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [bug_title, setbug_title] = useState('')
  const [orientation, setorientation] = useState('')
  const [device, setdevice] = useState('')
  const [description, setdescription] = useState('')
  const [assignee, setassignee] = useState('')
  const [image_link, setimage_link] = useState('')

  const [android, setandroid] = useState('')
  const [ios, setios] = useState('')
  const [browser, setbrowser] = useState('')

  const [addremoveandroid, setaddremoveandroid] = useState(false)
  const [addremoveios, setaddremoveios] = useState(false)
  const [addremovebrowser, setaddremovebrowser] = useState(false)

  const [androidcheckbox, setandroidcheckbox] = useState(false)
  const [ioscheckbox, setioscheckbox] = useState(false)
  const [browsercheckbox, setbrowsercheckbox] = useState(false)


  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [inputvalue, setinputvalue] = useState("")

  const [isdescriptionvalid, setdescriptionvalid] = useState(false)

  const [bugtitlevalid, setbugtitlevalid] = useState(false)
  const [devicevalid, setdevicevalid] = useState(false)
  const [remarksvalid, setremarksvalid] = useState(false)
  const [orientationvalid, setorientationvalid] = useState(false)
  const [isiosvalid, setiosvalid] = useState(false)
  const [isandroidvalid, setandroidvalid] = useState(false)
  const [isbrowservalid, setbrowservalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)
  const [potraitcheckbox, setpotraitcheckbox] = useState('')
  const [potraitcheckboxvalid, setpotraitcheckboxvalid] = useState(false)


  const [ispopup, setispopup] = useState(false)
  const [list, setlist] = useState([{
    "bug_title": bug_title,
    "orientation": orientation,
    "device": device,
    "description": description,
    "assignee": assignee,
    "image_link": image_link,
  }])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data);
  };
  // console.log(errors);

  const _onChangeHandler = (data: any) => {
    // console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    // imageUpload(Callback, formdata)
  }

  const Validate = () => {


    if (bugtitlevalid === true
      && devicevalid === true
      && remarksvalid === true
      && orientationvalid === true
      && potraitcheckboxvalid === true
    ) {
      setispopup(true)
    }
    else {
      setPreSendValidator(true)
    }
  }

  return (
    <>
      {ispopup ?
        <Popup
          title={"Add / Edit Bug?"}
          desc1={"The following Bug will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            let data = [];
            let object = {
              "bug_title": bug_title,
              "orientation": orientation,
              "device": device,
              "description": description,
              "assignee": assignee,
              "image_link": image_link,
            }
            data.push(object)
            // console.log("***SUBMIT***", list)
            createMainTask(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                // console.log('Sucess ' + JSON.stringify(data));
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
            }, auth, list)
          }}
          cancelClick={() => {
            console.log("***CANCEL***")
            setispopup(false)
          }}
        />
        :
        <Popup
          title={"Add / Edit Bug"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"checkbox"}
                    name={"Portrait"}
                    id="Portrait"
                    required={true}
                    valid={setpotraitcheckboxvalid}
                    sendcheck={preSendValidator}
                    value={potraitcheckbox}
                    onchange={setpotraitcheckbox}
                    options={[
                      { "key": "0", "value": "Portrait" },
                      { "key": "1", "value": "Landscape" },
                    ]}
                  />
                </div>
              </div>

              <div className="user_band">

              </div>

              <div className="input_devices">
                <div className="input_checkbox">
                  <div className="checkbox_sub_container">
                    <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                      onChange={(e) => {
                        // console.log(e);
                        setandroidcheckbox(!androidcheckbox)
                      }} />
                    <div className="checkbox_text">Android</div>
                  </div>

                  {androidcheckbox &&
                    <div className="addremove_container"
                      onClick={() => {
                        setaddremoveandroid(!addremoveandroid)
                      }}>
                      <div className="addremove_text">
                        {addremoveandroid ? "Remove Device" : "Add Device"}
                      </div>
                    </div>
                  }

                  {addremoveandroid ?
                    <div className="inputfield_sub_container">
                      <div className="textinput_box_container">
                        <McInput
                          label={"Android"}
                          id="android_data"
                          name={`data.android`}
                          inputtype="Text"
                          type="text"
                          min_length="3"
                          required={true}
                          valid={isandroidvalid}
                          setvalid={setandroidvalid}
                          value={android}
                          onChange={setandroid}
                        />
                      </div>
                    </div>
                    :
                    null
                  }
                </div>

                <div className="input_checkbox">
                  <div className="checkbox_sub_container">
                    <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                      onChange={(e) => {
                        // console.log(e);
                        setioscheckbox(!ioscheckbox)
                      }} />
                    <div className="checkbox_text">IOS</div>
                  </div>

                  {ioscheckbox &&
                    <div className="addremove_container"
                      onClick={() => {
                        setaddremoveios(!addremoveios)
                      }}>
                      <div className="addremove_text">
                        {addremoveios ? "Remove Device" : "Add Device"}
                      </div>
                    </div>
                  }

                  {addremoveios ?
                    <div className="inputfield_sub_container">
                      <div className="textinput_box_container">
                        <McInput
                          label={"IOS"}
                          id="ios_data"
                          name={`data.ios`}
                          inputtype="Text"
                          type="text"
                          min_length="3"
                          required={true}
                          valid={isiosvalid}
                          setvalid={setiosvalid}
                          value={ios}
                          onChange={setios} />
                      </div>
                    </div>
                    :
                    null}
                </div>

                <div className="input_checkbox">
                  <div className="checkbox_sub_container">
                    <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                      onChange={(e) => {
                        // console.log(e);
                        setbrowsercheckbox(!browsercheckbox)
                      }} />
                    <div className="checkbox_text">Browser</div>
                  </div>

                  {browsercheckbox &&
                    <div className="addremove_container"
                      onClick={() => {
                        setaddremovebrowser(!addremovebrowser)
                      }}>
                      <div className="addremove_text">
                        {addremovebrowser ? "Remove Device" : "Add Device"}
                      </div>
                    </div>
                  }

                  {addremovebrowser ?
                    <div className="inputfield_sub_container">
                      <div className="textinput_box_container">
                        <McInput
                          label={"Browser"}
                          id="browser_data"
                          name={`data.browser`}
                          inputtype="Text"
                          type="text"
                          min_length="3"
                          required={true}
                          valid={isbrowservalid}
                          setvalid={setbrowservalid}
                          value={browser}
                          onChange={setbrowser}
                        />
                      </div>
                    </div>
                    :
                    null}
                </div>
              </div>

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
                    valid={setbugtitlevalid}
                    sendcheck={preSendValidator}
                    value={bug_title}
                    onchange={setbug_title}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Description"}
                    id="description_data"
                    name={`data.Description`}
                    inputtype="Text"
                    type="textarea"
                    min_length="3"
                    required={true}
                    valid={setdescriptionvalid}
                    sendcheck={preSendValidator}
                    value={description}
                    onchange={setdescription}
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
            Validate()
          }}
          cancelClick={setPopup}
        />

      }
    </>
  )
}

export default AddEditBug;
