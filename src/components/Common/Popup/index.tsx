import React, { useEffect } from 'react'
import { useState } from 'react';
import { ColourObject } from 'store/ColourStore';
import './style.css'

const Popup = ({ title, desc1, desc2, popup_body, confirmClick, cancelClick, actionable, popup_type, assignee }) => {

  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [popup_Title_Text, setpopup_Title_Text] = useState(true);
  const [popup_description_Text, setPopup_description_Text] = useState(true);
  const [popup_assignee, setpopup_assignee] = useState(true);
  const [popus_body_container, setPopus_body_container] = useState(true);
  const [popout, setpopout] = useState(true);

  const KeyPressEsc = (event: { key: string; }) => {
    if (event.key === 'Escape') {
      setpopout(false)
    }
  }

  useEffect(() => {
    if (!Colour) {
      loadColour();
    }
  }, [])

  return (
    <div className="popup_wrapper">
      <div className={popout ? "popup_bg" : "popup_bg_cancel"} onClick={cancelClick}></div>
      <div className={popout ? popup_type + " " + "popup_container" : "popup_container_cancel"} >
        <div className="popup" style={{ backgroundColor: colourObj.color_15 }} >

          {backendresponse_popup ?
            <>
              <div className='title' style={{ color: colourObj.color_2 }}>{backendresponse}</div>
              {/* <div className='popup_description'>
                  <div className='popup_text'>The following Bracket Entry will be updated!</div>
                  </div> */}
              <div className='popup_button_container'>
                <div
                  onClick={() => {
                    console.log("***CANCEL***")
                    setbackendresponse_popup(false)
                  }}
                  className='popup_cancel_button'>OK</div>
              </div>
            </>
            :
            <>
              {popup_Title_Text ?
                <>
                  <div className='popup_title' style={{ color: colourObj.color_1 }}>
                    {title}
                  </div>
                  <div className="popup_band"></div>
                </>
                :
                null
              }

              {popup_description_Text ?
                <div className='popup_description'>
                  <div className='popup_text' style={{ color: colourObj.color_2 }}>
                    {desc1}
                  </div>
                  <div className='popup_text' style={{ color: colourObj.color_2 }}>
                    {desc2}
                  </div>
                </div>
                :
                null
              }


              {popus_body_container

                ? popup_body
                : null
              }

              {actionable !== false &&
                < div className='popup_button_container'>
                  <button
                    onClick={confirmClick}
                    className='popup_submit_button'>Confirm</button>
                  <button
                    onClick={() => {
                      setpopout(false)
                      setTimeout(() => {
                        cancelClick()
                      }, 390);
                    }}
                    onKeyPress={KeyPressEsc}
                    className='popup_cancel_button'>Cancel</button>
                </div>
              }

            </>
          }
        </div>
      </div >
    </div>
  )
}

export default Popup;


