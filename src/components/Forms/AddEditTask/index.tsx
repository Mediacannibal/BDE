import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { createMainTask, fileupload, getProject } from 'utils/api';
import McInput from 'components/Common/McInput';
import { useAuth } from 'store/authStore';
import { ColourObject } from 'store/ColourStore';
import { companyStore } from 'store/companyStore';
import { taskStore } from 'store/taskStore';

const AddEditTask = ({ setPopup, projectName, projectTaskType }) => {
  const { auth } = useAuth();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { company, setcompany, loadcompany } = companyStore()
  const { posttask } = taskStore()
  const history = useHistory();

  const [company_assignee_ref, setcompany_assignee_ref] = useState({})
  const [branch_assignee_ref, setbranch_assignee_ref] = useState({})
  const [project_assignee_ref, setproject_assignee_ref] = useState({})

  const [development, setdevelopment] = useState({})
  const [test_title, settest_title] = useState('');

  const [project_type, setproject_type] = useState({})
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


  const [project_ref, setproject_ref] = useState('')
  const [priority, setpriority] = useState('')
  const [task_type, settask_type] = useState('')
  const [domain, setdomain] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [status, setstatus] = useState('')
  const [remarks, setremarks] = useState('')
  const [image_link, setimage_link] = useState('')
  const [linked_logs, setlinked_logs] = useState('')
  const [time_spent, settime_spent] = useState('')
  const [parent_child, setparent_child] = useState('')
  const [open_id, setopen_id] = useState('')
  const [open_type, setopen_type] = useState('')
  const [dependencies, setdependencies] = useState('')
  const [milestone, setmilestone] = useState(false)
  const [progress, setprogress] = useState('')
  const [start_date, setstart_date] = useState('')
  const [end_date, setend_date] = useState('')

  const [f_domain, setf_domain] = useState('')

  const [portrait, setportrait] = useState(false)
  const [landscape, setlandscape] = useState(false)
  const [ios, setios] = useState('')
  const [android, setandroid] = useState('')
  const [browser, setbrowser] = useState('')

  const [api_name, setapi_name] = useState('')
  const [api_method, setapi_method] = useState('')
  const [path, setpath] = useState('')
  const [request_data, setrequest_data] = useState('')
  const [response_data, setresponse_data] = useState('')



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


  useEffect(() => {
    if (!Colour) {
      loadColour();
    }

    if (!company) {
      loadcompany();
    }

    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
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
          popup_type={"confirm"}
          title={"Add / Edit Task?"}
          desc1={"The following Task will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {

            let data = {
              "project_ref": project_ref?.key,
              "priority": priority?.value,
              "task_type": task_type?.value,
              "domain": domain?.value,
              "title": title,
              "description": description,
              "remarks": remarks,
              "image_link": image_link,

              "ios": ios,
              "portrait": portrait,
              "landscape": landscape,
              "android": android,
              "browser": browser,

              "api_name": api_name,
              "api_method": api_method?.value,
              "path": path,
              "request_data": request_data,
              "response_data": response_data,

              "isDisabled":false,
            }

            posttask(data)
            setPopup(false)
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


                <div className="inputbox_divider">

                  <div className="inputfield_sub_container">
                    <McInput
                      type={"picker"}
                      name={"PROJECT"}
                      id="project_ref_data"
                      required={true}
                      value={project_ref?.value}
                      onChange={setproject_ref}
                      options={
                        (company) && company.map((obj: any) => {
                          return { "key": obj.id, "value": obj.company_title }
                        })
                      }
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      type={"picker"}
                      name={"PRIORITY"}
                      id="priority_data"
                      required={true}
                      value={priority?.value}
                      onChange={setpriority}
                      options={[
                        { "key": "0", "value": "Low" },
                        { "key": "1", "value": "Normal" },
                        { "key": "2", "value": "High" },
                        { "key": "3", "value": "Urgent" },
                        { "key": "4", "value": "Emergency" },
                      ]}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      type={"picker"}
                      name={"TASK TYPE"}
                      id="task_type_data"
                      required={true}
                      value={task_type?.value}
                      onChange={settask_type}
                      options={[
                        { "key": "1", "value": "FEATURE" },
                        { "key": "2", "value": "TEST" },
                        { "key": "3", "value": "BUG" },
                        { "key": "4", "value": "UPDATE" },
                      ]}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      type={"picker"}
                      name={"DOMAIN"}
                      id="domain_data"
                      required={true}
                      value={domain?.value}
                      onChange={setdomain}
                      options={[
                        { "key": "0", "value": "frontend" },
                        { "key": "1", "value": "backend" },
                        { "key": "0", "value": "UI" },
                        { "key": "0", "value": "dev ops" }
                      ]}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"TITLE"}
                      id="title_data"
                      name={`data.title`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={title}
                      onChange={settitle}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"DESCRIPTION"}
                      id="description_data"
                      name={`data.description`}
                      inputtype="Text"
                      type="textarea"
                      min_length="3"
                      required={true}
                      value={description}
                      onChange={setdescription}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"REMARKS"}
                      id="remarks_data"
                      name={`data.remarks`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={remarks}
                      onChange={setremarks}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"IMAGE"}
                      id="image_link_data"
                      name={`data.image_link`}
                      inputtype="file"
                      type="file"
                      min_length="3"
                      required={true}
                      value={image_link}
                      onChange={setimage_link}
                    />
                  </div>

                  <div className="inputbox_divider">

                    {(domain?.value === "UI") &&
                      <>
                        <div className="inputfield_sub_container">
                          <McInput
                            type={"picker"}
                            name={"FRONT END DOMAIN"}
                            id="f_domain_data"
                            required={true}
                            value={f_domain?.value}
                            onChange={setf_domain}
                            options={[
                              { "key": "0", "value": "Frontend" },
                              { "key": "1", "value": "UI" },
                            ]}
                          />
                        </div>
                      </>
                    }

                    {(domain?.value === "frontend") &&
                      <>

                        <div className="inputfield_sub_container">
                          <McInput
                            type={"picker"}
                            name={"FRONT END DOMAIN"}
                            id="f_domain_data"
                            required={true}
                            value={f_domain?.value}
                            onChange={setf_domain}
                            options={[
                              { "key": "0", "value": "Frontend" },
                              { "key": "1", "value": "UI" },
                            ]}
                          />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            type={"radio"}
                            label={"POTRAIT"}
                            name={"data.portrait"}
                            id="portrait_data"
                            required={true}
                            value={portrait}
                            onChange={setportrait}
                            options={[
                              { "key": "0", "value": "true" },
                              { "key": "1", "value": "false" },
                            ]}
                          />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            type={"radio"}
                            label={"LANDSCAPE"}
                            name={"data.landscape"}
                            id="landscape_data"
                            required={true}
                            value={landscape}
                            onChange={setlandscape}
                            options={[
                              { "key": "0", "value": "true" },
                              { "key": "1", "value": "false" },
                            ]}
                          />

                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            label={"IOS"}
                            id="ios_data"
                            name={`data.ios`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={ios}
                            onChange={setios} />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            label={"AANDROID"}
                            id="android_data"
                            name={`data.android`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={android}
                            onChange={setandroid} />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            label={"BROWSER"}
                            id="browser_data"
                            name={`data.V`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={browser}
                            onChange={setbrowser} />
                        </div>
                      </>
                    }

                    {(domain?.value === "backend") &&
                      <>
                        <div className="inputfield_sub_container">
                          <McInput
                            label={"API Name"}
                            id="api_name_data"
                            name={`data.api_name`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={api_name}
                            onChange={setapi_name} />
                        </div>

                        <div className="inputfield_sub_container">
                          <div >
                            <McInput
                              type={"picker"}
                              name={"API METHOD"}
                              id="domain"
                              required={true}
                              value={api_method?.value}
                              onChange={setapi_method}
                              options={[
                                { "key": "0", "value": "GET" },
                                { "key": "1", "value": "POST" },
                                { "key": "0", "value": "PUT" },
                                { "key": "0", "value": "DELETE" }]}
                            />
                          </div>
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            label={"Path"}
                            id="path_data"
                            name={`data.path`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={path}
                            onChange={setpath} />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            label={"REQUEST DATA"}
                            id="request_data_data"
                            name={`data.request_data`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={request_data}
                            onChange={setrequest_data} />
                        </div>

                        <div className="inputfield_sub_container">
                          <McInput
                            label={"RESPONCE"}
                            id="response_data"
                            name={`data.response`}
                            inputtype="Text"
                            type="text"
                            min_length="3"
                            required={true}
                            value={response_data}
                            onChange={setresponse_data} />
                        </div>
                      </>
                    }

                  </div>
                </div>
              </div>
            </form >
          }
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
            // Validate()
            // let a = String(document.getElementById("assignee_data").value)
            // setassignee(a)
          }}
          cancelClick={() => {
            setispopup(false)
          }}
        />
      }
    </>
  )
}

export default AddEditTask;
