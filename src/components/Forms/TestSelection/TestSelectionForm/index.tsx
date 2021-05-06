import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../../components/app.css'
import { useForm } from 'react-hook-form';
import McInput from 'components/Common/McInput';
import * as close from '../../../../assets/close.png'

const TestSelectionForm = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm();


  const [description, setdescription] = useState('')
  const [android, setandroid] = useState('')
  const [ios, setios] = useState('')
  const [browser, setbrowser] = useState('')
  const [feedback, setfeedback] = useState('')

  const [descriptionvalid, setdescriptionvalid] = useState(false)
  const [androidvalid, setandroidvalid] = useState(false)
  const [iosvalid, setiosvalid] = useState(false)
  const [browservalid, setbrowservalid] = useState(false)
  const [feedbackvalid, setfeedbackvalid] = useState(false)


  const [preSendValidator, setPreSendValidator] = useState(false)

  const [list, setlist] = useState([{
    "project_name": "",
    "title": "",
    "description": "",
    "assignee": "",
    "updated_by": "",
  }])
  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  const Validate = () => {


    if (descriptionvalid === true
      && androidvalid === true
      && iosvalid === true
      && browservalid === true
      && feedbackvalid === true
    ) {

    }
    else {
      setPreSendValidator(true)
    }


  }


  return (
    <>
      <div className="main">
        <div className="custom_body">

          <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

            <div className="popup_closecontainer">
              <img className='quiz_close' onClick={() => { history.replace('/TestingChecklist') }} src={close} />
            </div>


            <div className="name_title_div">
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  PROJECT NAME
                </div >
              </div >

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  TITLE
                </div >
              </div >
            </div>

            <div className="inputfield_sub_container">
              <div className="textinput_box_container">
                <McInput
                  label={"Description"}
                  id="description_data"
                  name={`data.description`}
                  inputtype="Text"
                  type="text"
                  min_length="3"
                  required={true}
                  valid={setdescriptionvalid}
                  sendcheck={preSendValidator}
                  value={description}
                  onchange={setdescription}
                />
              </div >
            </div >

            <div className="potrait_lanscape">

              <div className="McInput_checkbox">
                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">

                  </div >
                </div >

                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                    onChange={(e) => {
                      console.log(e)
                    }} />
                  <div className="checkbox_text">Potrait</div>
                </div>
              </div>

              <div className="McInput_checkbox">
                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">

                  </div >
                </div >

                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                    onChange={(e) => {
                      console.log(e)
                    }} />
                  <div className="checkbox_text">Landscape</div>
                </div>
              </div>

            </div>


            <div className="potrait_lanscape">

              <div className="McInput_checkbox">
                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"Android"}
                      id="androiddata"
                      name={`data.android`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setandroidvalid}
                      sendcheck={preSendValidator}
                      value={android}
                      onchange={setandroid}
                    />
                  </div >
                </div >

                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                    onChange={(e) => {
                      console.log(e)
                    }} />
                  <div className="checkbox_text">Android</div>
                </div>
              </div>

              <div className="McInput_checkbox">
                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"Ios"}
                      id="iosdata"
                      name={`data.ios`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setiosvalid}
                      sendcheck={preSendValidator}
                      value={ios}
                      onchange={setios}
                    />
                  </div >
                </div >

                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                    onChange={(e) => {
                      console.log(e)
                    }} />
                  <div className="checkbox_text">Ios</div>
                </div>
              </div>

              <div className="McInput_checkbox">
                <div className="inputfield_sub_container">
                  <div className="textinput_box_container">
                    <McInput
                      label={"Browser"}
                      id="browserdata"
                      name={`data.title`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={setbrowservalid}
                      sendcheck={preSendValidator}
                      value={browser}
                      onchange={setbrowser}
                    />
                  </div >
                </div >

                <div className="checkbox_sub_container">
                  <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape"
                    onChange={(e) => {
                      console.log(e)
                    }} />
                  <div className="checkbox_text">Browser</div>
                </div>
              </div>

            </div>


            <div className="feedback_upload_div">
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"feedback"}
                    id="feedbackdata"
                    name={`data.feedback`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setfeedbackvalid}
                    sendcheck={preSendValidator}
                    value={feedback}
                    onchange={setfeedback}
                  />
                </div >
              </div >

              <div className="upload-wrap">
                <button type="button" className="nice-button">File links</button>
                <input type="file" name="file" className="upload-btn" id="activity_input_value" />
              </div>
            </div>

            <div>

              <div className='popup_button_container'>
                <div
                  className='popup_submit_button'
                  onClick={() => {
                    Validate()
                  }}
                >Previous</div>
                <div
                  className='popup_submit_button'
                  onClick={() => {
                    Validate()
                  }}
                >Next</div>
              </div>


            </div>




          </form >
        </div>
      </div>
    </>
  )
}

export default TestSelectionForm
