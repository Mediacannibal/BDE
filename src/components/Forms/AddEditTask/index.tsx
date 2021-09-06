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
  const [milestone, setmilestone] = useState('')
  const [progress, setprogress] = useState('')
  const [start_date, setstart_date] = useState('')
  const [end_date, setend_date] = useState('')

  const [f_domain, setf_domain] = useState('')
  const [portrait, setportrait] = useState('')
  const [landscape, setlandscape] = useState('')
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
              "status": status,
              "remarks": remarks,
              "image_link": image_link,
              "linked_logs": linked_logs,
              "time_spent": time_spent,
              "parent_child": parent_child,
              "open_id": open_id,
              "open_type": open_type,
              "dependencies": dependencies,
              "milestone": milestone,
              "progress": progress,
              "start_date": start_date,
              "end_date": end_date,
              "f_domain": f_domain?.value,
            }

            posttask(data)
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
                      label={"STATUS"}
                      id="status_data"
                      name={`data.status`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={status}
                      onChange={setstatus}
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

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"LINKED LOGS"}
                      id="linked_logs_data"
                      name={`data.linked_logs`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={linked_logs}
                      onChange={setlinked_logs}
                    />
                  </div>

                </div>

                <div className="inputbox_divider">

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"TIME SPENT"}
                      id="time_spent_data"
                      name={`data.time_spent`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={time_spent}
                      onChange={settime_spent}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"PARNET CHILD"}
                      id="parent_child_data"
                      name={`data.parent_child`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={parent_child}
                      onChange={setparent_child}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"OPEN ID"}
                      id="open_id_data"
                      name={`data.open_id`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={open_id}
                      onChange={setopen_id}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"OPEN TYPE"}
                      id="open_type_data"
                      name={`data.open_id`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={open_type}
                      onChange={setopen_type}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"DEPENDENCIES"}
                      id="dependencies_data"
                      name={`data.dependencies`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={dependencies}
                      onChange={setdependencies}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"MILESTONE"}
                      id="milestone_data"
                      name={`data.milestone`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={milestone}
                      onChange={setmilestone}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"PROGRESS"}
                      id="progress_data"
                      name={`data.progress`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={progress}
                      onChange={setprogress}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"START DATE"}
                      id="start_date_data"
                      name={`data.start_date`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={start_date}
                      onChange={setstart_date}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"END DATE"}
                      id="end_date_data"
                      name={`data.end_date`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={end_date}
                      onChange={setend_date}
                    />
                  </div>
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
                          label={"POTRAIT"}
                          id="portrait_data"
                          name={`data.portrait`}
                          inputtype="Text"
                          type="text"
                          min_length="3"
                          required={true}
                          value={portrait}
                          onChange={setportrait} />
                      </div>

                      <div className="inputfield_sub_container">
                        <McInput
                          label={"LANDSCAPE"}
                          id="landscape_data"
                          name={`data.landscape`}
                          inputtype="Text"
                          type="text"
                          min_length="3"
                          required={true}
                          value={landscape}
                          onChange={setlandscape} />
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
