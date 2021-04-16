import Spinner from 'components/Common/Spinner'
import AddEditProject from 'components/Forms/AddEditProject'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProject, listingTask } from 'utils/api'
import './style.css'
import * as add from '../../assets/add.svg'
import * as up_down_arrow from '../../assets/up_down.svg'


const ProjectScreen = (props: any) => {
  const [unique_branch, setunique_branch] = useState(false)
  const [unique_project_type, setunique_project_type] = useState(false)
  const [unique_title, setunique_title] = useState(false)
  const [unique_description, setunique_description] = useState(false)
  const [unique_file_links, setunique_file_links] = useState(false)
  const [unique_linked_tasks, setunique_linked_tasks] = useState(false)
  const [unique_status, setunique_status] = useState(false)
  const [unique_start_date, setunique_start_date] = useState(false)
  const [unique_end_date, setunique_end_date] = useState(false)

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
      "seven": "50",
    }
  ])

  let params = useParams();
  useEffect(() => {
    props.setheader_options(screen_header_elements)
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
    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        setspinner(false)
        // console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let branch: Iterable<any> | null | undefined = []
        let project_type: Iterable<any> | null | undefined = []
        let title: Iterable<any> | null | undefined = []
        let description: Iterable<any> | null | undefined = []
        let file_links: Iterable<any> | null | undefined = []
        let linked_tasks: Iterable<any> | null | undefined = []
        let status: Iterable<any> | null | undefined = []
        let start_date: Iterable<any> | null | undefined = []
        let end_date: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          branch.push(element.branch)
          project_type.push(element.project_type)
          title.push(element.title)
          description.push(element.description)
          file_links.push(element.file_links)
          linked_tasks.push(element.linked_tasks)
          status.push(element.status)
          start_date.push(element.start_date)
          end_date.push(element.end_date)
        });
        setunique_branch(Array.from(new Set(branch)));
        setunique_project_type(Array.from(new Set(project_type)));
        setunique_title(Array.from(new Set(title)))
        setunique_description(Array.from(new Set(description)))
        setunique_file_links(Array.from(new Set(file_links)))
        setunique_linked_tasks(Array.from(new Set(linked_tasks)))
        setunique_status(Array.from(new Set(status)))
        setunique_start_date(Array.from(new Set(start_date)))
        setunique_end_date(Array.from(new Set(end_date)))
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

  }, [])


  const renderHeader = () => {
    let headerElement = ['Branch', 'Project Type', 'Title', 'Description', 'File Links', 'Status', 'Start Date', 'End Date']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody = (element: any) => {
    return (
      <tr key={element.branch}>
        <td>{element.branch}</td>
        <td>{element.project_type}</td>
        <td>{element.title}</td>
        <td>{element.description}</td>
        <td>{element.file_links}</td>
        <td>{element.status}</td>
        <td>{element.start_date}</td>
        <td>{element.end_date}</td>
      </tr>
    )
  }

  const screen_header_elements = () => {
    return (
      <>
        <div className='screen_header_element' onClick={() => { setpopup(true) }}>
          <img className='header_icon' src={add} />
          <div>Add Project</div>
        </div>
      </>
    )
  }

  const Card = ({ card_title, card_body }) => {
    const [card_open, setCard_open] = useState(true)
    return (
      <div className='dashboard_card'>
        <div className='card_title'>
          {card_title}
          <img className={card_open ? 'open_close_arrow_icon' : 'open_close_arrow_icon rotate180'} src={up_down_arrow} onClick={() => { setCard_open(!card_open) }} />
        </div>
        {card_open &&
          <div className='card_details_wrapper'>
            {card_body}
          </div>
        }
      </div>
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

      {popup &&
        <AddEditProject
          setPopup={() => {
            setpopup(false)
          }}
        />
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