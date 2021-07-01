import McInput from 'components/Common/McInput'
import SimpleEditor from 'react-simple-image-editor';
import React, { useEffect, useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import { getBranchDetails, getCompanyDetails } from 'utils/api';
import Popup from 'components/Common/Popup';
import { useHistory } from 'react-router-dom';
import './style.css'
import { userlist } from 'utils/api';


const AddEditUserList = ({ setPopup }) => {
  const history = useHistory();

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [ispopup, setispopup] = useState(false)

  const [user, setuser] = useState('')
  const [user_list_type, setuser_list_type] = useState('')
  const [role, setrole] = useState('')
  const [ref, setref] = useState('')


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

      setispopup(true)
    }
    else {
      setPreSendValidator(true)
    }
  }

  useEffect(() => {
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))

    getCompanyDetails(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>777>>>>>", data.data.results)
        setlistItems(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

    getBranchDetails(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>777>>>>>", data.data.results)
        setlistItems(data.data.results)
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)
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
            let data = [];
            let object = {
              "user": user,
              "user_list_type": user_list_type,
              "ref": ref,
              "role": role,
            }
            data.push(object)
            // console.log("***SUBMIT***", data)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            userlist(async (data: any, errorresponse: any) => {
              if (data.status === 200) {
                setispopup(false)
                // console.log('Sucess!!!!!!!!' + JSON.stringify(data));
                localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
                localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
                history.push('/Home')
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
          title={"Add / Edit User List"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <McInput
                    label={"User"}
                    id="user_data"
                    name={`data.user`}
                    inputtype="text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setuservalid}
                    sendcheck={preSendValidator}
                    value={user}
                    onchange={setuser}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"picker"}
                    name={"User List Type"}
                    id="user_list_type_data"
                    required={true}
                    valid={setusertypevalid}
                    sendcheck={preSendValidator}
                    value={user_list_type}
                    onchange={setuser_list_type}
                    options={[
                      { "key": "0", "value": "PROJECTS" },
                      { "key": "1", "value": "BRANCH" },
                      { "key": "2", "value": "TASK" },
                      { "key": "3", "value": "COMPANY" },
                    ]}
                  />
                </div>
              </div>


              <div className="inputfield_sub_container">
                <div >
                  <McInput
                    type={"picker"}
                    name={"Ref"}
                    id="ref_data"
                    required={true}
                    valid={setrefvalid}
                    sendcheck={preSendValidator}
                    value={ref}
                    onchange={setref}
                    options={[
                      { "key": "0", "value": "1" },
                      { "key": "1", "value": "2" },
                      { "key": "2", "value": "3" },
                      { "key": "3", "value": "4" },
                    ]}
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
                    onchange={setrole}
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
          }}
          cancelClick={setPopup}
        />
      }
    </>
  );
}
export default AddEditUserList;