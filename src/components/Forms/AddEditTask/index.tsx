import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import { taskAdd } from 'utils/api';
import TextField from 'components/common/TextFieldWithRef';


const AddEditTask = ({ setPopup }) => {
  const history = useHistory();

  const [project_name, setproject_name] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [assignee, setassignee] = useState('')
  const [updateby, setupdateby] = useState('')

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');


  const [isselectslot, setisselectslot] = useState('value')

  const [isproject_nameemptyerror, setproject_nameemptyerror] = useState(false)
  const [istitleemptyerror, settitleemptyerror] = useState(false)
  const [isdescriptionemptyerror, setdescriptionemptyerror] = useState(false)
  const [isassigneeemptyerror, setassigneeemptyerror] = useState(false)
  const [isupdatebyemptyerror, setupdatebyemptyerror] = useState(false)

  const [isslotemptyerror, setslotemptyerror] = useState(false)

  const [ispopup, setispopup] = useState(false)

  const [list, setlist] = useState([{
    "project_name": "",
    "title": "",
    "description": "",
    "assignee": "",
    "updated_by": "",
  }])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };
  console.log(errors);

  return (
    <>
      { !ispopup ?
        <Popup
          title={"Add / Edit Task"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Project Name"}
                    id="project_name_data"
                    name={`data.project_name`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isproject_nameemptyerror}
                    setvalid={setproject_nameemptyerror}
                    value={project_name}
                    onChange={setproject_name}
                  />
                </div >
              </div >

              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <select id="domain" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                    required={isslotemptyerror}
                    value={isselectslot}
                    onChange={(e) => {
                      setslotemptyerror(false)
                      setisselectslot(e.target.value)
                    }}
                  >
                    <option hidden value="">DOMAIN</option>
                    <option value="DAY">FRONT END</option>
                    <option value="NIGHT">BACK END</option>
                    <option value="NIGHT">UI</option>
                  </select>
                </div>
                {isslotemptyerror ? <div className="invalid_entry">Please select a Orientation!</div> : null}
              </div>

              <div className="inputfield_sub_container">
                <div className="Booking_slot_dropdown">
                  <select id="task_type" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                    required={isslotemptyerror}
                    value={isselectslot}
                    onChange={(e) => {
                      setslotemptyerror(false)
                      setisselectslot(e.target.value)
                    }}
                  >
                    <option hidden value="">TASK TYPE</option>
                    <option value="DAY">FEATURE</option>
                    <option value="NIGHT">TEST</option>
                    <option value="NIGHT">BUG</option>
                  </select>
                </div>
                {isslotemptyerror ? <div className="invalid_entry">Please select a Orientation!</div> : null}
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Title"}
                    id="title_data"
                    name={`data.Title`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={istitleemptyerror}
                    setvalid={settitleemptyerror}
                    value={title}
                    onChange={settitle}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Description"}
                    id="description_data"
                    name={`data.Description`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isdescriptionemptyerror}
                    setvalid={setdescriptionemptyerror}
                    value={description}
                    onChange={setdescription}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Assignee"}
                    id="assignee_data"
                    name={`data.Assignee`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isassigneeemptyerror}
                    setvalid={setassigneeemptyerror}
                    value={assignee}
                    onChange={setassignee}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Update By"}
                    id="updateby_data"
                    name={`data.UpdatesBy`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    valid={isupdatebyemptyerror}
                    setvalid={setupdatebyemptyerror}
                    value={updateby}
                    onChange={setupdateby}
                  />
                </div>
              </div>
            </form >
          }
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
          }}
          cancelClick={setPopup}
        />
        :
        <Popup
          title={"Add / Edit Task?"}
          desc1={"The following Task will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            console.log("***SUBMIT***", list)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            taskAdd(async (data: any, errorresponse: any) => {
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
      }
    </>
  )
}

export default AddEditTask
