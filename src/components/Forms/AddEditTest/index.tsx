import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import * as send from '../../../assets/send.svg'
import '../../../components/app.css'
import Footer from 'components/common/Footer';
import { useForm } from 'react-hook-form';
import Spinner from 'components/Common/Spinner';
import Popup from 'components/Common/Popup'
import TextField from 'components/common/TextFieldWithRef';
import * as trash from '../../../assets/trash.svg'
import * as edit from '../../../assets/edit.png'
import { addTest } from 'utils/api';


const AddEditTest = (setPopup: any) => {
  const history = useHistory();
  const [number, setnumber] = useState(0)
  const [number00, setnumber00] = useState("00")

  const [isSelect, setisSelect] = useState('value')
  const [isselectslot, setisselectslot] = useState('value')
  const [isbracketSelect, setbracketSelect] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [spinner, setspinner] = useState(false)
  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [num, setnum] = useState('');
  const [test, settest] = useState('');
  const [portrait, setportrait] = useState('');
  const [landscape, setlandscape] = useState('');
  const [device, setdevice] = useState('');
  const [remarks, setremarks] = useState('');

  const [emptynumber, setemptynumber] = useState(false)
  const [emptytest, setemptytest] = useState(false)
  const [emptyportrait, setemptyportrait] = useState(false)
  const [emptylandscape, setemptylandscape] = useState(false)
  const [emptydevice, setemptydevice] = useState(false)
  const [emptyremarks, setemptyremarks] = useState(false)

  const [inputvalue, setinputvalue] = useState("")


  const [isbracketSelecterror, setbracketSelecterror] = useState(false)

  const [name, setname] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false });
  const [amount, setamount] = useState({ "value": "", "error": "", "isvalid": "false", "isActive": false });

  const [isnameemptyerror, setnameemptyerror] = useState(false)
  const [isdateemptyerror, setdateemptyerror] = useState(false)
  const [isnumberemptyerror, setnumberemptyerror] = useState(false)
  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [iscombinationemptyerror, setcombinationemptyerror] = useState(false)
  const [isamountemptyerror, setamountemptyerror] = useState(false)

  const [ispopup, setispopup] = useState(false)
  const [showtable, setshowtable] = useState(false)
  const [list, setlist] = useState([{
    "number": "",
    "test": "",
    "portrait": "",
    "landscape": "",
    "device": "",
    "remarks": "",
    "image_link": ""
  }])

  const updateinputdata = (data: any) => {

    let buff = []
    list.forEach(element => {
      if (element.test.length !== 0)
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

  const editrow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index) { a.push(x[i]) }
      else {
        setname(x[i].test)
        setisselectslot(x[i].portrait)
        setisSelect(x[i].device)
        setnumber(Number(x[i].remarks))
        setamount(x[i].image_link)

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

  const renderHeader = () => {
    let headerElement = ['', 'No.', 'Test', 'Portrait', 'Landscape', 'Device', 'Remarks', 'Image link', '']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any, index: any) => {

    return (
      <>
        <tr key={element.bug_title}>
          <div className='senddiv'>
            <img onClick={() => {
              editrow(element, index)
              console.log(">>>>>>>>>>>>>>>>>>", element)
            }}
              className='sendicon' src={edit} />
          </div>
          <td>{element.number}</td>
          <td>{element.test}</td>
          <td>{element.portrait}</td>
          <td>{element.landscape}</td>
          <td>{element.device}</td>
          <td>{element.remarks}</td>
          <td>{element.image_link}</td>
          <div className='senddiv'>
            <img onClick={() => removerow(element, index)}
              className='sendicon' src={trash} />
          </div>
        </tr>
      </>
    )
  }

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
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
    let number = String(document.getElementById("number_data").value);
    let test = String(document.getElementById("test_data").value);
    let portrait = String(document.getElementById("portrait_data").value);
    let landscape = String(document.getElementById("landscape_data").value);
    let device = String(document.getElementById("device_data").value);
    let remarks = String(document.getElementById("remarks_data").value);
    let image_link = String(document.getElementById("activity_input_value").value);
    let temp = true
    if (number.length === 0 || test.length === 0 || portrait.length === 0 || landscape.length === 0 || device.length === 0 || remarks.length === 0 || image_link.length === 0) {
      temp = false
      if (number.length === 0) {
        setnameemptyerror(true);
        console.log("number is empty")
      } if (test.length === 0)
        setslotemptyerror(true);
      console.log("test is empty")
      if (portrait.length === 0)
        setcombinationemptyerror(true);
      console.log("portrait is empty")
      if (landscape.length === 0)
        setamountemptyerror(true);
      console.log("landscape is empty")
      if (device.length === 0)
        setamountemptyerror(true);
      console.log("device is empty")
      if (remarks.length === 0)
        setamountemptyerror(true);
      console.log("remarks is empty")
      if (image_link.length === 0)
        setamountemptyerror(true);
      console.log("image_link is empty")
    }

    return temp
  }

  const _onChangeHandler = (data: any) => {
    console.log(data.target.files[0])
    let formdata = new FormData()
    let filedata = data.target.files[0]
    formdata.append("file", filedata)
    // imageUpload(Callback, formdata)
  }

  return (
    <>
      { !ispopup ?
        <Popup
          title={"Add / Edit Test"}
          popup_body={
            <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>
              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Number of Test"}
                    id="number_data"
                    name={`data.number`}
                    inputtype="Text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptynumber}
                    value={setnum}
                    setvalue={num}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Test"}
                    id="test_data"
                    name={`data.test`}
                    inputtype="Text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptytest}
                    value={settest}
                    setvalue={test}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Portrait"}
                    id="portrait_data"
                    name={`data.Portrait`}
                    inputtype="Text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptyportrait}
                    value={setportrait}
                    setvalue={portrait}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Landscape"}
                    id="landscape_data"
                    name={`data.landscape`}
                    inputtype="Text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptylandscape}
                    value={setlandscape}
                    setvalue={landscape}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Device"}
                    id="device_data"
                    name={`data.device`}
                    inputtype="Text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptydevice}
                    value={setdevice}
                    setvalue={device}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="textinput_box_container">
                  <TextField
                    label={"Remarks"}
                    id="remarks_data"
                    name={`data.remarks`}
                    inputtype="Text"
                    type="text"
                    min_length="1"
                    required={true}
                    valid={setemptyremarks}
                    value={setremarks}
                    setvalue={remarks}
                  />
                </div>
              </div>

              <div className="inputfield_sub_container">
                <div className="upload-wrap">
                  <button type="button" className="nice-button">upload_file</button>
                  <input type="file" name="file" className="upload-btn" id="activity_input_value" onChange={_onChangeHandler} />
                </div>
                {
                  (inputvalue !== null) ? <div>
                    <img
                      className='activity_selectedimage' src={inputvalue} />
                  </div> : null
                }
              </div>
            </form>
          }

          confirmClick={() => {
            console.log("***SEND***")
            setispopup(true)
          }}
          cancelClick={() => {
            console.log("***CANCEL***")
            // history.push("/TaskList")
            setPopup
          }}
        />
        :
        <Popup
          title={"Add / Edit Test?"}
          desc1={"The following Test will be placed!"}
          desc2={"Please click 'Confirm' to proceed?"}
          confirmClick={() => {
            console.log("***SUBMIT***", list)
            let token = JSON.parse(String(localStorage.getItem("AuthToken")))
            addTest(async (data: any, errorresponse: any) => {
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

export default AddEditTest
