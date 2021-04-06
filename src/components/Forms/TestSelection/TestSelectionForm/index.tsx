import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import McInput from 'components/Common/McInput';
import * as close from '../../../../assets/close.png'

const TestSelectionForm = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm();

  const [project_name, setproject_name] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')

  const [project_nameemptyerror, setproject_nameemptyerror] = useState(true)
  const [titleemptyerror, settitleemptyerror] = useState(true)
  const [descriptionemptyerror, setdescriptionemptyerror] = useState(true)


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

                </div >
              </div >

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">

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
                  valid={descriptionemptyerror}
                  setvalid={setdescriptionemptyerror}
                  value={description}
                  onChange={setdescription}
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
                      id="titledata"
                      name={`data.title`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={titleemptyerror}
                      setvalid={settitleemptyerror}
                      value={project_name}
                      onChange={setproject_name}
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
                      id="titledata"
                      name={`data.title`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={titleemptyerror}
                      setvalid={settitleemptyerror}
                      value={project_name}
                      onChange={setproject_name}
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
                      id="titledata"
                      name={`data.title`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      valid={titleemptyerror}
                      setvalid={settitleemptyerror}
                      value={project_name}
                      onChange={setproject_name}
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
                    id="description_data"
                    name={`data.description`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={descriptionemptyerror}
                    setvalid={setdescriptionemptyerror}
                    value={description}
                    onChange={setdescription}
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

                  }}
                >Previous</div>
                <div
                  className='popup_submit_button'
                  onClick={() => {

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
