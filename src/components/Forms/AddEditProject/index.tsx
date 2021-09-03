import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { createProject, fileupload, taskAdd } from 'utils/api';
import McInput from 'components/Common/McInput';
import { useAuth } from 'store/authStore';
import { ColourObject } from 'store/ColourStore';
import { projectStore } from 'store/projectStore';
import { companyStore } from 'store/companyStore';
import { branchStore } from 'store/branchStore';


const AddEditProject = ({ setPopup }) => {
  const { auth } = useAuth();
  const { projectField, setprojectField, loadProjectbyUserID, loadProjectsDetail, postprojectField } = projectStore()
  const { company, setcompany, loadcompany } = companyStore()
  const { branch, setbranch, loadbranch } = branchStore()


  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [slotvalid, setSlotvalid] = useState(false)
  const [titlevalid, setTitlevalid] = useState(false)
  const [descriptionvaild, setDescriptionvaild] = useState(false)
  const [passwordvalid, setpasswordvalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const [inputvalue, setinputvalue] = useState("")
  const [dataUri, setDataUri] = useState('');
  const [ispopup, setispopup] = useState(false)
  const [list, setlist] = useState([{
    "project_type": "",
    "title": "",
    "description": "",
    "file_links": "",
    "assignee": "",
    "updated_by": "",
  }])


  const [company_ref, setcompany_ref] = useState('')
  const [branch_ref, setbranch_ref] = useState('')
  const [design, setdesign] = useState('')
  const [development, setdevelopment] = useState('')
  const [marketting, setmarketting] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [logo, setlogo] = useState('')
  const [start_date, setstart_date] = useState('')
  const [end_date, setend_date] = useState('')
  const [status, setstatus] = useState('')
  const [progress, setprogress] = useState('')
  const [frontend_url, setfrontend_url] = useState('')
  const [backend_url, setbackend_url] = useState('')


  useEffect(() => {
    if (!Colour) {
      loadColour();
    }

    if (!company) {
      loadcompany();
    }

    if (!branch) {
      loadbranch();
    }

  }, [])

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
    fileupload(Callback, auth, formdata)
  }

  const Callback = async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log("respnse :", data.data.result.file_url)
      setDataUri(data.data.result.file_url)
    }
    else {
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  };

  const Validate = () => {
    // console.log("***VALIDATE***")
    // console.log(isselectslot, title, description)
    if (slotvalid === true
      && titlevalid === true
      && descriptionvaild === true
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
          popup_type={"confirm"}
          title={"Add / Edit Project?"}
          desc1={"The following Project will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            let data = {
              "company_ref": company_ref?.key,
              "branch_ref": branch_ref?.key,
              "design": true,
              "development": true,
              "marketting": true,
              "title": title,
              "description": description,
              "logo": logo,
              "start_date": start_date,
              "end_date": end_date,
              "status": status,
              "progress": progress,
              "frontend_url": frontend_url,
              "backend_url": backend_url,
            }
            postprojectField(data)
          }}
          cancelClick={() => {
            setispopup(false)
          }}
        />
        :
        <Popup
          title={"Add / Edit Project"}
          popup_body={
            <>
              <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
                <div className="inputfield_sub_container">
                  <McInput
                    type={"picker"}
                    name={"COMPANY REF"}
                    id="company_ref_data"
                    required={true}
                    sendcheck={preSendValidator}
                    value={company_ref?.value}
                    onChange={setcompany_ref}
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
                    name={"BRANCH REF"}
                    id="branch_ref_data"
                    required={true}
                    sendcheck={preSendValidator}
                    value={branch_ref?.value}
                    onChange={setbranch_ref}
                    options={
                      (branch) && branch.map((obj: any) => {
                        return { "key": obj.id, "value": obj.branch_name }
                      })
                    }
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"DESIGN"}
                    id="design_data"
                    name={`data.design`}
                    inputtype="Text"
                    type="checkbox"
                    min_length="3"
                    required={true}
                    sendcheck={preSendValidator}
                    value={design}
                    onChange={setdesign}
                    options={{"key":"1","value":"design"}}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"TITLE"}
                    id="title_data"
                    name={`data.Title`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    sendcheck={preSendValidator}
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
                    type="text"
                    min_length="3"
                    required={true}
                    sendcheck={preSendValidator}
                    value={description}
                    onChange={setdescription}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"LOGO"}
                    id="logo_data"
                    name={`data.logo`}
                    inputtype="file"
                    type="file"
                    min_length="3"
                    required={true}
                    value={logo}
                    onchange={setlogo}
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
                    sendcheck={preSendValidator}
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
                    sendcheck={preSendValidator}
                    value={end_date}
                    onChange={setend_date}
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
                    sendcheck={preSendValidator}
                    value={status}
                    onChange={setstatus}
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
                    sendcheck={preSendValidator}
                    value={progress}
                    onChange={setprogress}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"FRONT-END URL"}
                    id="frontend_url_data"
                    name={`data.frontend_url`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    sendcheck={preSendValidator}
                    value={frontend_url}
                    onChange={setfrontend_url}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"BACK-END URL"}
                    id="backend_url_data"
                    name={`data.backend_url`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    sendcheck={preSendValidator}
                    value={backend_url}
                    onChange={setbackend_url}
                  />
                </div>

              </form>
            </>
          }
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
            // Validate()
          }}
          cancelClick={setPopup}
        />
      }
    </>
  )
}

export default AddEditProject;