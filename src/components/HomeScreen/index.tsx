import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import Spinner from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';
import { getMainTask, getProject } from 'utils/api';


const HomeScreen = (props: any) => {

  const history = useHistory();

  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(false)


  const [unique_project_title, setunique_project_title] = useState([])
  const [unique_task_title, setunique_task_title] = useState([])

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



  useEffect(() => {
    props.setheader_options(screen_header_elements)

    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    getProject(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        console.log(">>>>>>>>>>>", data.data)
        setlistItems(data.data)
        let title: Iterable<any> | null | undefined = []
        data.data.forEach((element: any) => {
          title.push(element.title)
        });
        setunique_project_title(Array.from(new Set(title)))
      } else {
        setspinner(false)
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, token)

  }, [])

  let token = JSON.parse(String(localStorage.getItem("AuthToken")))
  getMainTask(async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log(">>>>>>>>>>>", data.data)
      setlistItems(data.data)
      let title: Iterable<any> | null | undefined = []
      data.data.forEach((element: any) => {
        title.push(element.title)
      });
      setunique_task_title(Array.from(new Set(title)))
    } else {
      setspinner(false)
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  }, token)

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

  const Active_projects = () => {
    return (
      <div className='Dashboard_Card'>
        <div className='Card_Title'>Active Projects</div>
        <div className="Card_Band"></div>
        <div className='Card_Details_wrapper'>
          {unique_project_title.map((element) => {
            return <div className="Card_Details">{element}</div>
          })
          }
        </div>
      </div>
    )
  }

  const Pending_tasks = () => {
    return (
      <div className='Dashboard_Card'>
        <div className='Card_Title'>Pending Tasks</div>
        <div className="Card_Band"></div>
        <div className='Card_Details_wrapper'>
          {unique_task_title.map((element) => {
            return <div className="Card_Details">{element}</div>
          })
          }
        </div>
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
        <div className="xyz">
          <Active_projects />
          <Pending_tasks />
        </div>
      </div>
    </div >
  );
}

export default HomeScreen
function gwtProject(arg0: (data: any, errorresponse: any) => Promise<void>, token: any) {
  throw new Error('Function not implemented.');
}

