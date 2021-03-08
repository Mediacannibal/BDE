import React, { useState } from 'react'
import './style.css'

const TaskScreen = () => {

  const [isnameemptyerror, setnameemptyerror] = useState(false)

  return (

    <div className="main">
      <div className="body">
        <div className="inputfield_sub_container">
          <div className="name_text">Project:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Project ID"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Project ID!</div> : null}
        </div>

        <div className="inputfield_sub_container">
          <div className="name_text">Title:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Project Title"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Project Title!</div> : null}
        </div>

        <div className="inputfield_sub_container">
          <div className="name_text">Description:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Project Description"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Project Description!</div> : null}
        </div>

        <div className="inputfield_sub_container">
          <div className="name_text">Assignee:</div>
          <div className="textinput_box_container">
            <input
              className={isnameemptyerror ? "textinput_box invalid_entry_container" : "textinput_box"}
              id="input_value1"
              type="text"
              placeholder="Enter Assignee Name"
              name={`data.name`}
              required={isnameemptyerror}
              onChange={() => { setnameemptyerror(false) }}
            />
          </div>
          {isnameemptyerror ? <div className="invalid_entry">Please enter Assignee Name!</div> : null}
        </div>
      </div>
    </div>

  );
}
export default TaskScreen