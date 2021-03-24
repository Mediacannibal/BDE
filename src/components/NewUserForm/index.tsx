import Header from 'components/common/Header'
import TextField from 'components/common/TextFieldWithRef'
import SimpleEditor from 'react-simple-image-editor';
import React, { useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';

const NewUserForm = () => {
  const [isnameemptyerror, setnameemptyerror] = useState(false)

  const [list, setlist] = useState([{
    "Name": "",
    "DayNight": "",
    "BracketCombination": "",
    "Number": "",
    "Amount": "",
    "BookedDate": ""
  }])

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);

  const renderHeader = () => {
    let headerElement = [
      'ID*- number',
      'user* -Userid(fk)',
      'name -Text',
      'key-Char',
      'type-char',
      'lead',
      'is_deleted - BooleanField',
      'created_by*-userid',
      'owned_by*-userid',
      'updated_by*-userid',
      'created_at*-userid',
      'updated_at*-userid'
    ]

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {

    return (
      <>
        <tr key={element.Name}>
          <td>{element.Name}</td>
          <td>{element.BookedDate}</td>
          <td>{element.DayNight}</td>
          <td>{element.BracketCombination}</td>
          <td>{element.Number}</td>
          <td>{element.Amount}</td>
        </tr>
      </>
    )
  }

  return (

    <div className="main">
      <Header />
      <div className="body">
        <div className="title">Add / Edit User</div>
        <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Company Name"}
                id="companyname_data"
                name={`data.CompanyName`}
                inputtype="Text"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Department"}
                id="Department_data"
                name={`data.Department`}
                inputtype="Department"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"User Type"}
                id="UserType_data"
                name={`data.UserType`}
                inputtype="UserType"
                type="text"
                min_length="3"
                required={true} />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"First Name"}
                id="firstname_data"
                name={`data.FirstName`}
                inputtype="firstname"
                type="text"
                min_length="3"
                required={true}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Last Name"}
                id={"lastname_data"}
                name={`data.LastName`}
                inputtype="lastname"
                type="text"
                min_length="1"
                required={true} />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Email ID"}
                id={"emailID_data"}
                inputtype="email"
                type="text"
                name={`data.EmailID`}
                required={true} />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Phone Number"}
                id={"phoneno_data"}
                inputtype="phone"
                type="text"
                name={`data.Phone`}
                maxLength="10"
                input_inner_leftprop={<div>+91</div>}
                required={true} />
            </div>
          </div>
        </form>

        {/* <div>
          <SimpleEditor
            editorUI={{
              theme: 'blue',
              image: 'data:image/jpeg;base64,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',
            }}
          />
        </div> */}

        <div className="login_button_container">
          <button onClick={() => { }} className="login_validatebutton">
            <div className="login_buttontext">Submit</div>
          </button>
        </div>
      </div>
    </div>

  );
}
export default NewUserForm