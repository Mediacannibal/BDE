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
import { branchStore } from 'store/branchStore';
import { companyStore } from 'store/companyStore';

const AddEditBranch = ({ setPopup, taskid }) => {
  const { auth } = useAuth();
  const history = useHistory();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { branch, setbranch, postbranch, loadbranch } = branchStore()
  const { company, setcompany, postcomAPI, loadcompany } = companyStore()

  const [company_ref, setcompany_ref] = useState('')
  const [branch_name, setbranch_name] = useState('')

  const [isproject_namevalid, setproject_namevalid] = useState(false)
  const [isremarksvalid, setremarksvalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)
  const [ispopup, setispopup] = useState(false)
  const [dataUri, setDataUri] = useState('');

  const [tasktype, settasktype] = useState('');

  const { register, handleSubmit, errors, reset } = useForm();

  useEffect(() => {
    if (!Colour) {
      loadColour();
    }
  }, [])

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data);
  };
  // console.log(errors);


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
      || isremarksvalid === true
    ) {
      setispopup(true)
    }
    else {
      setPreSendValidator(true)
    }

  }

  useEffect(() => {

  }, [])

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
              "company_title": company_ref?.value,
              "locations": branch_name?.value,
            }

            // postcompany(data)
            setPopup(false)
          }}
          cancelClick={() => {
            console.log("***CANCEL***")
            setispopup(false)
          }}
        />
        :
        <Popup
          title={"Add / Edit Branch"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="addedit_task_div_wrapper">
                <div className="addedit_task_container1">

                  <div className="inputfield_sub_container">
                    <McInput
                      type={"picker"}
                      name={"PROJECT"}
                      id="project_ref_data"
                      required={true}
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
                      label={"LOCATION"}
                      id="branch_name_data"
                      name={`data.branch_name`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={branch_name}
                      onChange={setbranch_name}
                    />
                  </div>

                </div>
              </div>
            </form >
          }
          confirmClick={() => {
            setispopup(true)
            Validate()
          }}
          cancelClick={() => {
            setPopup()
          }}
        />
      }
    </>
  )
}

export default AddEditBranch;
