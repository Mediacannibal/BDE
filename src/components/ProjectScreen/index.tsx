import Header from 'components/common/Header'
import React, { useState } from 'react'
import './style.css'

const ProjectScreen = () => {
  const [isnameemptyerror, setnameemptyerror] = useState(false)

  const [list, setlist] = useState([{
    "Name": "",
    "DayNight": "",
    "BracketCombination": "",
    "Number": "",
    "Amount": "",
    "BookedDate": ""
  }])

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
      <div className="body">
        <div className="inputfield_sub_container">
          <div className="name_text">Name:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Name"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Name!</div> : null}
        </div>

        <div className="inputfield_sub_container">
          <div className="name_text">Type:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Type"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Type!</div> : null}
        </div>

        <div className="inputfield_sub_container">
          <div className="name_text">Lead:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Lead"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Lead!</div> : null}
        </div>
      </div>
    </div>

  );
}
export default ProjectScreen