import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import * as send from '../../../assets/send.svg'
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Spinner from 'components/Common/Spinner';
import Popup from 'components/Common/Popup'
import { taskAdd } from 'utils/api';
import TextField from 'components/common/TextFieldWithRef';
import * as trash from '../../../assets/trash.svg'
import * as edit from '../../../assets/edit.png'



const AddEditTask = ({ setPopup }) => {
  const history = useHistory();

  const [projectname, setprojectname] = useState('')
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [assignee, setassignee] = useState('')
  const [updatesby, setupdatesby] = useState('')

  const [startDate, setStartDate] = useState(new Date());
  const [spinner, setspinner] = useState(false)
  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [name, setname] = useState('');
  const [amount, setamount] = useState('');
  const [number, setnumber] = useState(0)
  const [number00, setnumber00] = useState("00")
  const [isSelect, setisSelect] = useState('value')
  const [isselectslot, setisselectslot] = useState('value')


  const [emptyprojectname, setemptyprojectname] = useState(false)
  const [emptytitle, setemptytitle] = useState(false)
  const [emptydescription, setemptydescription] = useState(false)
  const [emptyassignee, setemptyassignee] = useState(false)
  const [emptyupdatesby, setemptyupdatesby] = useState(false)


  const [isnameemptyerror, setnameemptyerror] = useState(false)
  const [isdateemptyerror, setdateemptyerror] = useState(false)
  const [isnumberemptyerror, setnumberemptyerror] = useState(false)
  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [iscombinationemptyerror, setcombinationemptyerror] = useState(false)
  const [isamountemptyerror, setamountemptyerror] = useState(false)

  const [ispopup, setispopup] = useState(false)
  const [showtable, setshowtable] = useState(false)
  const [list, setlist] = useState([{
    "project_name": "",
    "title": "",
    "description": "",
    "assignee": "",
    "updated_by": "",
  }])

  const updateinputdata = (data: any) => {

    let buff = []
    list.forEach(element => {
      if (element.project_name.length !== 0)
        buff.push(element)
    });

    buff.push(data)
    setlist(buff)
    console.log(buff)

  }

  useEffect(() => {

  }, [])

  const navigate = (param: string) => {
    console.log("///////////////")
    history.replace('/' + param)
  }

  const renderHeader = () => {
    let headerElement = ['', 'Project Name', 'Title', 'Description', 'Assignee', 'Updated By', '']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const editrow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index) { a.push(x[i]) }
      else {
        setname(x[i].project_name)
        setisselectslot(x[i].title)
        setisSelect(x[i].description)
        setnumber(Number(x[i].assignee))
        setamount(x[i].updated_by)

        a.push(x[i])

        console.log(a)
      }
    }
    setlist(a);
  }

  const reversedate = (data: any) => {
    let date = new Date(data)
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  }

  const removerow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index)
        a.push(x[i])
    }
    setlist(a);
  }

  const renderBody = (element: any, index: any) => {

    return (
      <>
        <tr key={element.project_name}>
          <div className='senddiv'>
            <img onClick={() => {
              editrow(element, index)
              console.log(">>>>>>>>>>>>>>>>>>", element)
            }}
              className='sendicon' src={edit} />
          </div>
          <td>{element.project_name}</td>
          <td>{element.title}</td>
          <td>{element.description}</td>
          <td>{element.assignee}</td>
          <td>{element.updated_by}</td>
          <div className='senddiv'>
            <img onClick={() => removerow(element, index)}
              className='sendicon' src={trash} />
          </div>
        </tr>
      </>
    )
  }
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);


  const parsetime = (time: any) => {
    let d = new Date(time)
    let a = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
    console.log(time, d)
    return a
  }

  const Validate = () => {
    let project_name = String(document.getElementById("project_name_data").value);
    let title = String(document.getElementById("title_data").value);
    let description = String(document.getElementById("description_data").value);
    let assignee = String(document.getElementById("assignee_data").value);
    let updated_by = String(document.getElementById("updateby_data").value);
    let temp = true
    if (project_name.length === 0 || title.length === 0 || description.length === 0 || assignee.length === 0 || updated_by.length === 0) {
      temp = false
      if (project_name.length === 0) {
        setnameemptyerror(true);
        console.log("ProjectName is empty")
      } if (title.length === 0)
        setslotemptyerror(true);
      console.log("Title is empty")
      if (description.length === 0)
        setcombinationemptyerror(true);
      console.log("Description is empty")
      if (assignee.length === 0)
        setamountemptyerror(true);
      console.log("Assignee is empty")
      if (updated_by.length === 0)
        setamountemptyerror(true);
      console.log("UpdatedBy is empty")
    }

    return temp
  }

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
                    min_length="1"
                    required={true}
                    valid={setemptyprojectname}
                    value={setprojectname}
                    setvalue={projectname}
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
                    min_length="1"
                    required={true}
                    valid={setemptytitle}
                    value={settitle}
                    setvalue={title}
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
                    min_length="1"
                    required={true}
                    valid={setemptydescription}
                    value={setdescription}
                    setvalue={description}
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
                    min_length="1"
                    required={true}
                    valid={setemptyassignee}
                    value={setassignee}
                    setvalue={assignee}
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
                    min_length="1"
                    required={true}
                    valid={setemptyupdatesby}
                    value={setupdatesby}
                    setvalue={updatesby}
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
