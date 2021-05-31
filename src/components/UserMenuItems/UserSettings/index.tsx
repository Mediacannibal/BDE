import React, { useEffect, useState } from 'react'
import './style.css'
import '../../../components/app.css'
import { useHistory } from 'react-router-dom'
import Popup from 'components/Common/Popup'
import Card from 'components/Common/Card'
import { ColourObject } from 'store/ColourStore'
import { PhotoshopPicker, SketchPicker } from 'react-color'

const UserSettings = ({ setPopup }) => {
  const history = useHistory()
  const [pick_color, setpick_color] = useState("#ff0000");

  const [usertype, setusertype] = useState('NORMAL')
  const [username, setUsername] = useState('')
  const [profile_picture, setprofile_picture] = useState('')
  const { Colour, colourObj , setcolourObj,setColour, loadColour } = ColourObject()

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
      {!ispopup &&
        <Popup
          title={"Settings"}
          desc1={"Choose the theme color"}
          popup_body={
            <>
              <Card
                card_title={'Colors'}
                card_body={
                  <div className="color_container" style={{}}>
                    <div className="color_sub_container">
                      {Colour.map((obj: any) => {
                        return (
                          (!obj.selected) ?
                            <div className="color_box_selected"
                              style={{
                                backgroundColor: obj.colour
                              }}
                              onClick={() => {
                                let newcolour = Colour
                                newcolour = newcolour.map(
                                  (t: any) => {
                                    const fun = () => {
                                      let a = t;
                                      a.selected = !a.selected
                                      return a
                                    }
                                    const defun = () => {
                                      let a = t;
                                      a.selected = true
                                      return a
                                    }
                                    return (obj.id === t.id) ? fun() : defun();
                                  }
                                )

                                setColour(newcolour)
                              }}>
                            </div>
                            :
                            <div className="color_box"
                              style={{
                                backgroundColor: obj.colour
                              }}
                              onClick={() => {
                                let newcolour = Colour
                                newcolour = newcolour.map(
                                  (t: any) => {
                                    const fun = () => {
                                      let a = t;
                                      a.selected = !a.selected
                                      return a
                                    }
                                    const defun = () => {
                                      let a = t;
                                      a.selected = true
                                      return a
                                    }
                                    return (obj.id === t.id) ? fun() : defun();
                                  }
                                )

                                setColour(newcolour)
                              }}>
                            </div>
                        )
                      })}

                    </div>
                  </div>
                }
              />

              <Card
                card_title={'Colors'}
                card_body={
                  <div>
                    <SketchPicker
                      color={pick_color}
                      onChangeComplete={color => {
                        let newcolour = Colour

                        newcolour = newcolour.map(
                          // (t:any) => t
                          (t: any) => {
                            const fun = () => {
                              let a = t
                              a.colour = color.hex
                              return a
                            }
                            return (t.selected === false) ? fun() : t
                          }

                        )

                        setColour(newcolour)
                        // setPopup()
                      }} />
                  </div>
                }
              />
            </>
          }
          actionable={false}
          cancelClick={setPopup}
        />
      }
    </>
  )
}

export default UserSettings
