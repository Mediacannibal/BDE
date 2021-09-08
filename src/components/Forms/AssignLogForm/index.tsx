import McInput from 'components/Common/McInput'
import React, { useEffect, useState } from 'react'
import './style.css'
import './style.css'
import { useAuth } from 'store/authStore';
import Popup from 'components/Common/Popup';
import { useuserDetails } from 'store/userDetailsStore';
import { assignlogStore } from 'store/assignlogStore';


const AssignLogForm = ({ setPopup, project_task, taskid, projectid }) => {
  const { auth } = useAuth();
  const { userDetail, loaduserDetail } = useuserDetails()
  const { assignlog, loadassignlogDetail, postassignlog } = assignlogStore()


  const [user, setuser] = useState('')
  const [assign_message, setassign_message] = useState('')
  const [description, setdescription] = useState('')
  const [status, setstatus] = useState('')


  const [ispopup, setispopup] = useState(false)

  useEffect(() => {

    if (!userDetail) {
      loaduserDetail()
    }

  }, [])


  return (
    <>
      {ispopup ?
        <Popup
          popup_type={"confirm"}
          title={"Add / Edit User List?"}
          desc1={"The following User will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            let data = {
              "project_task": project_task,
              "project": projectid,
              "project_task_id": taskid,
              "user": user?.key,
              "assign_message": assign_message,
              "discription": description,
              "status": status?.value,
            }
            postassignlog(data)
            setPopup()

          }}
          cancelClick={() => {
            setispopup(false)
          }}
        />
        :
        <Popup
          title={"Add / Edit User List"}
          popup_body={
            <>
              <div className="inputfield_sub_container">
                <McInput
                  type={"picker"}
                  name={"USER"}
                  id="user_data"
                  required={true}
                  value={user?.value}
                  onChange={setuser}
                  options={
                    (userDetail) && userDetail.map((obj: any) => {
                      // console.log("user ??? ", obj);
                      return { "key": obj.username.username, "value": obj.firstname + " " + obj.lastname }
                    })
                  }
                />
              </div>

              <div className="inputfield_sub_container">
                <McInput
                  label={"MESSAGE"}
                  id="assign_message_data"
                  name={`data.assign_message`}
                  inputtype="Text"
                  type="text"
                  min_length="3"
                  required={true}
                  value={assign_message}
                  onChange={setassign_message} />
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
                  value={description}
                  onChange={setdescription} />
              </div>

              <div className="inputfield_sub_container">
                <McInput
                  type={"picker"}
                  name={"STATUS"}
                  id="status_data"
                  required={true}
                  value={status?.value}
                  onChange={setstatus}
                  options={[
                    { "key": "0", "value": "ASSIGN" },
                    { "key": "1", "value": "UNASSIGN" },
                    { "key": "2", "value": "PENDING" },
                    { "key": "3", "value": "ON PROGRESS" },
                    { "key": "4", "value": "FINISHED" },
                  ]}
                />
              </div>

            </>
          }
          confirmClick={() => {
            setispopup(true)
          }}
          cancelClick={setPopup}
        />
      }
    </>
  );
}
export default AssignLogForm;