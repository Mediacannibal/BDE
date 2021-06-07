import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { createMainTask, fileupload, getProject } from 'utils/api';
import McInput from 'components/Common/McInput';
import { useAuth } from 'store/authStore';

const AddEditTask = ({ setPopup, projectName, projectTaskType }) => {
  const { auth } = useAuth();
  const history = useHistory();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [project_ref, setproject_ref] = useState(projectName)
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [assignee, setassignee] = useState('')
  const [task_type, settask_type] = useState(projectTaskType)
  const [android, setandroid] = useState('')
  const [ios, setios] = useState('')
  const [browser, setbrowser] = useState('')
  const [api_name, setapi_name] = useState('')
  const [path, setpath] = useState('')
  const [request, setrequest] = useState('')
  const [response, setresponse] = useState('')

  const [development, setdevelopment] = useState('')
  const [test_title, settest_title] = useState('');

  const [project_type, setproject_type] = useState('')
  const [project_title, setproject_title] = useState('')
  const [project_description, setproject_description] = useState('')

  const [project_typevalid, setproject_typevalid] = useState(false)
  const [titlevalid, setTitlevalid] = useState(false)
  const [descriptionvaild, setDescriptionvaild] = useState(false)

  const [addremoveandroid, setaddremoveandroid] = useState(false)
  const [addremoveios, setaddremoveios] = useState(false)
  const [addremovebrowser, setaddremovebrowser] = useState(false)

  const [androidcheckbox, setandroidcheckbox] = useState(false)
  const [ioscheckbox, setioscheckbox] = useState(false)
  const [browsercheckbox, setbrowsercheckbox] = useState(false)

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [domain, setdomain] = useState('')
  const [priority, setpriority] = useState('')
  const [apiselect, setapiselect] = useState('')
  const [potraitcheckbox, setpotraitcheckbox] = useState('')

  const [isproject_namevalid, setproject_namevalid] = useState(false)
  const [isiosvalid, setiosvalid] = useState(false)
  const [isandroidvalid, setandroidvalid] = useState(false)
  const [isbrowservalid, setbrowservalid] = useState(false)
  const [istask_typevalid, settask_typevalid] = useState(false)
  const [istitlevalid, settitlevalid] = useState(false)
  const [isdescriptionvalid, setdescriptionvalid] = useState(false)
  const [isassigneevalid, setassigneevalid] = useState(false)
  const [isapi_namevalid, setapi_namevalid] = useState(false)
  const [ispathvalid, setpathvalid] = useState(false)
  const [isrequestvalid, setrequestvalid] = useState(false)
  const [isresponsevalid, setresponsevalid] = useState(false)
  const [ispriorityvalid, setpriorityvalid] = useState(false)
  const [isdomainvalid, setdomainvalid] = useState(false)
  const [apiselectvalid, setapiselectvalid] = useState(false)
  const [potraitcheckboxvalid, setpotraitcheckboxvalid] = useState(false)
  const [developmentvalid, setdevelopmentvalid] = useState(false)
  const [istesttitlevalid, settesttitlevalid] = useState(false)
  const [preSendValidator, setPreSendValidator] = useState(false)
  const [ispopup, setispopup] = useState(false)
  const [dataUri, setDataUri] = useState('');

  const [listItems, setlistItems] = useState([])
  const [spinner, setspinner] = useState(false)

  const [users, setusers] = useState('all')

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data);
  };
  // console.log(errors);

  const _onChangeHandler = (data: any, file: any) => {
    // console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    fileupload(Callback, auth, formdata, file)
  }

  const Callback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      // console.log("respnse :", data.data.result.file_url)
      setDataUri(data.data.result.file_url)
    }
    else {
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  };

  const Validate = () => {

    if (isproject_namevalid === true
      || istitlevalid === true
      || istask_typevalid === true
      || isdescriptionvalid === true
      || isassigneevalid === true
      || isapi_namevalid === true
      || ispathvalid === true
      || isrequestvalid === true
      || isresponsevalid === true
      || ispriorityvalid === true
      || isdomainvalid === true
      || apiselectvalid === true
      || isandroidvalid === true
      || isiosvalid === true
      || potraitcheckboxvalid === true
      || project_typevalid === true
      || titlevalid === true
      || descriptionvaild === true
      || istesttitlevalid === true
    ) {
      setispopup(true)
    }
    else {
      setPreSendValidator(true)
    }

  }

  useEffect(() => {
    // console.log("Initailized Project Name: ", projectName)
    // console.log("Initailized Feature Task: ", projectTaskType)
    if (!Colour) {
      loadColour();
    }

    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, users)
  }, [])

  const Project_name = () => {
    let a: any = [];
    listItems.forEach(element => {
      let data = {
        "key": element.id,
        "value": element.title
      }
      a.push(data);
    });
    return a
  }

  return (
    <>
      {ispopup ?
        <Popup
          title={"Add / Edit Task?"}
          desc1={"The following Task will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            let data = [];
            let object = {
              "project_ref": project_ref,
              "title": title,
              "task_type": task_type,
              "priority": priority,
              "domain": domain,
              "description": description,
              "assignee": assignee,
            }
            data.push(object)
            // console.log("***SUBMIT***", data)
            createMainTask(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                // console.log('Sucess========= ' + JSON.stringify(data));
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
            }, auth, data[0])
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

              <div className="addedit_task_div_wrapper">

                <div className="addedit_task_container1">

                  <div className="inputfield_sub_container">
                    <div >
                      {(projectName === undefined) ?
                        <McInput
                          type={"picker"}
                          name={"PROJECT"}
                          id="project_ref"
                          required={true}
                          valid={setproject_namevalid}
                          sendcheck={preSendValidator}
                          value={project_ref}
                          onchange={setproject_ref}
                          options={
                            Project_name()
                          }
                        />
                        :
                        <div>{"Project: " + projectName}</div>
                      }
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div >
                      {(projectTaskType === undefined) ?
                        <McInput
                          type={"picker"}
                          name={"TASK TYPE"}
                          id="task_type"
                          required={true}
                          valid={settask_typevalid}
                          sendcheck={preSendValidator}
                          value={task_type}
                          onchange={settask_type}
                          options={[
                            { "key": "0", "value": "PROJECT" },
                            { "key": "1", "value": "FEATURE" },
                            { "key": "2", "value": "TEST" },
                            { "key": "3", "value": "BUG" },
                            { "key": "4", "value": "UPDATE" },
                          ]}
                        />
                        :
                        <div>
                          {"Task Type: " + projectTaskType}
                        </div>
                      }
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div >
                      <McInput
                        type={"picker"}
                        name={"PROIRITY"}
                        id="priority"
                        required={true}
                        valid={setpriorityvalid}
                        sendcheck={preSendValidator}
                        value={priority}
                        onchange={setpriority}
                        options={[
                          { "key": "0", "value": "LOW" },
                          { "key": "1", "value": "NORMAL" },
                          { "key": "0", "value": "HIGH" },
                          { "key": "0", "value": "URGENT" },
                          { "key": "0", "value": "EMERGENCY" },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="inputfield_sub_container">
                    <div >
                      <McInput
                        type={"picker"}
                        name={"DOMAIN"}
                        id="domain"
                        required={true}
                        valid={setdomainvalid}
                        sendcheck={preSendValidator}
                        value={domain}
                        onchange={setdomain}
                        options={[
                          { "key": "0", "value": "FRONT END" },
                          { "key": "1", "value": "BACK END" },
                          { "key": "0", "value": "UI" },
                          { "key": "0", "value": "DEV OPS" }
                        ]}
                      />
                    </div>
                  </div>

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
                    <div className="fileupload_with_preview">
                      <div className="upload-wrap">
                        <button type="button" className="nice-button">File links</button>
                        <input type="file" name="file" className="upload-btn" id="activity_input_value" onChange={_onChangeHandler} />
                      </div>
                      {
                        (dataUri.length !== 0) && <div>
                          <img
                            className='activity_selectedimage' src={dataUri} />
                        </div>
                      }
                    </div>
                  </div>

                </div>

                <div className="addedit_task_container1">
                  {(task_type === "PROJECT") ?
                    <>
                      <div className="inputfield_sub_container">
                        <div >
                          <McInput
                            type={"picker"}
                            name={"PROJECT TYPE"}
                            id="project_type_data"
                            required={true}
                            valid={setproject_typevalid}
                            sendcheck={preSendValidator}
                            value={project_type}
                            onchange={setproject_type}
                            options={[
                              { "key": "0", "value": "DEVELOPMENT" },
                              { "key": "1", "value": "DESIGN" },
                              { "key": "1", "value": "MARKETING" }]}
                          />
                        </div>
                      </div>

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
                            valid={setTitlevalid}
                            sendcheck={preSendValidator}
                            value={project_title}
                            onchange={setproject_title}
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
                            valid={setDescriptionvaild}
                            sendcheck={preSendValidator}
                            value={project_description}
                            onchange={setproject_description}
                          />
                        </div>
                      </div>

                    </>
                    :
                    null
                  }
                </div>

                <div className="addedit_task_container1">
                  {(task_type === "TEST") ?
                    <>
                      <div className="inputfield_sub_container">
                        <div >
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
                              { "key": "0", "value": "DEVELOPMENT" }
                            ]} />
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
                            valid={settesttitlevalid}
                            sendcheck={preSendValidator}
                            value={test_title}
                            onchange={settest_title} />
                        </div>
                      </div>

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

                      {/* <div className="input_checkbox">
                        <div className="checkbox_sub_container">
                          <input type="checkbox" id="Portrait" className="checkbox" name="Portrait" value="Portrait" />
                          <div className="checkbox_text">Portrait</div>
                        </div>

                        <div className="checkbox_sub_container">
                          <input type="checkbox" id="Landscape" className="checkbox" name="landscape" value="Landscape" />
                          <div className="checkbox_text">Landscape</div>
                        </div>
                      </div> */}

                      <div className="user_band" style={{ backgroundColor: colourObj.color_10 }}>

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
                            null
                          }
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
                                {addremovebrowser ? "Remove Detail" : "Add Detail"}
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
                    </>
                    : null
                  }
                </div>

                <div className="addedit_task_container1">

                  {(domain === "FRONT END") ?
                    <>
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
                              <div className="addremove_text" style={{ color: colourObj.color_1 }}>
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
                            null
                          }
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
                                {addremovebrowser ? "Remove Detail" : "Add Detail"}
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
                    </>
                    :
                    null
                  }

                </div>

                <div className="addedit_task_container1">

                  {domain === "BACK END" ?
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
                        <div >
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

                </div>
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

export default AddEditTask;
