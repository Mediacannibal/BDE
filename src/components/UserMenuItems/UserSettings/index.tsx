import React, { useEffect, useState } from 'react'
import './style.css'
import '../../../components/app.css'
import { useHistory } from 'react-router-dom'
import Popup from 'components/Common/Popup'
import Card from 'components/Common/Card'
import { ColourObject } from 'store/ColourStore'

const UserSettings = ({ setPopup }) => {
  const history = useHistory()

  const [usertype, setusertype] = useState('NORMAL')
  const [username, setUsername] = useState('')
  const [profile_picture, setprofile_picture] = useState('')
  const { Colour, setColour, loadColour } = ColourObject()

  const [ispopup, setispopup] = useState(false)

  useEffect(() => {
    console.log('screenlocation: ', location.pathname)

    let UserDetails = JSON.parse(String(localStorage.getItem('UserDetails')))
    if (UserDetails !== null) {
      let usertype1 = UserDetails.user_type
      let username1 = UserDetails.firstname
      let profile_picture = UserDetails.photo_url
      // console.log(screen, usertype1)
      setusertype(usertype1)
      setUsername(username1)
      setprofile_picture(profile_picture)
    }

    if (!Colour) {
      loadColour();
    }
  }, [])

  return (
    <>
      {!ispopup ? (
        <Popup
          title={"Settings"}
          desc1={"Choose the theme color"}
          popup_body={
            <Card
              card_title={'Colors'}
              card_body={
                <div className="color_container" style={{}}>
                  <div className="color_sub_container">
                    <div className="color_1 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#154360"
                        }
                      )
                      setPopup()
                    }}>
                    </div>
                    <div className="color_2 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#01003c"
                        }
                      )
                      setPopup()
                    }}>
                    </div>
                    <div className="color_3 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#ff0000"
                        }
                      )
                      setPopup()
                    }}>
                    </div>
                    <div className="color_4 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#242446"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_5 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#ffffff"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_6 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#00000019"
                        }
                      )
                      setPopup()
                    }}></div>
                  </div>

                  <div className="color_sub_container">
                    <div className="color_7 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#60ce80"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_8 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#fcfeff"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_9 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#eac952"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_10 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#60ce80"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_11 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#dc0000"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_12 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#efecec"
                        }
                      )
                      setPopup()
                    }}></div>
                  </div>

                  <div className="color_sub_container">
                    <div className="color_13 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#00008b"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_14 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#449698"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_15 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#ddd"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_16 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#378587"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_17 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#639A4D"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_18 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#fc595a"
                        }
                      )
                      setPopup()
                    }}></div>
                  </div>

                  <div className="color_sub_container">
                    <div className="color_19 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#4fb5ff"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_20 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#dcfd47"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_21 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#000000"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_22 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#e06a6a19"
                        }
                      )
                      setPopup()
                    }}></div>
                    <div className="color_23 color_box" onClick={() => {
                      setColour(
                        {
                          "primary": "#acfc91c2"
                        }
                      )
                      setPopup()
                    }}></div>
                  </div>
                </div>
              } />
          }
        />
      ) : (
        <Popup
          cancelClick={
            setPopup
          } />
      )}
    </>
  )
}

export default UserSettings
