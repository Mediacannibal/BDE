import McInput from 'components/Common/McInput'
import SimpleEditor from 'react-simple-image-editor';
import React, { useEffect, useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import { CommonAPi, getBranchDetails, getCompanyDetails } from 'utils/api';
import { useHistory } from 'react-router-dom';
import './style.css'
import { userlist } from 'utils/api';
import { useAuth } from 'store/authStore';
import Popup from 'components/Common/Popup';


const AddEditUserList = ({ setPopup, taskid }) => {
  const { auth } = useAuth();
  const history = useHistory();

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [ispopup, setispopup] = useState(false)

  const [user, setuser] = useState('')
  const [user_list_type, setuser_list_type] = useState('')
  const [role, setrole] = useState('')

  const [uservalid, setuservalid] = useState(false)
  const [usertypevalid, setusertypevalid] = useState(false)
  const [rolevalid, setrolevalid] = useState(false)
  const [refvalid, setrefvalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)
  const [spinner, setspinner] = useState(false)

  const [listItems, setlistItems] = useState([])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    // console.log(data); 
  };
  // console.log(errors);

  const Validate = () => {
    if (uservalid === true
      && usertypevalid === true
      && rolevalid === true
      && refvalid === true
    ) {


    }
    else {
      setPreSendValidator(true)
    }
  }

  useEffect(() => {

    CommonAPi(
      {
        path: `api/user/list/`,
        method: "get",
        auth: auth ? auth : false,
      },
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          console.log("User List: ", data.data.results)
          setlistItems(data.data.results)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })
  }, [])

  const User_name = () => {
    let a: any = [];
    listItems.forEach(element => {
      let data = {
        "key": element.id,
        "value": element.username.username
      }
      a.push(data);
    });
    return a
  }

  return (
    <>
      {ispopup ?
        <Popup
          popup_type={"confirm"}
          title={"Add / Edit User List?"}
          desc1={"The following User will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            let data = [];
            let object = {
              "user_name": user,
              "user_list_type": 'TASK',
              "ref": taskid,
              "role": role,
            }
            data.push(object)
            userlist(async (data: any, errorresponse: any) => {
              if (data.status === 200 || 201) {
                setispopup(false)
                window.location.reload()
                history.push('/TaskList')
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
          title={"Add / Edit User List"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    type={"picker"}
                    id="user_data"
                    name={"User Name"}
                    required={true}
                    valid={setuservalid}
                    sendcheck={preSendValidator}
                    value={user}
                    onChange={setuser}
                    options={User_name()}
                  />
                </div>
              </div>


              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"picker"}
                    name={"Role"}
                    id="role_data"
                    required={true}
                    valid={setrolevalid}
                    sendcheck={preSendValidator}
                    value={role}
                    onChange={setrole}
                    options={[
                      { "key": "0", "value": "Super Admin" },
                      { "key": "1", "value": "Admin" },
                      { "key": "2", "value": "Manager" },
                      { "key": "3", "value": "Editor" },
                      { "key": "4", "value": "Author" },
                      { "key": "5", "value": "Subscriber" },
                      { "key": "6", "value": "Contribution" },
                      { "key": "7", "value": "User" },
                    ]}
                  />
                </div>
              </div>
            </form>
          }
          confirmClick={() => {
            console.log("***SEND***")
            Validate()
            setispopup(true)
          }}
          cancelClick={setPopup}
        />
      }
    </>
  );
}
export default AddEditUserList;