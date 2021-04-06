import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { createMainTask, taskAdd } from 'utils/api';
import McInput from 'components/Common/McInput';


const AddEditTask = ({ setPopup }) => {
  const history = useHistory();

  const [project_ref, setproject_ref] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [assignee, setassignee] = useState('')
  const [android, setandroid] = useState('')
  const [ios, setios] = useState('')
  const [browser, setbrowser] = useState('')
  const [api_name, setapi_name] = useState('')
  const [path, setpath] = useState('')
  const [request, setrequest] = useState('')
  const [response, setresponse] = useState('')

  const [androidcheckbox, setandroidcheckbox] = useState(false)
  const [ioscheckbox, setioscheckbox] = useState(false)
  const [browsercheckbox, setbrowsercheckbox] = useState(false)

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [inputvalue, setinputvalue] = useState("")
  const [isfrontend, setisfrontend] = useState(false)
  const [isbackend, setisbackend] = useState(false)



  const [selectdomain, setselectdomain] = useState('')
  const [isselectslot, setisselectslot] = useState('')
  const [apiselect, setapiselect] = useState('')

  const [isproject_namevalid, setproject_namevalid] = useState(false)
  const [istitlevalid, settitlevalid] = useState(false)
  const [isdescriptionvalid, setdescriptionvalid] = useState(false)
  const [isassigneevalid, setassigneevalid] = useState(false)
  const [isapi_namevalid, setapi_namevalid] = useState(false)
  const [ispathvalid, setpathvalid] = useState(false)
  const [isrequestvalid, setrequestvalid] = useState(false)
  const [isresponsevalid, setresponsevalid] = useState(false)
  const [isslotvalid, setslotvalid] = useState(false)
  const [isdomainvalid, setdomainvalid] = useState(false)
  const [apiselectvalid, setapiselectvalid] = useState(false)



  const [preSendValidator, setPreSendValidator] = useState(false)

  const [ispopup, setispopup] = useState(false)

  const [list, setlist] = useState([{
    "project_ref": "",
    "title": "",
    "task_type": "",
    "status": "",
    "domain": "",
    "description": "",
    "assignee": "",
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

    console.log("***VALIDATE***")
    console.log(isselectslot, title, description)

    if (isproject_namevalid === true
      && istitlevalid === true
      && isdescriptionvalid === true
      && isassigneevalid === true
      && isapi_namevalid === true
      && ispathvalid === true
      && isrequestvalid === true
      && isresponsevalid === true
      && isslotvalid === true
      && isdomainvalid === true
      && apiselectvalid === true
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
          title={"Add / Edit Task?"}
          desc1={"The following Task will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            console.log("***SUBMIT***", list)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            createMainTask(async (data: any, errorresponse: any) => {
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
          title={"Add / Edit Task"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Project Name"}
                    id="project_name_data"
                    name={`data.project_name`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setproject_namevalid}
                    sendcheck={preSendValidator}
                    value={project_ref}
                    onchange={setproject_ref}
                  />
                </div >
              </div >

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Title"}
                    id="title_data"
                    name={`data.Title`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={settitlevalid}
                    sendcheck={preSendValidator}
                    value={title}
                    onchange={settitle}
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
                    type="text"
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
                <div className="Booking_slot_dropdown">
                  <McInput
                    type={"picker"}
                    name={"TASK TYPE"}
                    id="task_type"
                    required={true}
                    valid={setslotvalid}
                    sendcheck={preSendValidator}
                    value={isselectslot}
                    onchange={setisselectslot}
                    options={[
                      { "key": "0", "value": "FEATURE" },
                      { "key": "1", "value": "TEST" },
                      { "key": "0", "value": "BUG" }]}
                  />
                </div>
              </div>


              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <McInput
                    type={"picker"}
                    name={"DOMAIN"}
                    id="domain"
                    required={true}
                    valid={setdomainvalid}
                    sendcheck={preSendValidator}
                    value={selectdomain}
                    onchange={setselectdomain}
                    options={[
                      { "key": "0", "value": "FRONT END" },
                      { "key": "1", "value": "BACK END" },
                      { "key": "0", "value": "UI" },
                      { "key": "0", "value": "DEV OPS" }]}
                  />
                </div>
              </div>

              {(selectdomain === "FRONT END") ?
                <>
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
                            setandroidcheckbox(!androidcheckbox);
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
                            valid={isandroidvalid}
                            setvalid={setandroidvalid}
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
                            setioscheckbox(!ioscheckbox);
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
                              valid={isiosvalid}
                              setvalid={setiosvalid}
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
                            setbrowsercheckbox(!browsercheckbox);
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
                            valid={isbrowservalid}
                            setvalid={setbrowservalid}
                            value={browser}
                            onChange={setbrowser} />
                        </div>
                      </div>
                      :
                      null} */}
                    </div>
                  </div>
                </>
                :
                null
              }

              {selectdomain === "BACK END" ?
                <>
                  <div className="inputfield_sub_container">
                    <div className="textinput_box_container">
                      <McInput
                        label={"API Name"}
                        id="api_name_data"
                        name={`data.api_name`}
                        inputtype="Text"
                        type="text"
                        min_length="3"
                        required={true}
                        valid={setapi_namevalid}
                        sendcheck={preSendValidator}
                        value={api_name}
                        onchange={setapi_name} />
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div className="Booking_slot_dropdown">
                      <McInput
                        type={"picker"}
                        name={"API METHOD"}
                        id="domain"
                        required={true}
                        valid={setapiselectvalid}
                        sendcheck={preSendValidator}
                        value={apiselect}
                        onchange={setapiselect}
                        options={[
                          { "key": "0", "value": "GET" },
                          { "key": "1", "value": "POST" },
                          { "key": "0", "value": "PUT" },
                          { "key": "0", "value": "DELETE" }]}
                      />
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div className="textinput_box_container">
                      <McInput
                        label={"Path"}
                        id="path_data"
                        name={`data.path`}
                        inputtype="Text"
                        type="text"
                        min_length="3"
                        required={true}
                        valid={setpathvalid}
                        sendcheck={preSendValidator}
                        value={path}
                        onchange={setpath} />
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div className="textinput_box_container">
                      <McInput
                        label={"Request"}
                        id="request_data"
                        name={`data.request`}
                        inputtype="Text"
                        type="text"
                        min_length="3"
                        required={true}
                        valid={setrequestvalid}
                        sendcheck={preSendValidator}
                        value={request}
                        onchange={setrequest} />
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div className="textinput_box_container">
                      <McInput
                        label={"Response"}
                        id="response_data"
                        name={`data.response`}
                        inputtype="Text"
                        type="text"
                        min_length="3"
                        required={true}
                        valid={setresponsevalid}
                        sendcheck={preSendValidator}
                        value={response}
                        onchange={setresponse} />
                    </div>
                  </div>
                </>
                :
                null
              }

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"Assignee"}
                    id="assignee_data"
                    name={`data.Assignee`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={setassigneevalid}
                    sendcheck={preSendValidator}
                    value={assignee}
                    onchange={setassignee}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="upload-wrap">
                  <button type="button" className="nice-button">File links</button>
                  <input type="file" name="file" className="upload-btn" id="activity_input_value" onChange={_onChangeHandler} />
                </div>
                {
                  (inputvalue !== null) ? <div>
                    <img
                      className='activity_selectedimage' src={inputvalue} />
                  </div> : null
                }
              </div>
            </form >
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

export default AddEditTask
