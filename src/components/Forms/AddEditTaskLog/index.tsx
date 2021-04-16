import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { createMainTask, fileupload } from 'utils/api';
import McInput from 'components/Common/McInput';

const AddEditTaskLog = ({ setPopup }) => {
  const history = useHistory();

  const [remarks, setremarks] = useState('')

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [isproject_namevalid, setproject_namevalid] = useState(false)
  const [isremarksvalid, setremarksvalid] = useState(false)
  
  const [preSendValidator, setPreSendValidator] = useState(false)
  const [ispopup, setispopup] = useState(false)
  const [dataUri, setDataUri] = useState('');

  const [list, setlist] = useState([{
    "remarks": "",
  }])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };
  console.log(errors);

  const _onChangeHandler = (data: any) => {
    console.log(data.target.files[0])
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    fileupload(Callback, token, formdata)
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


    if (isproject_namevalid === true
      || isremarksvalid === true
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
            let data = [];
            let object = {
              "remarks": remarks,
            }
            data.push(object)
            console.log("***SUBMIT***", data)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            createMainTask(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                console.log('Sucess========= ' + JSON.stringify(data));
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
            }, token, data[0])
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
                    <div className="textinput_box_container">
                      <McInput
                        label={"Remarks"}
                        id="remarks_data"
                        name={`data.remarks`}
                        inputtype="Text"
                        type="text"
                        min_length="3"
                        required={true}
                        valid={setremarksvalid}
                        sendcheck={preSendValidator}
                        value={remarks}
                        onchange={setremarks}
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

export default AddEditTaskLog
