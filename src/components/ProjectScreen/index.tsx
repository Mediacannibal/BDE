import Spinner from 'components/Common/Spinner'
import AddEditProject from 'components/Forms/AddEditProject'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { listingTask } from 'utils/api'
import './style.css'

const ProjectScreen = () => {
  const [isnameemptyerror, setnameemptyerror] = useState(false)
  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(true)


  const [listItems, setlistItems] = useState([
    {
      "zero": "1",
      "Row_name": "Customer 1",
      "one": "00",
      "two": "90",
      "three": "60",
      "four": "20",
      "five": "30",
      "six": "40",
    }
  ])

  let params = useParams();
  useEffect(() => {
    // let usertype1 = ""
    // let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    // if (UserDetails !== null) {
    //   usertype1 = UserDetails.user_type
    //   let user_id = UserDetails.user_id
    //   console.log(screen, user_id, usertype1)
    //   setusertype(usertype1)
    //   setuserID(user_id)
    // }
    setspinner(true)
    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    // if (token === null)
    //   history.push("/")
    // if (params.id === undefined) {
    listingTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let project_name: Iterable<any> | null | undefined = []
        let title: Iterable<any> | null | undefined = []
        let description: Iterable<any> | null | undefined = []
        let assignee: Iterable<any> | null | undefined = []
        let updated_by: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          project_name.push(element.project_name)
          title.push(element.title)
          description.push(element.description)
          assignee.push(element.assignee)
          updated_by.push(element.updated_by)
        });
        setunique_project_name(Array.from(new Set(project_name)));
        setunique_title(Array.from(new Set(title)))
        setunique_description(Array.from(new Set(description)))
        setunique_assignee(Array.from(new Set(assignee)))
        setunique_updated_by(Array.from(new Set(updated_by)))


      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

  }, [])


  const renderHeader = () => {
    let headerElement = ['Branch', 'Project Type', 'Title', 'Description', 'File Links', 'Linked Tasks', 'Status', 'Start Date', 'End Date']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    return (
      <tr key={element.project_name}>
        <td>{element.project_name}</td>
        <td>...</td>
        <td>...</td>
        <td>{element.title}</td>
        <td>{element.description}</td>
        <td>{element.assignee}</td>
        <td>{element.updated_by}</td>
        <td>...</td>
        <td>...</td>
      </tr>
    )
  }

  return (

    <div className="main">
      {spinner ?
        <div className="spinner_fullscreen_div">
          <Spinner />
        </div> :
        null
      }

      {popup ?
        <AddEditProject
          setPopup={() => {
            setpopup(false)
          }}
        />
        :
        <div onClick={() => { setpopup(true) }}>click me </div>
      }

      <div className="body">
        <div className="internal_table">
          <table id='internal_table'>
            <thead>
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
              {
                listItems.map(renderBody)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}
export default ProjectScreen