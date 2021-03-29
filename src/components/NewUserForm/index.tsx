import TextField from 'components/common/TextFieldWithRef'
import SimpleEditor from 'react-simple-image-editor';
import React, { useState } from 'react'
import './style.css'
import { useForm } from 'react-hook-form';
import * as trash from '../../assets/trash.svg'
import * as edit from '../../assets/edit.png'
import * as send from '../../assets/send.svg'
import { newUserSignup } from 'utils/api';
import Popup from 'components/Common/Popup';
import { useHistory } from 'react-router-dom';


const NewUserForm = () => {
  const history = useHistory();

  const [emptycompany_name, setemptycompany_name] = useState(false)
  const [emptydepartment, setemptydepartment] = useState(false)
  const [emptyfirstname, setemptyfirstname] = useState(false)
  const [emptylastname, setemptylastname] = useState(false)
  const [emptyemail, setemptyemail] = useState(false)
  const [emptyphone, setemptyphone] = useState(false)
  const [emptypassword, setemptypassword] = useState(false)
  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');

  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [isselectslot, setisselectslot] = useState('value')

  const [ispopup, setispopup] = useState(false)
  const [showtable, setshowtable] = useState(false)

  const [company_name, setcompany_name] = useState('')
  const [department, setdepartment] = useState('')
  const [username, setusername] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [user_type, setuser_type] = useState('')
  const [password, setpassword] = useState('')

  const [number, setnumber] = useState(0)
  const [number00, setnumber00] = useState("00")
  const [name, setname] = useState('');
  const [amount, setamount] = useState('');
  const [isSelect, setisSelect] = useState('value')

  const [list, setlist] = useState([{
    "company_name": "",
    "department": "",
    "firstname": "",
    "lastname": "",
    "email": "",
    "phone": "",
    "user_type": "",
    "password": "",
  }])

  const updateinputdata = (data: any) => {

    let buff = []
    list.forEach(element => {
      if (element.company_name.length !== 0)
        buff.push(element)
    });
    buff.push(data)
    setlist(buff)
    console.log(buff)
  }

  const renderHeader = () => {
    let headerElement = ['', 'Company Name', 'Department', 'User Name', 'First Name', 'Last Name', 'Email', 'Phone', 'UserType', 'Password', '']

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
          <td>{element.company_name}</td>
          <td>{element.department}</td>
          <td>{element.email}</td>
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.password}</td>
          <div className='senddiv'>
            <img onClick={() => removerow(element, index)}
              className='sendicon' src={trash} />
          </div>
        </tr>
      </>
    )
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

  const editrow = (element: any, index: any) => {

    console.log(list, element, index)
    let x = list
    let a = []
    for (let i = 0; i < x.length; i++) {
      if (i !== index) { a.push(x[i]) }
      else {
        setname(x[i].company_name)
        setisselectslot(x[i].department)
        setisSelect(x[i].firstname)
        setnumber(Number(x[i].lastname))
        setamount(x[i].email)

        a.push(x[i])

        console.log(a)
      }
    }
    setlist(a);
  }

  const phonenumberformatter = (value: any) => {
    var prefix = "+91"
    if (value.indexOf(prefix) !== 0) {
      setphone({ "value": prefix + value, "error": "", "isvalid": "false" });
      return prefix + value
    }

    return value

  }


  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  console.log(errors);

  const Validate = () => {
    let company_name = String(document.getElementById("companyname_data").value);
    let department = String(document.getElementById("Department_data").value);
    let username = String(document.getElementById("email_data").value);
    let firstname = String(document.getElementById("firstname_data").value);
    let lastname = String(document.getElementById("lastname_data").value);
    let email = String(document.getElementById("email_data").value);
    let phone = String(document.getElementById("phoneno_data").value);
    let user_type = String(document.getElementById("user_type_data").value);
    let password = String(document.getElementById("password_data").value);

    let temp = true
    if (company_name.length === 0 || department.length === 0 || username.length === 0 || firstname.length === 0 || lastname.length === 0 || email.length === 0 || phone.length === 0 || isSelect.length === 0 || password.length === 0) {
      temp = false
      if (company_name.length === 0) {
        setemptycompany_name(true);
        console.log("company name is empty")
      } if (department.length === 0)
        setemptydepartment(true);
      console.log("department is empty")
      if (firstname.length === 3)
        setemptyfirstname(true);
      console.log("firstname is empty")
      if (lastname.length === 0)
        setemptylastname(true);
      console.log("lastname is empty")
      if (email.length === 0)
        setemptyemail(true);
      console.log("email is empty")
      if (phone.length === 0)
        setemptyphone(true);
      console.log("phone is empty")
      if (password.length === 0)
        setemptypassword(true);
      console.log("Password is empty")

    }
    return temp
  }

  return (

    <div className="main">
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
                min_length="1"
                required={true}
                valid={setemptycompany_name}
                value={setcompany_name}
                setvalue={company_name}
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
                min_length="1"
                required={true}
                valid={setemptydepartment}
                value={setdepartment}
                setvalue={department}
              />
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
                min_length="1"
                required={true}
                valid={setemptyfirstname}
                value={setfirstname}
                setvalue={firstname}
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
                required={true}
                valid={setemptylastname}
                value={setlastname}
                setvalue={lastname} />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"Email ID"}
                id={"email_data"}
                inputtype="email"
                type="text"
                name={`data.EmailID`}
                required={true}
                valid={setemptyemail}
                value={setemail}
                setvalue={email} />
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
                required={true}
                valid={setemptyphone}
                value={setphone}
                setvalue={phone}
              />
            </div>
          </div>

          <div className="inputfield_sub_container">
            <div className="Booking_slot_dropdown">
              <select id="user_type_data" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                required={isslotemptyerror}
                value={isselectslot}
                onChange={(e) => {
                  setslotemptyerror(false)
                  setisselectslot(e.target.value)
                }}
              >
                <option hidden value="">USER TYPE</option>
                <option value="DAY">ADMIN</option>
                <option value="NIGHT">USER</option>
              </select>
            </div>
            {isslotemptyerror ? <div className="invalid_entry">Please select a UserType!</div> : null}
          </div>

          <div className="inputfield_sub_container">
            <div className="textinput_box_container">
              <TextField
                label={"New Password"}
                id="password_data"
                name={`data.password`}
                inputtype="password"
                type="text"
                min_length="1"
                required={true}
                valid={setemptypassword}
                value={setpassword}
                setvalue={password}
              />
            </div>
          </div>
        </form>

        <div className="add_button_container">
          <button
            onClick={() => {
              let company_name = String(document.getElementById("companyname_data").value);
              let department = String(document.getElementById("Department_data").value);
              let username = String(document.getElementById("email_data").value);
              let firstname = String(document.getElementById("firstname_data").value);
              let lastname = String(document.getElementById("lastname_data").value);
              let email = String(document.getElementById("email_data").value);
              let phone = String(document.getElementById("phoneno_data").value);
              let user_type = String(document.getElementById("user_type_data").value);
              let password = String(document.getElementById("password_data").value);

              if (Validate()) {
                setshowtable(true)
                let temp = {
                  "company_name": company_name,
                  "department": department,
                  "username": username,
                  "firstname": firstname,
                  "lastname": lastname,
                  "email": email,
                  "phone": phone,
                  "user_type": user_type,
                  "password": password,
                }
                updateinputdata(temp)

                setname('')
                setisselectslot('value')
                setisSelect('value')
                setnumber(0)
                setamount('')
              }
            }}
            className="add_edit_button">
            <div className="add_edit_buttontext">Add</div>
          </button>
        </div>

        {showtable ?
          <><div className="internal_table">

            <table id='internal_table'>
              <thead>
                <tr>{renderHeader()}</tr>
              </thead>
              <tbody>
                {
                  list.map(renderBody)
                }
              </tbody>
            </table>
          </div>
            <div className='senddiv'>
              <img onClick={() => {
                console.log("***SEND***")
                setispopup(true)
              }}
                className='sendicon' src={send} />
            </div></>
          :
          null
        }

        {ispopup ?
          <>
            <div>
              <Popup
                title={"Add / Edit User?"}
                desc1={"The following User will be placed!"}
                desc2={"Please click 'Confirm' to proceed?"}
                listitems2={list}
                confirmClick1={() => {
                  console.log("***SUBMIT***", list)
                  let token = JSON.parse(String(localStorage.getItem("AuthToken")))
                  newUserSignup(async (data: any, errorresponse: any) => {
                    if (data.status === 200) {
                      setispopup(false)
                      console.log('Sucess ' + JSON.stringify(data));
                      localStorage.setItem('AuthToken', JSON.stringify(data.data.result.token));
                      localStorage.setItem('UserDetails', JSON.stringify(data.data.result.user_details));
                      history.push('/')
                      // alert("successfully added")
                      setbackendresponse("Successfully Added!")
                      setbackendresponse_popup(true)
                    } else {
                      setispopup(false)
                      setbackendresponse("Failed, Please Try Again!")
                      console.log('error ' + JSON.stringify(data));
                      console.log('error ' + JSON.stringify(errorresponse));
                    }
                  }, token, list[0])
                }}
                cancelClick2={() => {
                  console.log("***CANCEL***")
                  setispopup(false)
                }}
              />
            </div>
          </>
          :
          null
        }

        {/* <div>
          <SimpleEditor
            editorUI={{
              theme: 'blue',
              image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA4RDg4OEBIODg4ODg4ODg4OEREODg4OFxMYGBcTFxcbICwkGx0pHhcXJTYlKS4wMzMzGiRGPjsxSiwyQDABCwsLEA4QGhISGjIgICIyMjAwMDIyMjIyMjIwMDAwMjAyMjAyMzIyMDIyMDAyMjAwMjIwMDAwMDQwMD0yMjIwMv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADgQAAICAQIEBAQDBgYDAAAAAAABAgMRBBIFEyExQVFhcQYiMoFSkbEUI0JyofAzksHC0eEHU3P/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAMxEAAgIBAwEECQMEAwAAAAAAAAECEQMEEiExQVFhgQUTIjJxobHB8NHh8RRCYpEVI1L/2gAMAwEAAhEDEQA/AOMgGiwMQsTUzkliEg8JFaBYgQYF2pl6lmdWy7TMraEadJbrM+qZdqkVSQJluBZgVa2i1CSKWhlmCLVcSpXMs1yK2h2XqolqEEUoWoMryponFot9ETi0Uud1CK0iX76SLW8bcAVhJWEWx7wuR8glIfcIkpBMksgtwsiJbgu4fcCFuFY9wXcNuB5G3C3D3BdwzYPcNuFbFuCZGyDchnMjZFzJtkXIFK1AZXisi5lmViATuKs7ytO4VELLFlxVstAysASmTURMJOwDzAc5g+YWKIWeYolFglIkpHozMWYSDQfh6qPdLr7gNLXvshXlRc5RinLpFNySy/TqeqcK+E9Pp8WJu5uHTfja012a/wBV/QpyNrp1NOmwLJK5uo/N+C6rz+XYedVPOEsNvGPFP28y/pdJqbduyElF/VZNYUYp4ltz3l4rPT37HX38F0y1VD5ajvnNqS6QU+jXy9s5659/M6XUaWqFLxhZSn0/FjBDquTTDSwjN37Xdf3XR/R93NHltXDrdPfY3OdlUl1cm21apdPf5V3NGq0Nx62KjDHeycpY8lFY/wBxl12EFGlx+fjszaybnltu3S/b5UbNdpZhYY9dpahaRlEymtCwPG0yo2h4WFTiM01cGjcZUbQkLCtxGjUjaEjcZzsHjaUxVqy/MqlRpxuCRuMyNoSNonErNKNoRWGZG0KrSDiOzQVhLmGbzxnqSLRLczT5g3NRlvUi/aCND3M0+aLmmZ+0DPUC2hZpu5EXeZjvIu8NoWaL1AGWpKEriDtDaBcneClcVJWgpWD2gWp2gZ2gJWApWElELDzsAysBymDlMsURBJTIbwcpg+YTURHnKkSUgKkSUjvFJf4fpbLrYVQTzKUY7sSahl9G9qbx6nren1Oq0ukitRCFtm3EHTKOLZ7cpRTaSbecrt0bWOxx/wD44tjCy2zbqc7VumpKFEo5fTtmUv0y/N56XUXrWcQbdadOijGNds5SxZfOO6xxS6Swtsd3fpJeJlnJt0dTBhUIp9rV/dfnXryPqdTqJV86ajHbiyMFH97T0+jcvqXTu/Ea3iErFKOXhLPfPf8AtlrX3raoQxldsdPsYtmnacYLpvUIpZxhLc2vsKUo4ouUui6/n5ySlulNRj1f5/Jm36aLnZY+055XriMY5/KKK8rK49FFFriUsdOyXRJdkvIwbbOpk07llW6T6j1m3FxFGlG+Hlj2DwsXg/zMeFgaFpr2HJcr7DZhaGhaZMLg8LSDiRNSNgaFnVGXG4NXd1RW4kl1Neyf6EY2AtRP5YvzRVVxmw8wRr1i25GaSsJxtMxXElcTcTMaivE9QZqtH5hDaBfd7G5pS5g+8i4jRd5ouaUuYLmC2Dsu80bmlPeLmC2BZcdozsKe8ZzDYFlt2EHYVnMi5hsHZZdhBzK7mRdhLYKw7mDcwLsIOY9oWHlMHKYGUwcpk9oWFlIhuBSmQ3EtojgcklIHkdM7LI0dR8G61wlqa5WWbeRK2GYScKJLOMd0+6bfT6evptfCF1kdK9zsnqLLLLJ8xShbNzlLEmpeeG/szgIvHbowsdTNdpyXVPo33XZmWWGdtxa/1+/26db6m5aqDilKLTVcp9yro129Wux8xrk9N1GojTCV18o1pdIwzmcpvtGMV4/dIXCNQ9RZGyaj8qly132J9+r8eiPMYSw8+OTuvhTVLMepz/SWOcdO1uv5Gn0dkhLJwq87/QucZpabOV1KaZ6JxXS74bl5HE8R0rTZl9F6lOO1mjX6ferRmRsDRsKck4sUbDuVZ59pp0zRhaGjcZsbCcbCLQjUjcEV5mRsCRsIOIHWOe6iEl4dDMlZhlngdnMotq8Y/OvYpXrEmc/A9uSeN9j+T5R1dTD1mKGRdq+nAaNoRWFKGQuGaW0c/wBVLuLSsJKwoczASue5pf2kDVckUm3SL8J+L7fqM7SpZcuy7IirCCjfJKXHsou8wfeUuYPzA2kS5zBcwp8wfmC2gW+YNzCrzBnYG0C05kXMrOwZ2BtAsuZBzKztIuwe0ZZdgNzAOwHKwltEWZTBysASsBSsJbQLMpg+YV5WA+YS2gcmmLIPJLJ0hhExJkEx8kaEEUjY4Hr+XYk30z0MVMlGTXXyIZManFxZZiyPHNSXYe28N1Ebql4vBl8Y4bnLSOY+EuP7ZKub9Pc9GhKFkE1hpo8XqMOTR5uPLxPTY8sc0Ny5T+R5hrtE030MyVTR6PxPhKeWkczq+GtN9Ds6T0gpow6nQqXKOcSYSKZoPSNPsFr0pveojRh/oWZ8YS8h9zXfob2n0OfAvR4KprsZpekMcfeLP+Mk1wzG4DrVXqIZ+ifyy9mbPFNNtsflnp7GZxD4dugnOtNpdcLv9jZ0V/7VpYzf+LT+7ti+6x2f5GXUZIOUdRjdr3ZeHdf0/wBGjS45xTwZVT6rx76KFNWS9HStoPpdNl9jbp0yS7GLUa3a6Rtx6eKXJxHEa3XJeoq5bK8/xT6+y8DW+JtJ89KXRTm/sllv+hk2xc5dO3ZLyR08Gf1uKDfn5HMy6bZlm15ea5+X1AOwfmhFpmCtqaNKyRZjnpZrkkrR+aUHZhj8wt2mUvc0fmlDmj80Noy9zRuaUeYNzRbQLztIu0p8wZ2D2gXHaQdpUdhF2BtAtu0hKwquwg7CW0CzK0g7ADsBuY9oB5WEd5Xchtw6AwsiTIJiTNRbQRMfJDIsgRoMmJMGmOmAqCxk0008Ndmjtvhb4scHGq59Oyk+xw2RZM+p02PUQ2TX6ouwaieGVx813nvlN8JwU4tTg14dWitqdBCxZWPdHlPA/ibUaSSw3ZX4wk+uPRno3B/iPS6pLlzVVvjXPpl+x5bVejcune7qv/S+/d8eh3MGrhl93r3Pr5d/kVdRwlp9gENFh9jp5XLtYtue0l1i/uSemhLqsP2M39RkgvaNScJGNpdL26GvTUkiUaceAaETLObm+SxtJcDuEUupmT4dXG530/LKa2XVrpGyHn/Mu6NDUyMud7hLKNGHG2nT6qvj+fxyZJ5aZYo0+2T/AKF9Yil6lfT3xsw19XihtVbicV6orjjk51LqWzyrbaMzjsN84xXdKX2zj/gDpuEvGWja5Cdk7JeiWfJBq5xfSKzju/AnHNNQUY9EOW1PnqZEuGJI57jMY1p56HV8T4hVVBt5lLHywgszk/bwXqcDxGF+om52SjSs/LDO9peuOmfubvRynOe6b9n6/BdX8aoo1UqhUY3L863x9/Ay5W5bYuYWXpqI93Of5RQOdlMe0PzbZ6JZE+iZwXppLmTS8/0BcwW8UtTX4QQN6iH4ESV9xU4RX9y+YTmC3gHZHya9mRc15/mSog4ljeM5lbcM5j2iLLmRcyu7BnMNow7kM5ldzIuQ9oFh2EHYBcyLmPaAV2DbwDmNuHQGcmLJHI+SZoolkdMjkWRkQmR0waY+QFQTI6YPI+RionklGTTTTaa7NPDQPI6YCo6XhfxhraEoSktRX+C3q8ej7nT6H4y0VmM83ST9Fzam/t1R5pkWTDl9HYMlutrfdx8vdfmr8TTDV5Y9Xu+P69T2vScaU18llOp/+VkXP7xfUtri1a6TTrflNOP6nk3BPhnUapK3Kpp/9s08y/lj4nTKijSRwrtbfJeDvsqq/wAsGv1ONn0GGMtsZbpdyXT4u9t+HB0Meom1ua2r43+52VmrhJdJJ/cztRM5HUcem+kYwgvPapT/AM0ssDHi1v4n92Tx6CUeSEs6Z08dVKuWYvBcs4irFGXacWty8/U42XEpfxTS/IjTxVSk1Ft7U3KT7exa9JfNdCCzVwegLUO2eE1GqLxubwmXnDMdkJxivTG5/c4jQa1WbcyaUksPul6G9TTckpJ7o+DTyjnZ9LVR3V4GrFmfWrZbv4Qn1y234vqY+t4Q1nobun1M10ki7ZBSjnwZk9ZlwvraNcZxydUeaa3SOOTE1MWj0PjGjSyzieJ1JZO9odX6xGLWaZVwY28feBlLqxt52Tg0H3jbwG4fcABt4t4DcLcABnMjuA7htwAGcxnIFuG3DoYRzE5AnIi5BQUFciO4g5DbgodFLI+SIhGiieSWQeRZGKguRZB5HyFioJkWSGR8jsKJ5HyQyLIxUEyTrlHdHd9O6O7+XPX+gDI+QFR63+1xdMVW1s2Lbt7Yx0wczxKbbZzOh4vfStsJZh+CXWK9vItT485r5q1n0l/0cvHo5YnxyjZLMprnghfa0VXqZeDI36rf/Dj7lfcdCEeOTLN9wd2N92w9V+ytpd5/oUtw+4m1fBBccm/wbVPbtb7M7ThXFJQj37Hmugu2Wx8pfK/9DpXq+XTOXlFv74OdrMCm6rqbMGRpfA7jRfEtFzlXB1TtjlOty5cpY8n/AH7jT+LdJCTqsVunsj3rtjtfun2a9UzxyE2mpJtSTypJ4afnk6jQcdp1NcdLxBbl2r1KwrK36v8AtGHP6IhDlXKPak/aXil0a8OH3NmnDrt/DSUuy+j8PD4nTcT+I6Jp7Zxa9zjeJcRjJvDyV+N8Gt0sk21ZTPrVbH6ZLyfkzL3G7R6LBCKljluRVqdXlbcJR2sK5Z6jbge4W46RzaCbhbgW4W4AoJuFuB7htwBtCbhZB7htwh7QuRsgnIbcA9oTcM5A3IZyFY9pNyG3ENwsiHQLI2SORZEW0TyLJHIsgBPIskMj5GKiWRZI5FkLCieRZIZHyFionkWSGR8gFE8iyQyPkBUSyPkhkfIBRPIskciyOxUTyWr9fZOKg8KPTOPH3KOSWRNJ0+4fQnuFuB5FkdkaOj4HxtRi9Jqf3mms+X5urrf/AAVeOcKlp5qUHvpn1rn6eTMbJ0PA+JRnB6PUfNXNYrk/4H4Ix5IPDJ5ca4fvR7/8l4rt711NmOSyx9VPr/a+7wfgYW4W4scS0cqLZVvt3jLwaKmTXGakk1ymZZQcW01yiWRZI5GyOxUTyNkjkbIgonkbJHI2QCgmRskMjAOieRskMjZEOieRskcjZFY6B5JZIZFkROieRZI5FkAolkfJHIwASyLJEfICJ5FkjkWR2BIWSORZCxBMiyQyPkLAlkWSORZGFE8iyQFkBUTyLJDI4WFEsiyRyLIWFE8iz5dyGRZCwo6OFq1emcJf41S6PxlE5+WU2n3XRhNDqnVbGxdk8SXnEs8ZqSmrIfRYtyM+Nerns7HyvuvuaZ/9kN3auH9ijkRDIsl9maiWRZIZFkLHRPI2SORshYUTyNkbIsiAWRZI5FkBksjZI5FkQERCEImIcQhgIQhAIcWRCABD5EIAEMIQCY4hxDELIsiEAD5GyIQALIsiEACyLIhAAsiyIQALJpVT5mmlB/VU8r+UQirL7t9zX1LcPvV38GbkbI4iwqQ2RZEIAGEIQAIQhAAwhCAkONkQgA//2Q==',
            }}
          />
        </div> */}

        {/* <div className="login_button_container">
          <button onClick={() => { }} className="login_validatebutton">
            <div className="login_buttontext">Submit</div>
          </button>
        </div> */}

      </div>
    </div>
  );
}
export default NewUserForm