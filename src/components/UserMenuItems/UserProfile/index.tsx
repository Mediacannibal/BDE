import React, { useEffect, useState } from 'react'
import './style.css'
import '../../../components/app.css'
import { useHistory } from 'react-router-dom';
import { ColourObject } from 'store/ColourStore'


const UserProfile = () => {

  const history = useHistory();
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [usertype, setusertype] = useState("NORMAL")
  const [profile_picture, setprofile_picture] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")

  useEffect(() => {

    // console.log("screenlocation: ", location.pathname);

    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      let usertype = UserDetails.user_type
      let profile_picture = UserDetails.photo_url
      let firstname = UserDetails.firstname
      let lastname = UserDetails.lastname
      let email = UserDetails.email
      // console.log(screen, usertype)
      setusertype(usertype)
      setprofile_picture(profile_picture)
      setfirstname(firstname)
      setlastname(lastname)
      setemail(email)
    }

    if (!Colour) {
      loadColour();
    }
  }, [])


  return (
    <>
      <div className="main">
        <div className="body">
          <div className="user_main_container" style={{ backgroundColor: colourObj.color_6 }}>
            <div className="user_container">

              <div className="user_warp">
                <div className="user_sub_container1" style={{ color: colourObj.color_5 }}>
                  <img className='user_profile_picture' src={profile_picture} />

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_profile_text" style={{ color: colourObj.color_21 }}>My Profile</div>
                  </div>

                  <div className="user_band" style={{ backgroundColor: colourObj.color_1 }}>

                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>User Type:</div>
                    <div className="user_data" style={{ color: colourObj.color_1 }}>{usertype}</div>
                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>Name:</div>
                    <div className="user_data" style={{ color: colourObj.color_1 }}>{firstname} {lastname}</div>
                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>E-mail:</div>
                    <div className="user_data" style={{ color: colourObj.color_1 }}>{email}</div>
                  </div>
                </div>
              </div>

              <div className="user_warp">

                <div className="user_sub_container2" style={{ color: colourObj.color_5 }}>
                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_profile_text" style={{ color: colourObj.color_21 }}>Company</div>
                  </div>

                  <div className="user_band" style={{ color: colourObj.color_21 }}>

                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>Company Name:</div>
                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>Branch Name:</div>
                  </div>
                </div>

                <div className="user_sub_container2" style={{ color: colourObj.color_5 }}>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_profile_text" style={{ color: colourObj.color_21 }}>Project</div>
                  </div>

                  <div className="user_band" style={{ color: colourObj.color_21 }}>

                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>Active Project:</div>
                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>Active Task:</div>
                  </div>

                  <div className='user_sub_details' style={{ color: colourObj.color_4 }}>
                    <div className="user_details_text" style={{ color: colourObj.color_1 }}>Project History:</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;