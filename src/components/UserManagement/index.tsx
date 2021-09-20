import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import * as add from '../../assets/add.svg'
import * as edit from '../../assets/edit.png'


import Footer from '../Common/Footer';
import { ProgressBar } from '../Common/Spinner';
import { CommonAPi } from 'utils/api';
import { useAuth } from 'store/authStore';
import { ColourObject } from 'store/ColourStore'
import NewUserForm from '../Forms/UserSetup';
import UserSettings from 'components/UserMenuItems/UserSettings';
import UpDownArrow from 'components/Common/updownArrow';
import McInput from 'components/Common/McInput';
import Popup from 'components/Common/Popup';
import { useuserDetails } from 'store/userDetailsStore';

export const header_options = () => <div>Hello</div>

const UserManagement = (props: any) => {
  const { auth } = useAuth();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { userDetail, setuserDetail, loaduserDetail, edituserDetail } = useuserDetails();

  const history = useHistory();

  const [spinner, setspinner] = useState(true)

  const [newUser_popup, setnewUser_popup] = useState(false)
  const [settings_popup, setsettings_popup] = useState(false)

  const [editdata, seteditdata] = useState({ });

  //userdata
  const [user_listItems, setuser_listItems] = useState([
    {
      "id": "",
      "firstname": "",
      "lastname": "",
      "email": "",
      "image": "",
      "photo_url": "",
      "dob": "",
      "gender": "",
      "address": "",
      "dial_code": "",
      "phone": "",
      "company_name": "",
      "branch_name": "",
      "user_type": "",
      "auth_type": "",
    }
  ])

  const [user_popup, setuser_popup] = useState(false)

  const [userid, setuserid] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [image, setimage] = useState('');
  const [photo_url, setphoto_url] = useState('');
  const [dob, setdob] = useState('');
  const [gender, setgender] = useState({ });
  const [address, setaddress] = useState('');
  const [dial_code, setdial_code] = useState('');
  const [phone, setphone] = useState('');
  const [company_name, setcompany_name] = useState('');
  const [branch_name, setbranch_name] = useState('');
  const [user_type, setuser_type] = useState({ });
  const [auth_type, setauth_type] = useState({ });



  useEffect(() => {

    if (!userDetail) {
      loaduserDetail()
    }
    // header
    props.setheader_options(screen_header_elements)

    if (!Colour || !colourObj) {
      loadColour();
    }

    CommonAPi(
      {
        path: `/api/user/list/`,
        method: "get",
        auth: auth ? auth : false,
      },
      (data: any, errorresponse: any) => {
        if (data.status === 200) {
          setspinner(false)
          // console.log("Project Tasks:", data.data)
          setlist(data.data.results)
        } else {
          setspinner(false)
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      })
  }, [])

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element'
          onClick={() => { setnewUser_popup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add User</div>
        </div>
      </>
    )
  }



  //userdata
  const editrow_user = (element: any, ind: any) => {
    (userDetail) && userDetail.map((obj: any, index: any) => {
      console.log("?????>>><><><> :", index, ind);

      if (index === ind) {
        seteditdata(obj)
        setuserid(obj.id)
        setfirstname(obj.firstname)
        setlastname(obj.lastname)
        setemail(obj.email)
        setimage(obj.image)
        setphoto_url(obj.photo_url)
        setdob(obj.dob)
        setgender({ "value": obj.gender })
        setaddress(obj.address)
        setdial_code(obj.dial_code)
        setphone(obj.phone)
        setcompany_name(obj.company_name)
        setbranch_name(obj.branch_name)
        setuser_type({ "value": obj.user_type })
        setauth_type({ "value": obj.auth_type })
      }
    })
  }

  const renderHeader = () => {
    let headerElement = ['first name', 'last name', 'email', 'image', 'photo url', 'dob', 'gender', 'address', 'dial code', 'phone', 'Company Name', 'Branch Name', 'user type', 'Login Method']

    return headerElement.map((key, index) => {
      return (
        <th key={index}>
          <div className={"title_wrapper"} >
            {key.toUpperCase()}
            <div className={"orderby_arrow"}>
              <UpDownArrow onexpand={() => { }} />
            </div>
          </div>
        </th>
      )
    })
  }

  const renderBody = (element: any, index: any) => {
    // console.log("user_details: ", element)
    return (
      <>
        <tr key={element.id} >
          <td>{element.firstname}</td>
          <td >{element.lastname}</td>
          <td >{element.email}</td>
          <td >{element.image}</td>
          <td > <img className="dashboard_list_logo" src={element.photo_url} /></td>
          <td >{element.dob}</td>
          <td >{element.gender}</td>
          <td >{element.address}</td>
          <td >{element.dial_code}</td>
          <td >{element.phone}</td>
          <td >{element.company_name}</td>
          <td >{element.branch_name}</td>
          <td >{element.user_type}</td>
          <td >{element.auth_type}</td>
          <td >
            <div className="table_edit_delete_main">
              <div className='table_edit_delete'>
                {user_popup ? null :
                  <>
                    <img onClick={() => {
                      setuser_popup(true)
                      editrow_user(element, index)
                    }}
                      className='table_icon' src={edit} />
                  </>
                }
              </div>
            </div>
          </td>
        </tr>
      </>
    )
  }

  return (

    <div className="main">
      {newUser_popup &&
        <NewUserForm
          setPopup={() => {
            setnewUser_popup(false)
          }}
        />
      }

      {settings_popup &&
        <UserSettings
          setPopup={() => {
            setsettings_popup(false)
          }}
        />
      }

      {user_popup &&
        <Popup
          title={"Edit User"}
          popup_body={
            <div className="main_input_wrap">

              <div className="div_column_wrap">

                <div className="inputfield_sub_container">
                  <McInput
                    label={"FIRST NAME"}
                    id="input_firstnametextbox"
                    name={`data.firstname`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={firstname}
                    onchange={setfirstname}
                    description={"Enter user Firstname"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"LAST NAME"}
                    id="input_lastnametextbox"
                    name={`data.lastname`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={lastname}
                    onchange={setlastname}
                    description={"Enter user Lastname"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"EMAIL"}
                    id="input_emailtextbox"
                    name={`data.email`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={email}
                    onchange={setemail}
                    description={"Enter user Email-ID"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"IMAGE"}
                    id="input_imagetextbox"
                    name={`data.image`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={image}
                    onchange={setimage}
                    description={"Enter user Image"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"PHOTO URL"}
                    id="input_photo_urltextbox"
                    name={`data.photo_url`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={photo_url}
                    onchange={setphoto_url}
                    description={"Enter user Photo URL"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"DOB(yyy-mm-dd)"}
                    id="input_dobtextbox"
                    name={`data.dob`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={dob}
                    onchange={setdob}
                    description={"Enter user Date of birth"}
                  />
                </div>



                <div className="inputfield_sub_container">
                  <McInput
                    type="picker"
                    id="input_gendertextbox"
                    name={`GENDER`}
                    required={true}
                    value={gender?.value}
                    onchange={setgender}
                    options={[
                      { "key": "0", "value": "MALE" },
                      { "key": "1", "value": "FEMALE" },
                      { "key": "2", "value": "OTHER" }
                    ]}
                    description={"Enter user Gender"}
                  />
                </div>

              </div>

              <div className="div_column_wrap">

                <div className="inputfield_sub_container">
                  <McInput
                    label={"ADDRESS"}
                    id="input_addresstextbox"
                    name={`data.address`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={address}
                    onchange={setaddress}
                    description={"Enter user Address"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"DIAL CODE"}
                    id="input_dial_codetextbox"
                    name={`data.dial_code`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={dial_code}
                    onchange={setdial_code}
                    description={"Enter user Dial Code"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"PHONE NUMBER"}
                    id="input_phonetextbox"
                    name={`data.phone`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={phone}
                    onchange={setphone}
                    description={"Enter user Phone Number"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"COMPANY NAME"}
                    id="input_company_nametextbox"
                    name={`data.company_name`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={company_name}
                    onchange={setcompany_name}
                    description={"Enter user Phone Number"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    label={"BRANCH NAME"}
                    id="input_branch_nametextbox"
                    name={`data.phone`}
                    inputtype="Text"
                    type="text"
                    min_length="3"
                    required={true}
                    value={branch_name}
                    onchange={setbranch_name}
                    description={"Enter user Phone Number"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    type="picker"
                    id="input_user_typetextbox"
                    name={`USER TYPE`}
                    required={true}
                    value={user_type?.value}
                    onchange={setuser_type}
                    options={[
                      { "key": "0", "value": "NORMAL" },
                      { "key": "1", "value": "VIEWER" },
                      { "key": "2", "value": "PROJECTADMIN" },
                      { "key": "3", "value": "SUPERUSER" },
                      { "key": "2", "value": "ADMIN" },
                      { "key": "3", "value": "SUPER ADMIN" },
                    ]}
                    description={"Enter user Type"}
                  />
                </div>

                <div className="inputfield_sub_container">
                  <McInput
                    type="picker"
                    id="input_auth_typetextbox"
                    name={`AUTH TYPE`}
                    required={true}
                    value={auth_type?.value}
                    onchange={setauth_type}
                    options={[
                      { "key": "0", "value": "FB" },
                      { "key": "1", "value": "GOOGLE" },
                      { "key": "2", "value": "MC" },
                      { "key": "3", "value": "APPLE" },
                      { "key": "3", "value": "GUEST" },
                    ]}
                    description={"Enter user Authentication type"}
                  />
                </div>

              </div>

            </div>
          }

          confirmClick={() => {
            setuser_listItems(user_listItems.map((obj) => {
              console.log("object===", obj.id, editdata.id);

              const getupdatedobj = () => {
                let a = obj
                a.firstname = String(document.getElementById("input_firstnametextbox").value);
                a.lastname = String(document.getElementById("input_lastnametextbox").value);
                a.email = String(document.getElementById("input_emailtextbox").value);
                a.image = String(document.getElementById("input_imagetextbox").value);
                a.photo_url = String(document.getElementById("input_photo_urltextbox").value);
                a.dob = String(document.getElementById("input_dobtextbox").value);
                a.gender = gender?.value;
                a.address = String(document.getElementById("input_addresstextbox").value);
                a.dial_code = String(document.getElementById("input_dial_codetextbox").value);
                a.phone = String(document.getElementById("input_phonetextbox").value);
                a.company_name = String(document.getElementById("input_company_nametextbox").value);
                a.branch_name = String(document.getElementById("input_branch_nametextbox").value);
                a.user_type = user_type?.value;
                a.auth_type = auth_type?.value;
                return a;
              }
              return obj.id == editdata.id ? getupdatedobj() : obj;
            }))

            let data = {
              firstname: String(document.getElementById("input_firstnametextbox").value),
              lastname: String(document.getElementById("input_lastnametextbox").value),
              email: String(document.getElementById("input_emailtextbox").value),
              image: String(document.getElementById("input_imagetextbox").value),
              photo_url: String(document.getElementById("input_photo_urltextbox").value),
              dob: String(document.getElementById("input_dobtextbox").value),
              gender: gender?.value,
              address: String(document.getElementById("input_addresstextbox").value),
              dial_code: String(document.getElementById("input_dial_codetextbox").value),
              phone: String(document.getElementById("input_phonetextbox").value),
              company_name: String(document.getElementById("input_company_nametextbox").value),
              branch_name: String(document.getElementById("input_branch_nametextbox").value),
              user_type: user_type?.value,
              auth_type: auth_type?.value,
            }

            edituserDetail(userid, data)
            setuser_popup(false)
          }}
          cancelClick={() => {
            setuser_popup(false)
          }}
        />
      }

      <div className="body user-scroll">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <div className="internal_table" style={{ width: '97%', overflowY: 'hidden', color: colourObj.color_1 }}>
            <table id='internal_table'>
              <thead>{renderHeader()}</thead>
              <tbody>{(userDetail) && userDetail.map(renderBody)}</tbody>
            </table>
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default UserManagement;
