import React, { useEffect, useState } from 'react'
import './style.css'
import '../../../components/app.css'
import { useHistory } from 'react-router-dom';


const UserProfile = () => {

  const history = useHistory();

  const [usertype, setusertype] = useState("NORMAL")
  const [profile_picture, setprofile_picture] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")

  useEffect(() => {

    console.log("screenlocation: ", location.pathname);

    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      let usertype = UserDetails.user_type
      let profile_picture = UserDetails.photo_url
      let firstname = UserDetails.firstname
      let lastname = UserDetails.lastname
      let email = UserDetails.email
      console.log(screen, usertype)
      setusertype(usertype)
      setprofile_picture(profile_picture)
      setfirstname(firstname)
      setlastname(lastname)
      setemail(email)
    }
  }, [])


  return (
    <>
      <div className="main">
        <div className="body">
          <div>
            <div className="user_details">
              <div className="user_details_sub_container">
                <img className='user_profile_picture' src={profile_picture} />

                <div className="user_profile_text">My Profile</div>

                <div className='user_sub_details'>
                  <div className="user_details_text">User Type:</div>
                  {usertype}
                </div>

                <div className='user_sub_details'>
                  <div className="user_details_text">Name:</div>
                  {firstname} {lastname}
                </div>

                <div className='user_sub_details'>
                  <div className="user_details_text">E-mail:</div>
                  {email}
                </div>
              </div>

              <div className="user_details_sub_container">
                <div className='user_sub_details'>
                  <div className="user_details_text">Active Project:</div>
                </div>

                <div className='user_sub_details'>
                  <div className="user_details_text">Active Task:</div>
                </div>

                <div className='user_sub_details'>
                  <div className="user_details_text">Project History:</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile