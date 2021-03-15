import Popup from 'components/Common/Popup'
import React, { useEffect, useState } from 'react'
import * as micOn from '../../assets/microphone.png'
import * as micMute from '../../assets/mute.png'
import * as userIcon from '../../assets/user_icon.svg'
import './style.css'

const MeetingScreen = () => {
  const [popup, setpopup] = useState(true)
  const [mic, setmic] = useState(true)


  return (
    <div className="main">
      <div className="body">
        {popup ?
          <>
            <div>
              <Popup
                title={"Join Meeting"}
                videoscreen={
                  <div className="popup_video_screen">
                    <img className="popup_user_icon" src={userIcon} />
                  </div>
                }
                mic={
                  <>
                    <div className="popup_mic_container">
                      <button className="popup_mic_button" onClick={() => { setmic(!mic) }}>
                        {mic ?
                          <img className="popup_micimg" src={micOn} />
                          :
                          <img className="popup_micimg" src={micMute} />}
                      </button>

                      <button className="popup_mic_button" onClick={() => { setmic(!mic) }}>
                        {mic ?
                          <img className="popup_micimg" src={micOn} />
                          :
                          <img className="popup_micimg" src={micMute} />}
                      </button>
                    </div>
                  </>
                }
                desc1={""}
                desc2={""}
                listitems={[]}
                confirmClick1={() => {
                }}
              />
            </div>
          </>
          :
          null
        }
      </div>
    </div>
  );
}

export default MeetingScreen