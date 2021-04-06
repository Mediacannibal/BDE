import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import McInput from 'components/Common/McInput';
import { addTest } from 'utils/api';


const AddEditTest = ({ setPopup }) => {
  const history = useHistory();
  const [number, setnumber] = useState(0)

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');


  const [development, setdevelopment] = useState('')
  const [tasktype, settasktype] = useState('')



  const [test_title, settest_title] = useState('');
  const [test_description, settest_description] = useState('');

  const [developmentvalid, setdevelopmentvalid] = useState(true)
  const [titlevalid, settitlevalid] = useState(false)
  const [descriptionvalid, setdescriptionvalid] = useState(false)
  const [taskemptyerror, setaskemptyerror] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const [inputvalue, setinputvalue] = useState("")
  const [ispopup, setispopup] = useState(false)
  const [list, setlist] = useState([{
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

  const Validate = () => {


    if (developmentvalid === true
      && titlevalid === true
      && descriptionvalid === true
      && taskemptyerror === true
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
        :
        <Popup
          title={"Add / Edit Test"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <McInput
                    type={"picker"}
                    name={"DEVELOPMENT"}
                    id="usertype_data"
                    required={true}
                    valid={setdevelopmentvalid}
                    sendcheck={preSendValidator}
                    value={development}
                    onchange={setdevelopment}
                    options={[
                      { "key": "0", "value": "DEVELOPMENT" }]}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <McInput
                    type={"picker"}
                    name={"TASK TYPE"}
                    id="task_type"
                    required={true}
                    valid={setaskemptyerror}
                    sendcheck={preSendValidator}
                    value={tasktype}
                    onchange={settasktype}
                    options={[
                      { "key": "0", "value": "FEATURE" },
                      { "key": "1", "value": "TEST" },
                      { "key": "1", "value": "BUG" }]}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Test Title"}
                    id="test_title_data"
                    name={`data.test_title`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={settitlevalid}
                    sendcheck={preSendValidator}
                    value={test_title}
                    onchange={settest_title}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Test Description"}
                    id="test_description_data"
                    name={`data.test_description`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setdescriptionvalid}
                    sendcheck={preSendValidator}
                    value={test_description}
                    onchange={settest_description}
                  />
                </div>
              </div>

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
                          <McInput
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
                            <McInput
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
                          <McInput
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
            Validate()
          }}
          cancelClick={setPopup}
        />
      }
    </>
  )
}

export default AddEditTest
