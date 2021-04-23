import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import * as add from '../../assets/add.svg'
import Spinner, { ProgressBar } from 'components/Common/Spinner';
import AddEditProject from 'components/Forms/AddEditProject';
import { getMainTask, getProject } from 'utils/api';
import * as settings from '../../assets/settings.svg'

import * as up_down_arrow from '../../assets/up_down.svg'


const Notifications = (props: any) => {

  const history = useHistory();

  const [spinner, setspinner] = useState(true)

  useEffect(() => {
    setspinner(false)

  }, [])


  const Card = ({ card_title, card_body }) => {
    const [card_open, setCard_open] = useState(true)
    return (
      <div className='dashboard_card'>
        <div className='card_title'>
          {card_title}
          <img className={card_open ? 'open_close_arrow_icon' : 'open_close_arrow_icon rotate180'} src={up_down_arrow} onClick={() => { setCard_open(!card_open) }} />
        </div>
        {card_open &&
          <div className='card_details_wrapper'>
            {card_body}
          </div>
        }
      </div>
    )
  }

  return (
    <div className="main">
      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div> :
          <Card card_title="Notifications"
            card_body={
              <div className="user_notifications_table">

                <div className="user_notification_title_container">

                  <div className="user_notification_title_subcontainer1">
                    <img className='header_icon' src={settings} />
                    <div className="user_notification_title">Media Cannibal</div>
                  </div>

                  <div className="user_notification_title_subcontainer2">

                    <div className="user_notification_notify">
                      <img className='header_icon' src={settings} />
                      <div>
                        <div className="user_notification_title_text">Call Them</div>
                        <div>miss call</div>
                      </div>
                      <div>2 hours ago</div>
                    </div>
                    <div className="user_band"></div>
                    <div className="user_notification_notify">
                      <img className='header_icon' src={settings} />
                      <div>
                        <div className="user_notification_title_text">What's up</div>
                        <div>hello</div>
                      </div>
                      <div>6 hours ago</div>
                    </div>

                  </div>

                </div>

                <div className="user_notification_title_container">

                  <div className="user_notification_title_subcontainer1">
                    <div>***</div>
                    <div className="user_notification_title">Media Cannibal</div>
                  </div>

                  <div className="user_notification_title_subcontainer2">

                    <div className="user_notification_notify">
                      <div>...</div>
                      <div>
                        <div className="user_notification_title_text">Call Them</div>
                        <div>miss call</div>
                      </div>
                      <div>2 hours ago</div>
                    </div>
                    <div className="user_band"></div>
                    <div className="user_notification_notify">
                      <div>!!!</div>
                      <div>
                        <div className="user_notification_title_text">What's up</div>
                        <div>hello</div>
                      </div>
                      <div>6 hours ago</div>
                    </div>

                  </div>

                </div>

              </div>

            } />

        }
      </div>
    </div >
  );
}

export default Notifications
function gtProject(arg0: (data: any, errorresponse: any) => Promise<void>) {
  throw new Error('Function not implemented.');
}

