import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import Popup from 'components/Common/Popup'
import { createTasktimelog } from 'utils/api';
import { useAuth } from 'store/authStore';

const AddEditTaskTimeLog = ({ setPopup, taskid }) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [isproject_namevalid, setproject_namevalid] = useState(false)
  const [isremarksvalid, setremarksvalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)
  const [ispopup, setispopup] = useState(false)

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
          title={"Start Task?"}
          desc1={"The following Task will be started!"}
          desc2={"Please click 'Yes' to proceed?"}
          confirmClick={() => {
            let data = []
            let object = {
              "tasklog_ref": taskid
            }
            console.log('seleted_taskid: ', taskid)
            data.push(object)
            console.log("***SUBMIT***", data)
            createTasktimelog(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                // console.log('Sucess========= ' + JSON.stringify(data));
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
          title={"Start Task?"}
          desc1={"The following Task will be started!"}
          desc2={"Please click 'Yes' to proceed?"}
          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
          }}
          cancelClick={setPopup}
        />
      }
    </>
  )
}

export default AddEditTaskTimeLog
