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


const AddEditProject = ({ setPopup }) => {
  const { auth } = useAuth();
  const history = useHistory();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [isselectslot, setisselectslot] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [password, setpassword] = useState('')

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

  useEffect(() => {
    if (!Colour) {
      loadColour();
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
      // console.log("respnse :", data.data.result.file_url)
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
            let data = [];
            let object = {
              "project_type": isselectslot,
              "title": title,
              "description": description,
              "file_links": dataUri,
            }
            data.push(object)
            // console.log("***SUBMIT***", data)
            createProject(async (data: any, errorresponse: any) => {
              if (data.status === 201 || 200) {
                setispopup(false)
                // console.log('Sucess ========>>>' + JSON.stringify(data));
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
          title={"Add / Edit Project"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"picker"}
                    name={"PROJECT TYPE"}
                    id="usertype_data"
                    required={true}
                    valid={setSlotvalid}
                    sendcheck={preSendValidator}
                    value={isselectslot}
                    onchange={setisselectslot}
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
                    valid={setDescriptionvaild}
                    sendcheck={preSendValidator}
                    value={description}
                    onchange={setdescription}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
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

export default AddEditProject;