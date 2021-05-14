import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../components/app.css'
import * as sendIcon from '../../assets/send.svg'
import * as AttachmentImg from '../../assets/attach-paperclip-symbol.png'
import { ProgressBar } from 'components/Common/Spinner';
import SimpleEditor from 'react-simple-image-editor';
import { useAuth } from 'store/authStore';
import Footer from '../Common/Footer';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { userInfo } from 'os';
const chatSocket: WebSocket = new WebSocket("wss://apimccbdechat.mediacannibal.com/ws/chat/roomName/");

const TaskDetails = () => {
  const { auth } = useAuth();

  const history = useHistory();
  const [spinner, setspinner] = useState(true)

  const [usertype, setusertype] = useState("NORMAL")
  const [userID, setuserID] = useState("")

  const [tasknameinput, settasknameinput] = useState(false)
  const [taskpriorityinput, settaskpriorityinput] = useState(false)
  const [taskDueinput, settaskDueinput] = useState(false)
  const [taskasigneeinput, settaskasigneeinput] = useState(false)
  const [taskDescriptioninput, settaskDescriptioninput] = useState(false)
  const [taskHistoryinput, settaskHistoryinput] = useState(false)


  const [chat_now, setchat_now] = useState('')
  const [chat_log, setchat_log] = useState('')
  const [userinfo, setuserinfo] = useState('')

  useEffect(() => {
    chatSocket.onmessage = (e) => {
      var data = JSON.parse(e.data);
      var message = data['message'];
      setchat_log(String(document.getElementById('chatlog').value) + '\n' + message)
    };
    let UserDetails = JSON.parse(String(localStorage.getItem("UserDetails")))
    if (UserDetails !== null) {
      setspinner(false)
      setuserinfo(UserDetails)
      // console.log(screen, user_id, usertype1)
      setusertype(UserDetails.user_type)
      setuserID(UserDetails.user_id)
    }
  }, [])


  return (
    <div className="main">
      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div>
          :
          <>
            <div className="MAINsomwethin">

              <div className="task_details">

                <div className="column">
                  <div className="subtitle">Task:{tasknameinput ? <input></input> : <div>Add image</div>} </div>
                </div>

                <div className="column">
                  <div className="subtitle">Priority: {taskpriorityinput ? <input></input> : <div>Add Table</div>} </div>
                  <div className="subtitle">Due Date:{taskDueinput ? <input></input> : <div>15-03-2021</div>}</div>
                  <div className="subtitle">Assignee:{taskasigneeinput ? <input></input> : <div>Kiran</div>}</div>

                </div>

              </div>

              <div className="tasklog">
                <div className="subtitle">Descrition:{taskDescriptioninput ? <input></input> : <div>Some description</div>}</div>
                <div className="subtitle">History:{taskHistoryinput ? <input></input> : <div>Some history</div>}</div>
              </div>

              <div className="chat_container">
                <div className="subtitle">CHAT</div>
                <textarea id={"chatlog"} className="chatbox"
                  value={String(chat_log)}>
                </textarea>
                <div className="bottom_container">
                  <div className="icon_container" onClick={() => { }}>
                    <img className="iconimg" src={AttachmentImg} />
                  </div>
                  <input className="message_box"
                    placeholder="Type a message"
                    type="text"
                    onChange={(e) => { setchat_now(e.target.value) }}
                    value={chat_now} />
                  <div className="icon_container" onClick={(e) => {
                    let message = chat_now
                    chatSocket.send(JSON.stringify({
                      'message': userinfo.firstname + ' ' + userinfo.lastname + ":" + message
                    }));
                    console.log(message);

                    setchat_now("")
                  }}>
                    <img className="iconimg" src={sendIcon} />
                  </div>
                </div>

                <div>
                  {/* <Launcher
                agentProfile={{
                  teamName: 'react-chat-window',
                  imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                // onMessageWasSent={this._onMessageWasSent.bind(this)}
                // messageList={this.state.messageList}
                showEmoji
              /> */}
                </div>
              </div>
            </div>
          </>
        }
      </div>
      <Footer />
    </div >
  )
}

export default TaskDetails;
