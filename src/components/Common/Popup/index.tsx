import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.css'

const Popup = ({ title, desc1, desc2, popup_body, confirmClick, cancelClick }) => {

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [popup_Title_Text, setpopup_Title_Text] = useState(true);
  const [popup_description_Text, setPopup_description_Text] = useState(true);
  const [popus_body_container, setPopus_body_container] = useState(true);
  const [ispopup, setispopup] = useState(true)

  useEffect(() => {
    console.log(title, desc1, desc2, popup_body, confirmClick, cancelClick)
    if (((desc1 === null) || (desc1 === undefined)) && ((desc2 === null) || (desc2 === undefined))) {
      setPopup_description_Text(false)
    }
  }, [])

  return (

    <div>
      {ispopup ?
        <div className="popup_bg">
          <div className="popup_container">
            <div className="popup">

              {backendresponse_popup ?
                <>
                  <div className='title'>{backendresponse}</div>
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
                    < div className='popup_title'>
                      {title}
                    </div>
                    :
                    null
                  }

                  {popup_description_Text ?
                    <div className='popup_description'>
                      <div className='popup_text'>
                        {desc1}
                      </div>
                      <div className='popup_text'>
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

                  <div className='popup_button_container'>
                    <div
                      onClick={confirmClick}
                      className='popup_submit_button'>Confirm</div>
                    <div
                      onClick={cancelClick}
                      className='popup_cancel_button'>Cancel</div>
                  </div>
                </>

              }

            </div>
          </div >
        </div>
        : null
      }
    </div>
  )
}

export default Popup


