import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { fileupload } from 'utils/api';
import McInput from 'components/Common/McInput';
import { useAuth } from 'store/authStore';
import { ColourObject } from 'store/ColourStore';
import { projectStore } from 'store/projectStore';
import { companyStore } from 'store/companyStore';
import { branchStore } from 'store/branchStore';


const AddEditProject = ({ setPopup }) => {
  // STORE******
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { projectField, setprojectField, loadProjectbyUserID, loadProjectsDetail, postprojectField } = projectStore()
  const { company, setcompany, loadcompany } = companyStore()
  const { branch, setbranch, loadbranch } = branchStore()
  // *********

  const { auth } = useAuth();

  const [slotvalid, setSlotvalid] = useState(false)
  const [titlevalid, setTitlevalid] = useState(false)
  const [descriptionvaild, setDescriptionvaild] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const [dataUri, setDataUri] = useState('');
  const [ispopup, setispopup] = useState(false)

  const [company_ref, setcompany_ref] = useState('')
  const [branch_ref, setbranch_ref] = useState('')
  const [design, setdesign] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [logo, setlogo] = useState('')



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
                    options={[
                      { "key": "1", "value": "design" },
                      { "key": "2", "value": "development" },
                      { "key": "3", "value": "marketting" },
                    ]}
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