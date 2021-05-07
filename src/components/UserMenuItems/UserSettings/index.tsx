import React, { useEffect, useState } from 'react'
import './style.css'
import '../../../components/app.css'
import { useHistory } from 'react-router-dom';
import Popup from 'components/Common/Popup';


const UserSettings = ({ setPopup }) => {

  const history = useHistory();

  const [usertype, setusertype] = useState("NORMAL")
  const [username, setUsername] = useState("")
  const [profile_picture, setprofile_picture] = useState("")

  const [ispopup, setispopup] = useState(false)

  useEffect(() => {

    console.log("screenlocation: ", location.pathname);

    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      let usertype1 = UserDetails.user_type
      let username1 = UserDetails.firstname
      let profile_picture = UserDetails.photo_url
      // console.log(screen, usertype1)
      setusertype(usertype1)
      setUsername(username1)
      setprofile_picture(profile_picture)
    }
  }, [])


  return (
    <>
      { !ispopup ?
        <Popup
          cancelClick={setPopup}
        />
        :
        null
      }
    </>
  );
}

export default UserSettings;
