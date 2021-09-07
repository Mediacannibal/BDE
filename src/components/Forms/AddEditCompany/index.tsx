import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { addTasklog, fileupload, getMainTask } from 'utils/api';
import McInput from 'components/Common/McInput';
import { useAuth } from 'store/authStore';
import { ColourObject } from 'store/ColourStore';
import { companyStore } from 'store/companyStore';

const AddEditCompany = ({ setPopup, taskid }) => {
  const { auth } = useAuth();
  const history = useHistory();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { company, setcompany, postcomAPI, loadcompany } = companyStore()

  const [company_title, setcompany_title] = useState('')
  const [locations, setlocations] = useState('')
  const [contact_number, setcontact_number] = useState('')
  const [company_size, setcompany_size] = useState('')

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

  const _onChangeHandler = (data: any) => {
    // console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    fileupload(Callback, auth, formdata)
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
              "company_title": company_title?.value,
              "locations": locations?.value,
              "contact_number": contact_number?.value,
              "company_size": company_size?.value,
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
          title={"Add / Edit Company"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="addedit_task_div_wrapper">
                <div className="addedit_task_container1">

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"COMPANY TITLE"}
                      id="company_title_data"
                      name={`data.company_title`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={company_title}
                      onChange={setcompany_title}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"LOCATION"}
                      id="locations_data"
                      name={`data.locations`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={locations}
                      onChange={setlocations}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"CONTACT"}
                      id="contact_number_data"
                      name={`data.contact_number`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={contact_number}
                      onChange={setcontact_number}
                    />
                  </div>

                  <div className="inputfield_sub_container">
                    <McInput
                      label={"COMPANY SIZE"}
                      id="company_size_data"
                      name={`data.company_size`}
                      inputtype="Text"
                      type="text"
                      min_length="3"
                      required={true}
                      value={company_size}
                      onChange={setcompany_size}
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

export default AddEditCompany;
