import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import Spinner from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';


const HomeScreen = (props: any) => {

  const history = useHistory();

  const [popup, setpopup] = useState(false)
  const [spinner, setspinner] = useState(false)


  useEffect(() => {
    props.setheader_options(screen_header_elements)

    let token = JSON.parse(String(localStorage.getItem("AuthToken")))
    if (token === null)
    // history.push("/Login")
    { }
    else {
      let usertype = JSON.parse(String(localStorage.getItem("UserDetails"))).user_type
      if (usertype !== "SUPERUSER") {
        // history.push("/")
      }
    }
  }, [])

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
          <div className="Card_Details">Project 1</div>
          <div className="Card_Details">Project 2</div>
          <div className="Card_Details">Project 3</div>
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
        </div>
      </div>
    </div >
  );
}

export default HomeScreen
