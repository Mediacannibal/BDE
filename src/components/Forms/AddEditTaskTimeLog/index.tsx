import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import Popup from 'components/Common/Popup'
import { createTasktimelog } from 'utils/api';
import { useAuth } from 'store/authStore';

const AddEditTaskTimeLog = ({ setPopup, taskid, startorpausetask }) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  useEffect(() => {

  }, [])

  return (
    <Popup
      title={"Start Task?"}
      desc1={(startorpausetask === true) ? "The following Task will be started!" : "The following Task will be paused!"}
      desc2={"Please click 'Yes' to proceed?"}
      confirmClick={() => {
        let data = []
        let object = {
          "task_ref": taskid,
          "active": String(startorpausetask)
        }
        // console.log('seleted_taskid: ', taskid)
        data.push(object)
        // console.log("***SUBMIT***", data)
        createTasktimelog(async (data: any, errorresponse: any) => {
          if (data.status === 200) {
            // console.log('Sucess========= ' + JSON.stringify(data));
            window.location.reload()
            // alert("successfully added")
            setbackendresponse("Successfully Added!")
            setbackendresponse_popup(true)
          } else {
            setbackendresponse("Failed, Please Try Again!")
            console.log('error ' + JSON.stringify(data));
            console.log('error ' + JSON.stringify(errorresponse));
          }
        }, auth, data[0])
        // console.log("***SENT***")
        setPopup()
      }}
      cancelClick={() => {
        console.log("***CANCEL***")
        setPopup()
      }}
    />
  )
}

export default AddEditTaskTimeLog;
